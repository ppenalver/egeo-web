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

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { StDropDownMenuItem } from '@stratio/egeo';

import { ApiDoc, TYPES } from '../../shared';

@Component({
   selector: 'combobox-example',
   templateUrl: 'combobox.component.html',
   styleUrls: ['combobox.component.scss']
})

export class ComboboxComponent implements OnInit {
   @ViewChild('templateDrivenForm') public templateDrivenForm: NgForm;

   public options: StDropDownMenuItem[] = [];
   public forceValidations: boolean = false;
   public isDisabled: boolean = false;
   public errorMessage: string = 'Error, this field is required';
   public model: any = {
      option1: null,
      option2: null
   };
   public reactiveForm: FormGroup; // our model driven form

    // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Combobox',
      description: 'The combobox component is for use normaly inside a form, you can use too outside a form like a template driven form.',
      haveModel: false,
      apiSection: {
         inputs: [
            { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Id for QA test' },
            { paramName: 'name', type: TYPES.STR, required: true, details: 'Name of the combobox' },
            { paramName: 'options', type: 'StDropDownMenuItem[]', required: false, details: 'As dropdown, combo recieve a list of options to show in dropdown menu' },
            { paramName: 'label', type: TYPES.STR, required: false, details: 'Label to show over the combobox, default empty' },
            { paramName: 'contextualHelp', type: TYPES.STR, required: false, details: 'Contextual help button, you can see more info about it in tooltip help component' },
            { paramName: 'placeholder', type: TYPES.STR, required: false, details: 'The text that appera as placeholder of the combobox, default empty' },
            { paramName: 'disabled', type: TYPES.BOOL, required: false, details: 'For set disable state in combobox' },
            { paramName: 'selectedValue', type: 'StDropDownMenuItem', required: false, details: 'Selected element by default' },
            { paramName: 'errorRequiredMessage', type: TYPES.STR, required: false, details: 'Message to show in case of required validation error' },
            { paramName: 'forceValidations', type: TYPES.BOOL, required: false, details: 'If you provide this, and put a true value the combobox check errors before modify by first time' }
         ],
         outputs: []
      },
      exampleDesc: `This example have two forms, the first of these use a TEMPLATE DRIVEN FORM aproach, the second example use REACTIVE FORM OR MODEL DRIVEN FORM aproach. If you want to use a combobox outside a form, you can copy the TEMPLATE DRIVEN FORM aproach.`
   };
   // tslint:enable:max-line-length

   constructor(private _fb: FormBuilder) {
      for (let i: number = 0; i < 10; i++) {
         this.options.push({
            label: `option-${i}`,
            value: i
         });
      }
      this.model.option2 = this.options[2];
   }

   ngOnInit(): void {
      this.reactiveForm = this._fb.group({
         'option1': [this.model.option1, [Validators.required]],
         'option2': [this.model.option2, [Validators.required]]
      });
   }

   changeForceValidations(): void {
      this.forceValidations = true;
   }

   changeDisabled(): void {
      console.log('change disable');
      this.isDisabled = !this.isDisabled;
      if (this.isDisabled) {
         this.reactiveForm.get('option1').disable();
         this.templateDrivenForm.form.get('option1-template').disable();
      } else {
         this.reactiveForm.get('option1').enable();
         this.templateDrivenForm.form.get('option1-template').enable();
      }
   }

   onSubmitTemplateBased(): void {
      console.log('submit value: ', JSON.stringify(this.model));
   }

   onSubmitReactiveForm(): void {
      this.model.option1 = this.reactiveForm.value.option1;
      this.model.option2 = this.reactiveForm.value.option2;
      console.log('submit value: ', JSON.stringify(this.model));
   }
}
