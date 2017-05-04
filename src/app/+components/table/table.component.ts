import { Component } from '@angular/core';
import { ApiDoc, TYPES } from "../../shared/api-doc/shared/api-doc.model";
import { StTableHeader }  from '@stratio/egeo';
@Component({
   selector: 'st-table-example',
   templateUrl: './table.component.html'
})

export class TableComponent {
   public fields: StTableHeader[] = [
      { id: 'id', label: 'Id' }, { id: 'name', label: 'Name' }, { id: 'lastName', label: 'Last Name' },
      { id: 'phone', label: 'Phone' }, { id: 'company', label: 'Company' },
      { id: 'completedProfile', label: 'Completed profile' }];

   public header: boolean = true;

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Table',
      description: 'Table component has been designed in order to be able to display any content in its rows',
      haveModel: false,  // True for show label False for hide
      apiSection: {
         inputs: [
            {
               paramName: 'fields',
               type: 'Array<string>',
               required: true,
               details: 'List of field displayed in its header'
            },
            {
               paramName: 'qaTag',
               type: TYPES.STR,
               required: true,
               details: 'Prefix used to generate the id values for qa tests'
            },
            {
               paramName: 'header',
               type: TYPES.BOOL,
               required: false,
               details: 'Boolean to show or hide the header'
            },
            {
               paramName: 'sortable',
               type: TYPES.BOOL,
               required: false,
               details: 'Boolean to enable or disable to sort table data'
            }
         ],
         outputs: [
            {
               paramName: 'changeOrder',
               type: 'Order',
               required: false,
               details: 'This event is emitted when order has been changed. It has the selected order as param'
            }
         ]
      },
      exampleDesc: `Next, you can see an example of a table with varied content.`
   };
   // tslint:enable:max-line-length


   public data: Array<{id: string, name: string, lastName: string, phone: number, company: string, completedProfile: string}> = [
      {
         id: '4545-df56-s345',
         name: 'Antonio',
         lastName: 'López',
         phone: 60052520145,
         company: 'Stratio',
         completedProfile: '80%'
      },
      {
         id: '4545-df56-s345',
         name: 'Marina',
         lastName: 'Lara',
         phone: 600456520145,
         company: 'Stratio',
         completedProfile: '80%'
      },
      {
         id: '4545-df56-s345',
         name: 'álvaro',
         lastName: 'García',
         phone: 60052320145,
         company: 'Stratio',
         completedProfile: '80%'
      },
      {
         id: '4545-df56-s345',
         name: 'Marina',
         lastName: 'González',
         phone: 600455640145,
         company: 'Stratio',
         completedProfile: '80%'
      }, {
         id: '4545-df56-s345',
         name: 'Pepe',
         lastName: 'Guerrero',
         phone: 6005276845,
         company: 'Stratio',
         completedProfile: '80%'
      },
      {
         id: '4545-df56-s345',
         name: 'María',
         lastName: 'Rodríguez',
         phone: 60065620145,
         company: 'Stratio',
         completedProfile: '80%'
      }
   ];

   constructor() {

   }


}
