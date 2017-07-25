import { Component } from '@angular/core';
import { ApiDoc, TYPES } from '../../shared';
import { StRadioMenuOption } from '@stratio/egeo';

@Component({
   selector: 'radio-menu-example',
   templateUrl: 'radio-menu.component.html',
   styleUrls: ['radio-menu.component.scss']
})

export class RadioMenuComponent {
   options: Array<StRadioMenuOption>;
   selectedOptionTheme1: StRadioMenuOption;
   selectedOptionTheme2: StRadioMenuOption;
   apiDoc: ApiDoc;

   constructor() {

      this.options = [{label: 'Service', value: 'service'}, {label: 'Nodes', value: 'nodes'}, {
         label: 'Casandra',
         value: 'cassandra'
      }];

      // tslint:disable:max-line-length
      this.apiDoc = {
         title: 'Radio Menu',
         description: 'The Radio Menu is composed of options with radios. Usually, it is used in forms and when user' +
         'interacts with the radio menu, certain part of that form changes according to the selected option. ' +
         'Moreover, you can add to the radio menu a specific theme in order to adapt its colors as you need it',
         haveModel: false,
         apiSection: {
            description: 'This table gives you a quick overview of the inputs and outputs of a radio menu.',
            inputs: [
               {
                  paramName: 'activeOption',
                  type: TYPES.OBJ,
                  required: false,
                  details: 'Current active option'
               },
               {
                  paramName: 'options',
                  type: TYPES.ARRAY_OBJ,
                  required: true,
                  details: 'Array of string with options, option names must be translated'
               },
               {
                  paramName: 'qaTag',
                  type: TYPES.STR,
                  required: false,
                  details: 'Identifier to generate a qa tag for each option'
               },
               {
                  paramName: 'theme',
                  type: TYPES.STR,
                  required: false,
                  details: 'String representing the theme (css class) to be applied to the radio menu component. If you are using the Stratio theme, the possible values are theme-gray-1 and theme-gray-2'
               }
            ],
            outputs: [
               {
                  paramName: 'changedOption',
                  type: TYPES.OBJ,
                  required: true,
                  details: 'Event emitted when the active option is changed. This event has the selected option as param.'
               }
            ]
         },
         exampleDesc: `Next, you can see an example of the radio menu in gray-1 and gray-2 themes.`
      };
      // tslint:enable
   }
}
