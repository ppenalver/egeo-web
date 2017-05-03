import { Component, Input, OnInit, ViewChild, ElementRef, Renderer, AfterViewChecked } from '@angular/core';
import {
   highlightElement as _highlightElement,
   languages as _languages,
   plugins as _plugins
} from 'prismjs';

import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';

@Component({
   selector: 'st-load-code',
   templateUrl: './load-code.component.html'
})
export class LoadCodeComponent implements OnInit, AfterViewChecked {
   @Input() file: string;

   @ViewChild('preCode') preCode: ElementRef;

   code: string = '';
   private type: string = 'typescript';

   constructor(private _renderer: Renderer) { }

   ngOnInit(): void {
      this.code = this.getCodeAsText(this.file);
      if (this.file && this.file !== '') {
         let parts = this.file.split('.');
         let extension: string = parts[parts.length - 2];
         if (extension === 'model') {
            extension = 'typescript';
         }
         this.checkExtension(extension);
         if (extension === 'html') {
            this.code = this.replaceTags(this.code);
         }
      }
   }

   ngAfterViewChecked(): void {
      this.insertCode();
      this.highlight();
   }

   highlight(): void {
      _highlightElement(this.preCode.nativeElement.querySelector('code'), false, null);
   }

   insertCode(): void {
      this._renderer.setElementProperty(
         this.preCode.nativeElement,
         'innerHTML',
         `<code class="${this.getClass()}">${this.code}</code>`
      );
   }

   getClass(): string {
      return `${this.type} language-${this.type}`;
   }

   private getCodeAsText(path: string): string {
      return require(`!!raw-loader!../../${path}`);
   }

   private getLanguaje(languaje: string): PrismJS.LanguageDefinition {
      let defaultLanguaje: string = 'html';
      let result: PrismJS.LanguageDefinition | undefined;
      result = _languages[languaje];
      if (result) {
         return result;
      } else {
         return _languages[defaultLanguaje];
      }
   }

   private replaceTags(text: string): string {
      return text.replace(/(<)([!\/A-Za-z](.|[\n\r])*?>)/g, '&lt;$2');
   }

   private checkExtension(extension: string): void {
      switch (extension) {
         case 'ts':
            this.type = 'typescript';
            break;
         case 'html':
            this.type = 'markup';
            break;
         case 'json':
            this.type = 'json';
            break;
         default:
            this.type = 'typescript';
            break;
      }
   }
}

interface PrismLanguaje {
   [key: string]: PrismJS.LanguageDefinition;
}
