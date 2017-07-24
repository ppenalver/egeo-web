import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ApiDoc, TYPES } from '../../../shared';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['grid.component.scss']
})

export class GridComponent {
   public apiDoc: ApiDoc;

   public gridDemoUrl: SafeResourceUrl = '';

   constructor(private sanitizer: DomSanitizer) {
      this.gridDemoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${location.href.split('#')[0]}#/grid-demo`);
   }
}
