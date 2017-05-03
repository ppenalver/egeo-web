import { Component, Input } from '@angular/core';

@Component({
  selector: 'egeo-demo-code',
  templateUrl: 'demo-code.component.html',
  styleUrls: ['demo-code.component.scss']
})
export class DemoCodeComponent {

   public showCode: boolean = false;

   changeShowCode(show: boolean): void {
      this.showCode = show;
   }
}
