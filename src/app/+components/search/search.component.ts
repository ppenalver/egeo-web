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
import { cloneDeep as _cloneDeep } from 'lodash';
import { StDropDownMenuItem } from '@stratio/egeo';


import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'search-example',
   templateUrl: './search.component.html',
   styleUrls: ['search.component.scss']
})
export class SearchComponent {
   public apiDoc: ApiDoc;
   public placeholder: string = 'Text for search';
   public qaTag: string = 'search';
   public debounceTime: number = 0;
   public minLength: number = 0;
   public searched: string = '';
   public searchedAutocomplete: string = '';
   public menu: StDropDownMenuItem[] = [
      { label: 'China', value: 'CN' },
      { label: 'Russia', value: 'RU' },
      { label: 'China', value: 'CN' },
      { label: 'United States', value: 'US' },
      { label: 'Egypt', value: 'EG' },
      { label: 'Panama', value: 'PA' },
      { label: 'Canada', value: 'CA' },
      { label: 'Indonesia', value: 'ID' },
      { label: 'North Korea', value: 'KP' },
      { label: 'China', value: 'CN' },
      { label: 'Indonesia', value: 'ID' },
      { label: 'France', value: 'FR' },
      { label: 'Burundi', value: 'BI' },
      { label: 'Poland', value: 'PL' },
      { label: 'Russia', value: 'RU' },
      { label: 'Vanuatu', value: 'VU' },
      { label: 'Venezuela', value: 'VE' },
      { label: 'France', value: 'FR' },
      { label: 'Indonesia', value: 'ID' },
      { label: 'Indonesia', value: 'ID' }
   ];

   public filteredMenu: StDropDownMenuItem[] = [];

   /* tslint:disable:max-line-length */ // To disable tslint check of max lenght line
   constructor() {
      this.apiDoc = {
         title: 'Search',
         description: 'The search component is a box with an input inside where you can write free text to perform searches based on it. This component only fire event search with search text, not do the search. When clear the value in search box always fire a empty search value for notify and when click on zoom or enter always fire a search event with search value',
         haveModel: false,
         apiSection: {
            inputs: [
               { paramName: 'debounce', type: TYPES.NUM, required: false, details: 'Inactivity time to wait (milliseconds) before launch search. Default 0' },
               { paramName: 'liveSearch', type: TYPES.BOOL, required: false, details: 'True for search while user type in search box. When flase the user need to click on button or press enter to search. Default: true' },
               { paramName: 'minLength', type: TYPES.NUM, required: false, details: 'Minimum length to launch search event. Default 0' },
               { paramName: 'placeholder', type: TYPES.STR, required: false, details: 'Text to display as long as the user does not focus on search box, Default: Search' },
               { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Identifier to apply in search box for QA tests' },
               { paramName: 'value', type: TYPES.STR, required: false, details: 'Assign the value from outside to the search field' },
               { paramName: 'disabled', type: TYPES.BOOL, required: false, details: 'Set disable state for search, default: false' },
               { paramName: 'withAutocomplete', type: TYPES.BOOL, required: false, details: 'Show autocomplete menu when search, default: false' },
               { paramName: 'autocompleteList', type: 'StDropDownMenuItem[]', required: false, details: 'List of items to show in autocomplete dropdown menu, default: []' },
               { paramName: 'emptyAutocompleteListMessage', type: TYPES.STR, required: false, details: `Message to show when autocomplete dropdown menu its empty, default: ''` }
            ],
            outputs: [
               { paramName: 'search', type: TYPES.STR, required: true, details: 'Event fired when search' }
            ]
         },
         exampleDesc: `Next, we can see an example of Search component you can see a search box and search result.
         You can also play with different input values and see how this affects the behaivor of search component.`
      };
   }

   onSearchResult(value: string): void {
      this.searched = value;
   }

   filter(filterValue: string): void {
      this.filteredMenu = _cloneDeep(this.menu.filter(country => country.label.toLowerCase().search(filterValue.toLowerCase()) > -1));
   }

   searchWithAutocompleteSearch(searchValue: string): void {
      console.log('search');
      this.searchedAutocomplete = searchValue;
      this.filter(searchValue);
   }
}
