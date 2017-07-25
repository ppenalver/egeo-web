import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'tip-example',
   templateUrl: './tip.component.html'
})

export class TipComponent {

   public text: string;

   public apiDoc: ApiDoc = {
      title: 'Tip',
      description: 'Tip is a component that offers to the user extra information about a given element',
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
         title: 'Tip',
         description: 'Tip is a component that offers to the user extra information about a given element',
         haveModel: false,
         apiSection: {
            inputs: [
               { paramName: 'text', type: TYPES.STR, required: true, details: 'Text to be shown to the user' },
               { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Prefix used to generate the id values for qa tests' },
               { paramName: 'theme', type: TYPES.STR, required: false, details: 'This string indicates the theme to apply. There are two theme defined in egeo-theme: themeA and themeB. By default, themeA is applied' }
            ],
            outputs: []
         },
         exampleDesc: `Next, we can see an example of tip that is displayed`
      };
      // tslint:enable
   }
}
