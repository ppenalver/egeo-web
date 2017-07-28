import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/zip';
import 'rxjs/add/operator/switch';

import {
   startsWith as _startsWith,
   defaultTo as _defaultTo
} from 'lodash';

import { Documentation, DocumentationApi, DocumentationApiProperty } from './automatic-doc.model';

@Injectable()
export class AutomaticDocService {

   constructor(private http: Http) { }

   getDocumentation() {
      return this.http.get(location.pathname + 'assets/docs/md/index.md')
         .map(response => this.getIndex(response.text()))
         .map(index => this.getAllDocs(index))
         .switch();
   }

   private getAllDocs(indexList: string[]): Observable<Documentation[]> {
      let listOfGets: Observable<Documentation>[] = indexList.map(_ => this.getDoc(_));
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
         .map(response => this.parseTextToDocumentation(response.text()))
   }

   private getIndex(text: string): string[] {
      let regexp = new RegExp(/\((.*?)\)/igm);
      let result: RegExpMatchArray | null;
      const docs: string[] = [];
      while ((result = regexp.exec(text)) !== null) {
         docs.push(result[1]);
         result = /\((.*?)\)/igm.exec(text);
      };
      return docs;
   }

   private getMdParts(text: string): string[] {
      let regexp = new RegExp(/#*?((.|[\r\n])+?)(#|$)/g);
      let result: RegExpMatchArray | null;
      const mdParts: string[] = [];
      while ((result = regexp.exec(text)) !== null) {
         mdParts.push(result[1]);
         result = /\((.*?)\)/igm.exec(text);
      };
      return mdParts;
   }

   private parseTextToDocumentation(text: string): Documentation {
      const sections: string[] = this.getMdParts(text);
      return sections.reduce((doc, section) => {
         section = this.removeHash(section);
         if (_startsWith(section, 'Inputs') || _startsWith(section, 'Outputs')) {
            // Parse input/output table
            this.parseTable(doc, section);
         } else if (_startsWith(section, 'Example')) {
            doc.example = this.parseExample(section);
         } else {
            // Parse main description and title
            this.parseMain(doc, section);
         }
         return doc;
      }, new Documentation());
   }

   private parseTable(doc: Documentation, text: string): Documentation {
      if (!doc.api) {
         doc.api = new DocumentationApi();
      }
      let lines: string[] = text.split(/[\r\n]/).slice(3);
      let docProperties: DocumentationApiProperty[] = [];
      docProperties = lines.map(line => this.parseApiProperty(line.split(/([^\\]|^)\|/gm)));

      if (_startsWith(text, 'Inputs')) {
         doc.api.inputs = docProperties;
      } else if (_startsWith(text, 'Outputs')){
         doc.api.outputs = docProperties;
      }
      return doc
   }

   private parseApiProperty(columns: string[]): DocumentationApiProperty {
      let normalizedCols: string[] = this.normalizeColumnList(columns);
      let docProp: DocumentationApiProperty = new DocumentationApiProperty();
      docProp.name = normalizedCols[0].trim();
      docProp.type = normalizedCols[1].trim();
      docProp.required = normalizedCols[2].trim() === 'True';
      docProp.description = this.getDescription(normalizedCols[3].trim());
      docProp.defaultValue = this.getDefaultValue(normalizedCols[3].trim());
      return docProp;
   }

   private parseExample(text: string): string {
      return this.normalizeText(text.split(/[\r\n]/).slice(1).join('\n').replace(/\`\`\`/g, ''));
   }

   private normalizeColumnList(columns: string[]): string[] {
      return columns.reduce((columns, col) => col.trim().length > 0 ? [...columns, col.trim()] : columns, []);
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
}
