import { Component, OnInit } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';


@Component({
   selector: 'pagination-example',
   templateUrl: 'pagination.component.html',
   styleUrls: ['pagination.component.scss']
})
export class PaginationComponent implements OnInit {

   public page: number = 1;
   public perPage: number = 20;
   public apiDoc: ApiDoc;
   public title: string = 'pagination';
   public items: Array<any> = [];
   public items2: Array<any> = [];

   constructor(
   ) { }

   ngOnInit(): void {

      // tslint:disable:max-line-length
      this.apiDoc = {
         title: 'Pagination',
         description: 'Paging component for use in tables and lists.',
         haveModel: true,
         apiSection: {
            inputs: [
                { paramName: 'total', type: TYPES.NUM, required: true, details: 'Total number of items to page' },
                { paramName: 'perPage', type: TYPES.NUM, required: false, details: 'Number of items to show per page. By default there are 20' },
                { paramName: 'perPageOptions', type: TYPES.ARRAY_NUM, required: false, details: 'Define number of items per page. By default is [20, 50, 100]' },
                { paramName: 'currentPage', type: TYPES.NUM, required: false, details: 'Current paging page. By default is 1' },
                { paramName: 'label', type: TYPES.OBJ, required: false, details: 'Translation tags or component texts' },
                { paramName: 'showPerPage', type: TYPES.BOOL, required: false, details: 'Show dropdown of number elements per page. By default false' },
                { paramName: 'hidePerPage', type: TYPES.BOOL, required: false, details: 'Hide dropdown of number elements per page. By default false' },
                { paramName: 'theme', type: TYPES.STR, required: false, details: '. By default themeA' },
                { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id value for qa test.' }
            ],
            outputs: [
                { paramName: 'change', type: TYPES.FUNC, required: false, details: 'Output the page change action or change number of items to show per page' }
            ]
         },
         exampleDesc: ``
      };
      // tslint:enable

      this.items = this.generateItems(100);
      this.items2 = this.generateItems(50);

   }

   generateItems(n: number): Array<any> {
      const items: Array<any> = [];

      for (let i = 1; i <= n; i++) {
         items.push({
            label: 'Example' + i,
            value: i
         });
      }

      return items;
   }

   onChangePage($event: any): void {
      this.perPage = $event.perPage;
      this.page = $event.currentPage;
   }

}
