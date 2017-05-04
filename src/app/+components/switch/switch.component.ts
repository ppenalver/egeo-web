import { Component } from '@angular/core';
import { ApiDoc, TYPES } from 'shared';
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
   selector: 'switch-example',
   templateUrl: './switch.component.html',
   styleUrls: ['switch.component.scss']
})

export class SwitchComponent {

   public loading: boolean;
   public model = false;
   public form: FormGroup;
   public disabled: boolean;
   public apiDoc: ApiDoc;
   
   constructor() {
      this.loading = true;
      this.apiDoc = {
         title: 'Switch',
         description: 'Component designed to enable or disable whatever you need. Switch component can be used in a form or any part of your web.',
         haveModel: false,
         apiSection: {
            inputs: [
               {
                  paramName: 'stModel',
                  type: TYPES.BOOL,
                  required: true,
                  details: 'This boolean changes when user interacts with switch'
               },
               { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Id value for qa test.' },
               {
                  paramName: 'label',
                  type: TYPES.STR,
                  required: false,
                  details: 'This boolean changes when user interacts with switch'
               },
               {
                  paramName: 'labelPosition',
                  type: TYPES.STR,
                  required: false,
                  details: 'This string indicates the label position. It can be left, right or top. By default, label is positioned at top'
               },
               {
                  paramName: 'contextualHelp',
                  type: TYPES.STR,
                  required: false,
                  details: 'Tooltip displayed when user clicks on the help button'
               }
            ],
            outputs: []
         },
         exampleDesc: `Next, you can see how to work a switch with different variations`
      };

      this.form = new FormGroup({
         switch: new FormControl({ value: this.model, disabled: false }, Validators.required),
      });
   }

}
