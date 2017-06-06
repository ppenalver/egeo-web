import { Component, Input } from '@angular/core';

@Component({
   selector: 'egeo-title',
   templateUrl: './title.component.html'
})
export class TitleComponent {
   @Input() title: string;

   constructor() {}
}
