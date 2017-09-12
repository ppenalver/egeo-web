/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/switch';
import {
   startsWith as _startsWith,
   defaultTo as _defaultTo,
   unescape as _unescape
} from 'lodash';
import { html_beautify } from 'js-beautify';

import { Documentation, DocumentationApi, DocumentationApiProperty, CodeApi } from './automatic-doc.model';

@Injectable()
export class AutomaticDocService {

   private documentationList: Observable<Documentation[]> | undefined = undefined;

   constructor(private http: Http) {
      this.getDocumentationList();
   }

   getDocumentation(doc: string): Observable<Documentation> {
      return this.getDocumentationList().map(docList => docList.find(_ => _.id === doc));
   }

   getDocumentationList(): Observable<Documentation[]> {
      if (this.documentationList === undefined) {
         this.documentationList = this.http.get(location.pathname + 'assets/docs/md/index.md')
            .map(response => this.getIndex(response.text()))
            .map(index => this.getAllDocs(index))
            .switch();
      }
      return this.documentationList;
   }

   private getAllDocs(indexList: string[]): Observable<Documentation[]> {
      const listOfGets: Observable<Documentation>[] = indexList.map(_ => this.getDoc(_));
      return this.zipObservables(listOfGets);
   }

   private zipObservables(list: Observable<Documentation>[]): Observable<Documentation[]> {
      if (list && list.length > 0) {
         return list[0].zip(...list.slice(1));
      } else {
         return Observable.of([]);
      }
   }

   private getDoc(docName: string): Observable<Documentation> {
      return this.http.get(location.pathname + `assets/docs/md/${docName}`)
         .map(response => this.parseTextToDocumentation(_unescape(response.text()), docName));
   }

   private getIndex(text: string): string[] {
      const regexp = new RegExp(/\((.*?)\)/igm);
      let result: RegExpMatchArray | null;
      const docs: string[] = [];
      while ((result = regexp.exec(text)) !== null) {
         docs.push(result[1]);
         result = /\((.*?)\)/igm.exec(text);
      }
      return docs;
   }

   private parseTextToDocumentation(text: string, id: string): Documentation {
      const sections: string[] = this.getAllResults(text, /#*?((.|[\r\n])+?)(#|$)/g, 1);
      const finalDoc: Documentation = new Documentation();
      finalDoc.id = id.replace('.md', '');
      console.log(finalDoc.id);
      return sections.reduce((doc, section) => {
         section = this.removeHash(section);
         if (_startsWith(section, 'Inputs') || _startsWith(section, 'Outputs')) {
            // Parse input/output table
            this.parseTable(doc, section);
         } else if (_startsWith(section, 'Example')) {
            doc.example = [...this.parseExample(this.normalizeText(section.replace('Example', '')))];
         } else if (_startsWith(section, 'Models')) {
            doc.model = [...this.parseModels(this.normalizeText(section.replace('Models', '')))];
         } else {
            // Parse main description and title
            this.parseMain(doc, section);
         }
         return doc;
      }, finalDoc);
   }

   private parseTable(doc: Documentation, text: string): Documentation {
      const isInput: boolean = _startsWith(text, 'Inputs');
      const isOutput: boolean = _startsWith(text, 'Outputs');
      if (!doc.api) {
         doc.api = new DocumentationApi();
      }
      const lines: string[] = text.split(/[\r\n]/).slice(3);
      let docProperties: DocumentationApiProperty[] = [];
      docProperties = lines.map(line => this.parseApiProperty(this.getPropertyCols(line), isInput));

      if (isInput) {
         doc.api.inputs = docProperties;
      } else if (isOutput) {
         doc.api.outputs = docProperties;
      }
      return doc;
   }

   private getPropertyCols(line: string): string[] {
      const replaceValue: string = '~pipeElement~';
      const internalLine: string = line.substring(1, line.length - 1).replace(/\\\|/g, replaceValue);
      return internalLine.split(/\|/).map(_ => _.replace(new RegExp(replaceValue, 'g'), '\|'));
   }

   private parseApiProperty(columns: string[], isInput: boolean): DocumentationApiProperty {
      const docProp: DocumentationApiProperty = new DocumentationApiProperty();
      docProp.name = columns[0].trim();
      docProp.type = columns[1].trim();
      if (isInput) {
         docProp.required = columns[2].trim() === 'True';
         docProp.description = columns[3].trim();
         docProp.defaultValue = columns[4].trim();
      } else {
         docProp.description = columns[2].trim();
      }
      return docProp;
   }

   private parseExample(text: string): CodeApi[] {
      const finalList: CodeApi[] = [];
      const reg: RegExp = /(\*(.*?)\*)?((.|[\r\n])*?)?```(.*?)\n((.|[\r\n])*?)```/g;
      let match: RegExpMatchArray | null = null;
      do {
         match = reg.exec(text);
         if (match) {
            finalList.push(this.extractModelInfo(match[0]));
         }
      } while (match);
      return finalList;
   }

   private parseModels(text: string): CodeApi[] {
      const finalList: CodeApi[] = [];
      const reg: RegExp = /(.|[\r\n])*?```(.|[\r\n])*?```/g;
      let match: RegExpMatchArray | null = null;
      do {
         match = reg.exec(text);
         if (match) {
            finalList.push(this.extractModelInfo(match[0]));
         }
      } while (match);
      return finalList;
   }

   private extractModelInfo(text: string): CodeApi {
      const internalText: string = this.normalizeText(text);
      const reg: RegExp = /(\*(.*?)\*)?((.|[\r\n])*?)?```(.*?)\n((.|[\r\n])*?)```/g;
      let match: RegExpMatchArray | null = null;
      match = reg.exec(internalText);
      return {
         title: match[2],
         desc: match[3],
         type: match[5],
         code: match[6]
      };
   }

   private getDefaultValue(text: string): string {
      return this.normalizeText(this.applyRegexp(text, /, default:(.*?)$/g, 1));
   }

   private getDescription(text: string): string {
      return this.normalizeText(this.applyRegexp(text, /(.*?)(, default:.*?)?$/g, 1));
   }

   private parseMain(doc: Documentation, text: string): Documentation {
      doc.title = this.normalizeText(this.applyRegexp(text, /^(.*?)\s\(/gm, 1));
      doc.type = this.normalizeText(this.applyRegexp(text, /\((.*?)\)\n/gm, 1));
      doc.description = this.normalizeText(this.applyRegexp(text, /\)((.|[\r\n])+)/gm, 1), true);
      return doc;
   }

   private applyRegexp(text: string, reg: RegExp, valueToTake: number): string {
      const result: RegExpMatchArray | null = reg.exec(text);
      if (result !== null) {
         return result[valueToTake];
      }
      return '';
   }

   private removeHash(text: string): string {
      return text.replace(/^#*?\s/gm, '').trim();
   }

   private normalizeText(text: string, removeLineBreak: boolean = false): string {
      text = _defaultTo(text, '').trim();
      if (text.length > 0) {
         if (removeLineBreak) {
            text = text.replace(/(\r\n|\n|\r)/gm, '');
         }
         while (_startsWith(text, '\n')) {
            text = text.substring(1);
         }
         while (_startsWith(text, '\r')) {
            text = text.substring(1);
         }
         while (_startsWith(text, '\t')) {
            text = text.substring(1);
         }
      }
      return text.trim();
   }

   private getAllResults(text: string, reg: RegExp, valueToTake: number): string[] {
      let match: RegExpMatchArray | null = null;
      const result: string[] = [];
      do {
         match = reg.exec(text);
         if (match) {
            result.push(match[valueToTake].trim());
         }
      } while (match);
      return result;
   }
}
