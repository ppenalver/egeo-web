import { Component } from '@angular/core';
import {
   StModalService,
   StModalButton,
   StModalConfig,
   StModalWidth,
   StModalMainTextSize,
   StModalType,
   StModalResponse
} from '@stratio/egeo';

import { ApiDoc, TYPES } from 'shared';
import { ModalTestComponent } from './modal-test.component';

@Component({
   selector: 'modal-example',
   templateUrl: './modal.component.html'
})

export class ModalComponent {

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Modal',
      description: `
      <p>Modal is a service used to display a modal window with some content. This service accept a simple message, a html code or a angular component. For use modal, you must to declare a container in some part of your application, we must recomended to do in main app component. When you declare the container, need to notify modal of who is the container with property container of modal service. Remember too, declare egeo in main app calling forRoot function because this function declare service for use as singelton in all app and allow DI in any component.</p>
      <br>
      <p><b>IMPORTANT:</b> If you want to use modal with component, need to declare this component for AoT functionality in entry components of modal. For this in the module of component where you declare the container need to declare as import StModalModule.withComponents() and pass him a list with all component that show in modals, for example if you have a modal that show a component called ExampleComponent and you have the modal container in app.component.ts you need to declare on imports in app.module.ts this: StModalModule.withComponents([ExampleComponent])</p>
      <br>
      <p>For show a modal only is required qaTag property in configuration object and at least one of message or html in configuration object or component to show. For example if you use modal only with qaTag need give to show method a component, if you use qaTag and message or html no need any component</p>
      `,
      haveModel: true,
      apiSection: {
         inputs: [],
         outputs: []
      },
      exampleDesc: `Next, you can see different buttons that show modal examples.`
   };
   // tslint:enable

   private buttons: StModalButton[] = [
      { icon: 'icon-trash', iconLeft: true, label: 'Delete', primary: true, response: StModalResponse.YES },
      { icon: 'icon-circle-cross', iconLeft: true, label: 'Cancel', response: StModalResponse.NO }
   ];

   constructor(private _modalService: StModalService) { }

   showModal(): void {

      let message: string = 'Are you sure of delete this?';

      this._modalService.show({
         qaTag: 'tag-message',
         modalTitle: 'Delete item',
         buttons: this.buttons,
         message: message,
         mainText: StModalMainTextSize.BIG,
         modalType: StModalType.WARNING
      }).subscribe((response) => console.log(this.evaluateResponse(response)));
   }

   showModalWithHtml(): void {
      let html: string = `
      <h1 class="st-modal-example-test-class-h1">Main title<h1>
      <br>
      <p>paragraph of some text between p html tags, and now a list:</p>
      <br>
      <div>
         <ul class="st-modal-example-test-class-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
         </ul>
      </div>
      `;

      this._modalService.show({
         qaTag: 'tag-html',
         modalTitle: 'With HTML',
         buttons: this.buttons,
         html: html,
         mainText: StModalMainTextSize.MEDIUM,
         modalType: StModalType.INFO,
         contextualTitle: 'VALIDATION STATUS'
      }).subscribe((response) => console.log(this.evaluateResponse(response)));
   }

   showModalWithComponent(): void {
      this._modalService.show(
         {
            qaTag: 'tag-complex',
            modalTitle: 'With component',
            buttons: this.buttons,
            modalType: StModalType.NEUTRAL,
            contextualTitle: 'CONTEXTUAL TITLE'
         },
         ModalTestComponent
      ).subscribe((response) => console.log(this.evaluateResponse(response)));
   }

   showModalBySize(size: string): void {
      let width: StModalWidth = StModalWidth.COMPACT;
      if (size === 'compact') {
         width = StModalWidth.COMPACT;
      } else if (size === 'regular') {
         width = StModalWidth.REGULAR;
      } else if (size === 'large') {
         width = StModalWidth.LARGE;
      }

      let message: string = 'Are you sure of delete this?';

      this._modalService.show({
         qaTag: 'tag-' + size,
         modalTitle: size,
         buttons: this.buttons,
         message: message,
         mainText: StModalMainTextSize.BIG,
         modalType: StModalType.INFO,
         modalWidth: width
      }).subscribe((response) => console.log(this.evaluateResponse(response)));
   }

   private evaluateResponse(response: StModalResponse): string {
      switch (response) {
         case StModalResponse.YES: return 'YES';
         case StModalResponse.NO: return 'NO';
         case StModalResponse.CLOSE: return 'CLOSE';
         default: return 'Error response not found';
      }
   }
}
