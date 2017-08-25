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
import * as _ from 'lodash';

import { IconModel } from './icons.model';

@Injectable()
export class IconsService {

   constructor(private http: Http) { }

   getIconList(): Observable<IconModel[]> {
      return this.http.get(location.pathname + 'assets/egeo-theme-stratio.css')
         .map(response => response.text())
         .map(text => this.getIconClasses(text));
   }

   private getIconClasses(text: string): IconModel[] {
      const result: IconModel[] = [];
      let execResult: RegExpExecArray;
      const regex = /.icon-(.*?)\:before {[\n].*?content: \"(.*?)"/gm;

      do {
         execResult = regex.exec(text);
         if (execResult) {
            result.push({
               name: execResult[1] || '',
               key: execResult[2] || ''
            });
         }
      } while (execResult);
      return result.sort(this.strComparator);
   }

   private strComparator(item1: IconModel, item2: IconModel): number {
      return item1.name.localeCompare(item2.name);
   }
}
