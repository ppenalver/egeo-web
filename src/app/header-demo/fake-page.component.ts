import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'fake-page',
   template: `
      <div>
         <h1>YOU NAVIGATE TO PAGE</h1>
           <p [innerHTML]="pageName"></p>
         <br><br>
         <router-outlet></router-outlet>
      </div>`,
   styles: [' div { max-width: 1700px; margin: auto; } '],
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class FakePageComponent {
   public pageName: string = 'ERROR';

   constructor(private _router: ActivatedRoute) {
      let id: string = 'pageName';
      this._router.data.subscribe(data => this.pageName = data[id]);
   }
}
