import { Component, Input } from '@angular/core';
import { ApiRow, TYPES } from './../api-doc.model';


@Component({
   selector: 'st-parameters-table',
   templateUrl: './paramenters-table.component.html',
   styleUrls: ['paramenters-table.component.scss']
})
export class ParametersTableComponent {
   @Input() title: string;
   @Input() data: Array<ApiRow>;
   @Input() isInput: boolean = false;

   getRequired(value: boolean): string {
      return value ? 'icon-check' : '';
   }

   getIconType(): string {
      return this.isInput ? 'icon-login' : 'icon-exit';
   }

   getType(value: TYPES | string): string {
      if (typeof value !== 'string') {
         switch (value) {
            case TYPES.OBJ:
               return 'object';
            case TYPES.NUM:
               return 'number';
            case TYPES.STR:
               return 'string';
            case TYPES.BOOL:
               return 'boolean';
            case TYPES.ANY:
               return 'any';
            case TYPES.ARRAY_NUM:
               return 'number[]';
            case TYPES.ARRAY_STR:
               return 'string[]';
            case TYPES.ARRAY_OBJ:
               return 'object[]';
            case TYPES.ARRAY_BOOL:
               return 'boolean[]';
            case TYPES.ARRAY_ANY:
               return 'any[]';
            case TYPES.FUNC:
               return 'Function';
            default:
               return 'string';
         }
      } else {
         return value;
      }
   }
}
