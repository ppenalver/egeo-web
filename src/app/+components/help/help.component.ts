import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'help-example',
   templateUrl: './help.component.html',
   styleUrls: ['help.component.scss']
})

export class HelpComponent {

   public text: string;

   public apiDoc: ApiDoc = {
      title: 'Help',
      description: 'Help is a component that offers to the user extra information about a given element',
      haveModel: false,
      apiSection: {
         inputs: [],
         outputs: []
      },
      exampleDesc: ''
   };

   constructor() {
      this.text = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
   nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
   Nulla consequat massa quis enim.`;
      // tslint:disable:max-line-length
      this.apiDoc = {
         title: 'Help',
         description: 'Help is a component that offers to the user extra information about a given element',
         haveModel: false,
         apiSection: {
            inputs: [
               { paramName: 'text', type: TYPES.STR, required: true, details: 'Text to be shown to the user' },
               { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Prefix used to generate the id values for qa tests' },
               { paramName: 'textPosition', type: TYPES.STR, required: false, details: 'This string indicates the text position. It can be vertical or horizontal. By default, text is positioned vertically' }
            ],
            outputs: []
         },
         exampleDesc: `Next, we can see an example of help that is displayed`
      };
      // tslint:enable
   }
}
