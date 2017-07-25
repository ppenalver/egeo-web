import { Component, ViewEncapsulation } from '@angular/core';
import { StTab } from '@stratio/egeo';
import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'radio-example',
   templateUrl: 'radio.component.html'
})

export class RadioComponent {

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Radio and Radio Group Component',
      description: 'The radio component is for use normaly inside a form acting as the standard html radio input, you can use too outside a form like a template driven form.',
      haveModel: false,  // True for show label False for hide
      apiSection: {
         inputs: [
            { paramName: 'value', type: 'any', required: true, details: 'Value of the radio component, is required for the radio-component' },
            { paramName: 'name', type: 'string', required: false, details: 'Name of the radio component' },
            { paramName: 'selected', type: 'StRadioComponent', required: false, details: 'Whether the radio component is selected.' },
            { paramName: 'disabled', type: 'boolean', required: false, details: 'Whether the radio component is disabled.' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Prefix used to generate the id values for qa tests' }
         ],
         outputs: [
            { paramName: 'change', type: 'RadioChange', required: false, details: 'The event issued when the value of the radio group changes' }
         ]
      },
      exampleDesc: `Next, you can see an example of a st-radio component above an radio group component`
   };
   // tslint:enable:max-line-length

}
