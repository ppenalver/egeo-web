import { Component, ViewEncapsulation, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StModalService } from '@stratio/egeo';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

   @ViewChild('loadModal', { read: ViewContainerRef }) target: ViewContainerRef;

   constructor(translate: TranslateService, private _modalService: StModalService) {
      let userLang = navigator.language.split('-')[0];
      userLang = /(es|en)/gi.test(userLang) ? userLang : 'en';

      translate.setDefaultLang('en');
      translate.use('en');
   }

   ngOnInit(): void {
      this._modalService.container = this.target;
   }
}
