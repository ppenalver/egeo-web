/*
 * Copyright (c) 2017. Stratio Big Data Inc., Sucursal en España. All rights reserved.
 *
 * This software is licensed under the Apache Licence 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
   Component,
   Input,
   OnInit,
   ViewChild,
   ElementRef,
   Renderer,
   AfterViewChecked,
   OnChanges,
   SimpleChanges
} from '@angular/core';
import {
   highlightElement as _highlightElement,
   languages as _languages,
   plugins as _plugins,
   LanguageDefinition
} from 'prismjs';
import { Observable } from 'rxjs/Observable';

import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';

import { LoadCodeService } from './load-code.service';

@Component({
   selector: 'st-load-code',
   templateUrl: './load-code.component.html'
})
export class LoadCodeComponent implements OnInit, OnChanges {
   @Input() file: string;

   @Input() code: string;
   @Input() type: string;

   @ViewChild('preCode') preCode: ElementRef;

   private internalType: string = 'typescript';

   constructor(private _renderer: Renderer, private _service: LoadCodeService) { }

   ngOnInit(): void {
      if (this.file && this.file !== '') {
         this.getCodeAsText(this.file).subscribe((fileContent) => {
            const parts = this.file.split('.');
            this.onLoadCode(fileContent, parts[parts.length - 2]);
         });
      } else if (this.code && this.type) {
         this.onLoadCode(this.code, this.type);
      } else {
         throw new Error('Incorrect use, you need to pass file full path or a code as string and type of code (Example: typescript)');
      }
   }

   ngOnChanges(changes: SimpleChanges): void {
      if (changes && changes.file) {
         this.getCodeAsText(changes.file.currentValue).subscribe((fileContent) => {
            const parts = changes.file.currentValue.split('.');
            this.onLoadCode(fileContent, parts[parts.length - 2]);
         });
      }
      if (changes && changes.code) {
         this.onLoadCode(changes.code.currentValue, 'html');
      }
   }

   highlight(): void {
      _highlightElement(this.preCode.nativeElement.querySelector('code'), false, null);
   }

   insertCode(code): void {
      this._renderer.setElementProperty(
         this.preCode.nativeElement,
         'innerHTML',
         `<code class="${this.getClass()}">${code}</code>`
      );
   }

   getClass(): string {
      return `${this.internalType} language-${this.internalType}`;
   }

   private onLoadCode(code: string, filetype: string): void {
      this.checkExtension(filetype);
      if (filetype === 'html') {
         code = this.replaceTags(code);
      }
      this.insertCode(code);
      this.highlight();
   }

   private getCodeAsText(fileName: string): Observable<string> {
      return this._service.getExampleFile(fileName);
   }

   private getLanguaje(languaje: string): LanguageDefinition {
      const defaultLanguaje = 'html';
      let result: LanguageDefinition | undefined;
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
         case 'mode':
         case 'ts':
            this.internalType = 'typescript';
            break;
         case 'html':
            this.internalType = 'markup';
            break;
         case 'json':
            this.internalType = 'json';
            break;
         default:
            this.internalType = 'typescript';
            break;
      }
   }
}

interface PrismLanguaje {
   [key: string]: LanguageDefinition;
}
