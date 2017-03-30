import { Component, ViewEncapsulation } from '@angular/core';
import { ApiDoc, TYPES } from 'shared';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['grid.component.scss']
})

export class GridComponent {
   public apiDoc: ApiDoc;

   constructor() {
      // tslint:disable:max-line-length
      this.apiDoc = {
         title: 'Grid',
         description: 'The Egeo Grid is a 24 columns grid based in the implementation of flexboxgrid fully rewritten in Sass for add 24 columns support. For that, the way of build a grid in an application is exactly the same can be checked in the samples of flexboxgrid. Keep in mind that, unlike Bootstrap, with the Egeo Grid is needed to define explicitly the whole MQ classes (lg, md, sm and xs) to ensure the expected behavior. If you plan to use @stratio/egeo-theme, the grid will be included in the package under the name egeo-grid.css or egeo-grid.min.css if you want the minified version. However, is perfectly possible to import the grid in your own code using the @stratio/egeo-ui-base library. Check the piece of Sass code included in the sample.',
         haveModel: false,
         apiSection: {
            inputs: [
            ],
            outputs: [
            ]
         },
         exampleDesc: ``
      };
      // tslint:enable:max-line-length

   }
}
