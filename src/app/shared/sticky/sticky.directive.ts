import {
   Directive,
   ElementRef,
   HostListener,
   OnDestroy,
   AfterViewInit
} from '@angular/core';
import Sticky from 'sticky-js';

let uniqueSelector = 'sticky';

@Directive({ selector: '[sticky]' })
export class StickyDirective implements OnDestroy, AfterViewInit {
   private sticky: any;

   constructor(private el: ElementRef) {}

   ngOnDestroy(): void {
      if (this.sticky) this.sticky.destroy();
   }

   ngAfterViewInit(): void {
      let idUnique = 'sticky' + new Date().getUTCMilliseconds();
      this.el.nativeElement.id = idUnique;
      this.sticky = new Sticky('#' + idUnique);
   }
}
