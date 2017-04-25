import { Component, ViewEncapsulation } from '@angular/core';
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

   public apiDoc: ApiDoc = {
      title: 'Switch',
      description: 'PENDING',
      haveModel: false,
      apiSection: {
         inputs: [],
         outputs: []
      },
      exampleDesc: ''
   };

   constructor() {
      this.loading = true;
      this.apiDoc = {
         title: 'Switch',
         description: 'PENDING.',
         haveModel: true,
         apiSection: {
            inputs: [
               { paramName: 'PENDING', type: TYPES.STR, required: true, details: 'PENDING' }
            ],
            outputs: []
         },
         exampleDesc: `PENDING`
      };

      this.form = new FormGroup({
         requiredSwitch: new FormControl({ value: this.model, disabled: false }, Validators.required),
      });
   }

   onSubmitForm(): void {
      console.log(this.form);
   }
}
