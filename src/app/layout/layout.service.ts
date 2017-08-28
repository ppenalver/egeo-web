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
import { StDropDownMenuItem } from '@stratio/egeo';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

import { VersionComparationOptions } from './layout.model';
import { environment } from '../../environments/environment';


@Injectable()
export class VersionService {

   constructor(private http: Http) { }

   getVersion(): Observable<string> {
      return this.http.get(location.pathname + 'assets/package.json')
         .map(response => response.json().version);
   }

   getVersions(): Observable<string[]> {
      if (!environment.production) {
         return Observable.create((observer: Observer<string[]>) => {
            observer.next(['development']);
            observer.complete();
         });
      }
      return this.http.get('https://api.github.com/repos/stratio/egeo-web/contents/?ref=gh-pages')
         .map(response => this.parseVersionResponse(response.json()));

   }

   getVersionList(): Observable<StDropDownMenuItem[]> {
      return this.getVersions().zip(this.getVersion(), (versionList, currentVersion) => versionList.map(
         version => ({label: version, value: version, selected: version === currentVersion})
      ));
   }

   private parseVersionResponse(versions: any[]): string[] {
      return versions.filter((version) => version && version.type && version.type === 'dir')
         .map((version: any) => version.name)
         .sort(this.reverseCompare.bind(this));
   }

   private reverseCompare(v1: string, v2: string): number {
      return this.versionCompare(v1, v2) * -1;
   }

   private isValidPart(part: string): boolean {
      return /^\d+$/.test(part);
   }

   private versionCompare(v1: string, v2: string): number {
      const v1parts: string[] = v1.split('.');
      const v2parts: string[] = v2.split('.');

      let v1PartsNumeric: number[];
      let v2PartsNumeric: number[];

      if (!v1parts.every((value) => this.isValidPart(value)) || !v2parts.every((value) => this.isValidPart(value))) {
         return NaN;
      }

      while (v1parts.length < v2parts.length) {
         v1parts.push('0');
      }

      while (v2parts.length < v1parts.length) {
         v2parts.push('0');
      }

      v1PartsNumeric = v1parts.map(Number);
      v2PartsNumeric = v2parts.map(Number);

      for (let i = 0; i < v1parts.length; ++i) {
         if (v2parts.length === i) {
            return 1;
         }

         if (v1parts[i] === v2parts[i]) {
            continue;
         } else if (v1parts[i] > v2parts[i]) {
            return 1;
         } else {
            return -1;
         }
      }

      if (v1parts.length !== v2parts.length) {
         return -1;
      }
      return 0;
   }
}
