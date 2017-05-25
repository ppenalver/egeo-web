import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';
import {
   StTwoListSelectionElement,
   StTwoListSelectionConfigSchema,
   StTwoListSelectionConfig,
   EgeoResolveService,
   StTwoListSelectExtraLabelAction,
   StDropDownMenuItem
} from '@stratio/egeo';


import { ApiDoc, TYPES } from 'shared';

@Component({
   selector: 'two-list-selection-example',
   templateUrl: './two-list-selection.component.html',
   styleUrls: ['two-list-selection.component.scss']
})

export class TwoListSelectionComponent {

   // tslint:disable:max-line-length
   public apiDoc: ApiDoc = {
      title: 'Two List',
      description: `The Two List is a component used for select some elements from one list, these elements will be added in other list when they are selected.
      This component have different behaivor when is an edition an when only visualize the date.
      On edition you can see two list in the left a list with all elements and in the right the list with selected elements.
      On edition you only see one list, a list with selected elements.
      <br><br>

      In this component we use a different way to develop and give you three options:

      <br><br>

      <ul class="example-options">
         <li>StTwoListSelectionComponent</li>
         <li>StTwoListSelectionViewComponent</li>
         <li>StTwoListSelection class</li>
      </ul>
      <br><br>
      In the first case, we obtain a component with all behaivor integrated, and you can use whitout any more effort than put a tag in html file and pass the necesary params.
      <br><br>
      In the second case, we obtain only a component that show the data and emit with any interaction, select, click on buttons, search, etc. But in this case, the logic of what its necesary do, its in your side.
      <br><br>
      In the third case, we provide a class with common logic for this component, maybe you want to develop your own component and only want the logic to move elements between list, sort this lists, etc.
      <br><br>

      Use the option that you prefrer or mix some theys, for example extending the StTwoListSelectionComponent and overwriting some functionality`,
      haveModel: true,
      apiSection: {
         inputs: [
            { paramName: 'allElements', type: 'StTwoListSelectionElement[]', required: true, details: 'List with all elements. Required if Editable is true' },
            { paramName: 'selectedElements', type: 'StTwoListSelectionElement[]', required: true, details: 'List with selected elements' },
            { paramName: 'qaTag', type: TYPES.STR, required: true, details: 'Prefix used to generate the id values for qa tests' },
            { paramName: 'config', type: 'StTwoListSelectionConfig', required: false, details: 'Literals for show in component' },
            { paramName: 'editable', type: TYPES.BOOL, required: false, details: `If is not editable only show one list, if it's editable show two list and buttons` },
            { paramName: 'sortBy', type: `'id' | 'name'`, required: false, details: 'For why field sort elements' },
            { paramName: 'mode', type: `'compact' | 'normal'`, required: false, details: `If compact, row height it's 27px in normal case height it's 35px` },
            { paramName: 'moveAllToSelectedButton', type: TYPES.BOOL, required: false, details: 'Show button for move all from left list to right list' },
            { paramName: 'moveAllToAllButton', type: TYPES.BOOL, required: false, details: 'Show button for move all from right list to left list' },
            { paramName: 'hasSearch', type: TYPES.BOOL, required: false, details: 'For show search box or not' },
            { paramName: 'orderSelectedOptions', type: 'StDropDownMenuItem[]', required: false, details: 'Elements of order combo in selected list' },
            { paramName: 'orderAllOptions', type: 'StDropDownMenuItem[]', required: false, details: 'Elements of order combo in all list' }
         ],
         outputs: [
            { paramName: 'selectedElementsChange', type: 'StTwoListSelectionElement[]', required: true, details: 'This event is emitted when selected list change and return new list with actual selected elements' },
            { paramName: 'selectExtraLabelAll', type: 'StTwoListSelectExtraLabelAction', required: true, details: 'This event is emitted when click over the extra element in all list' },
            { paramName: 'selectExtraLabelSelected', type: 'StTwoListSelectExtraLabelAction', required: true, details: 'This event is emitted when click over the extra element in selected list' },
            { paramName: 'changeOrderAll', type: 'StDropDownMenuItem', required: true, details: 'This event is emitted when changed order option in all list' },
            { paramName: 'changeOrderSelected', type: 'StDropDownMenuItem', required: true, details: 'This event is emitted when changed order option in selected list' }
         ]
      },
      exampleDesc: `Next, you can see an example of vertical tabs with three options.`
   };
   // tslint:enable:max-line-length

   completeUserList: Array<StTwoListSelectionElement> = [];
   selectedUserList: Array<StTwoListSelectionElement> = [];

   config: Observable<StTwoListSelectionConfig>;
   configSchema: StTwoListSelectionConfigSchema = {
      allElementsListTitle: { key: 'EXAMPLES.TWO_LIST.ALL_ELEMENTS_TITLE', translate: true },
      allElementsSearchPlaceholder: { key: 'EXAMPLES.TWO_LIST.ALL_ELEMENTS_PLACEHOLDER', translate: true },
      selectedElementsListTitle: { key: 'EXAMPLES.TWO_LIST.SELECTED_ELEMENTS_TITLE', translate: true },
      selectedElementsSearchPlaceholder: { key: 'EXAMPLES.TWO_LIST.SELECTED_ELEMENTS_PLACEHOLDER', translate: true }
   };

   public orderOptions: Array<StDropDownMenuItem> = [
      {
         label: 'A-Z',
         value: 1
      },
      {
         label: 'Z-A',
         value: 2
      }
   ];

   constructor(
      private egeoTranslate: EgeoResolveService,
      private translateService: TranslateService
   ) {
      this.fillLists();
      this.config = this.egeoTranslate.translate(this.configSchema, this.translateService);
   }

   showSelectedElements(): void {
      console.log(JSON.stringify(this.selectedUserList.map(item => item.name)));
   }

   selectExtraLabel(el: StTwoListSelectExtraLabelAction): void {
      el.event.stopImmediatePropagation();
      console.log('Selected label', el);
   }

   changeOrder(order: StDropDownMenuItem): void {
      console.log('change order, ', order);
   }

   private fillLists(): void {
      for (let i = 0; i < 300; i++) {
         this.completeUserList.push({
            id: i,
            name: `User-${i}`
         });
         if (i % 4 === 0) this.selectedUserList.push(_.clone(this.completeUserList[i]));
      }
   }
}
