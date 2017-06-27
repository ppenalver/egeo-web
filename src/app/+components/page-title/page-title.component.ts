import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from 'shared';

@Component({
   selector: 'page-title-example',
   templateUrl: './page-title.component.html',
   styleUrls: ['page-title.component.scss']
})

export class PageTitleComponent {
   public apiDoc: ApiDoc;
   public title: string = 'page title';
   public error: boolean = false;
   public errorMsg: string = '';
   public minlength: number = 1;
   public maxlength: number = 20;

   constructor() {
      this.apiDoc = {
         title: 'Page title',
         description: 'Page title component is think for use in headers of pages.',
         haveModel: false,
         apiSection: {
            inputs: [
               { paramName: 'title', type: TYPES.STR, required: false, details: 'Title text to show, must be final text to show not allow translate' },
               { paramName: 'leftButton', type: TYPES.STR, required: false, details: 'Icon class of button displayed  to the left of title' },
               { paramName: 'preTitle', type: TYPES.STR, required: false, details: 'Text previous to title for example to details like "USER:" username' },
               { paramName: 'qaTag', type: TYPES.STR, required: false, details: 'Id for qa test' },
               { paramName: 'editable', type: TYPES.BOOL, required: false, details: 'If true, the page title could be edited inline as an input field' },
               { paramName: 'placeholder', type: TYPES.STR, required: false, details: 'The text that appears as placeholder of the page title, default empty' },
               { paramName: 'disabled', type: TYPES.BOOL, required: false, details: 'If true, disables the page title input field' },
               { paramName: 'readOnly', type: TYPES.BOOL, required: false, details: 'If true, input is marked as read-only, the value can not be changed but is sent to the form' },
               { paramName: 'maxlength', type: TYPES.NUM, required: false, details: 'Define a max-length for page title field' },
               { paramName: 'minlength', type: TYPES.NUM, required: false, details: 'Define a min-length for page title field' },
               { paramName: 'error', type: TYPES.BOOL, required: false, details: 'If true, the page title field is enabled to be validated and shows a red box around the field' },
               { paramName: 'errorMessage', type: TYPES.STR, required: false, details: 'Error to show in every error case if error input is true' }
            ],
            outputs: [
               { paramName: 'clickButton', type: TYPES.ANY, required: false, details: 'Event when click on leftButton' },
               { paramName: 'edit', type: TYPES.STR, required: false, details: 'Event when click on the page title input field' }
            ]
         },
         exampleDesc: `Next, we can see an example of Page title component showing a title and two elements in the right side.
         The right side content must be surrounded by page-title tags as you can see in html code below`
      };
   }

   public editTitle(value: string) {
      if (value.length === this.maxlength) {
         this.error = true;
         this.errorMsg = 'Error filling page title input';
      } else {
         this.error = false;
         this.errorMsg = '';
      }
   }

}
