
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
import { Component } from '@angular/core';
import { times as _times, filter as _filter } from 'lodash';
import { ApiDoc, TYPES } from '../../shared';

import { StItemListElement, StItemListConfig } from '@stratio/egeo';

@Component({
   selector: 'st-item-list-doc',
   templateUrl: './item-list.component.html',
   styleUrls: ['./item-list.component.scss']
})
export class StItemListDocComponent {
   public qaTag: string = 'st-item-list-demo';

   public listShort: StItemListElement[] = this.generateData(5);
   public listLong: StItemListElement[] = this.generateData(100);

   public listShortFilteredA: StItemListElement[] = this.filterList(this.listShort, '');
   public listLongFilteredA: StItemListElement[] = this.filterList(this.listLong, '');

   public listShortFilteredB: StItemListElement[] = this.filterList(this.listShort, '');
   public listLongFilteredB: StItemListElement[] = this.filterList(this.listLong, '');

   public configAll: StItemListConfig = {
       title: 'List Title',
       searchPlaceholder: 'Text for search'
   };

   public configTitle: StItemListConfig = {
       title: 'List Title',
       searchPlaceholder: ''
   };

   public configSearch: StItemListConfig = {
       title: '',
       searchPlaceholder: 'Text for search'
   };

   public themeA: string = 'themeA';
   public themeB: string = 'themeB';

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Item list',
      description: 'Use the list component to display a group of items in a listed way.',
      haveModel: true,
      apiSection: {
         inputs: [
            { paramName: 'list', type: 'StItemListElement[]', required: true, details: 'List of items to show' },
            { paramName: 'config', type: 'StItemListConfig', required: false, details: 'Config with search placeholder and title' },
            { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Id value for qa test' },
            { paramName: 'hasSearch', type: TYPES.BOOL, required: false, details: 'If true, show search. DEFAULT: false' },
            { paramName: 'align', type: 'left | right', required: false, details: 'Aligment of items. DEFAULT: left' },
            { paramName: 'theme', type: 'themeA | themeB', required: false, details: 'DEFAULT: themeA' }
         ],
         outputs: [
            { paramName: 'selectItem', type: 'StItemListElement', required: false, details: 'Nofity on select item' },
            { paramName: 'search', type: TYPES.STR, required: false, details: 'Notify on search with searched text' }
         ]
      },
      exampleDesc: ''
   };
   // tslint:enable:max-line-length

   onSelectItem(item: StItemListElement): void {
      item.selected = !item.selected;
   }

   onSearchItem(value: string, listN: number): void {
      switch (listN) {
         case 0:
            this.listShortFilteredA = this.filterList(this.listShort, value);
            break;
         case 1:
            this.listLongFilteredA = this.filterList(this.listLong, value);
            break;
         case 2:
            this.listLongFilteredB = this.filterList(this.listLong, value);
            break;
         case 3:
            this.listShortFilteredB = this.filterList(this.listShort, value);
            break;
         default:
      }
   }

   private filterList(list: StItemListElement[], filter: string): StItemListElement[] {
       return _filter(list, (item) => item.name.indexOf(filter) > -1);
   }

   private generateData(numData: number): StItemListElement[] {
      return _times(numData, (i) => {
         return {
            id: i,
            name: `Element ${i}`,
            icon: 'icon-file'
         };
      });
   }
}
