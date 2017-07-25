import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Observer } from 'rxjs/Observer';

import { VersionComparationOptions } from './layout.model';
import { environment } from '../../environments/environment';

@Injectable()
export class VersionService {

   constructor(private http: Http) { }

   getPom(): Observable<string> {
      return this.http.get(location.pathname + 'assets/package.json')
         .map(response => this.parseJson(response.json()));
   }

   getVersions(): Observable<string[]> {
      if (!environment.production) {
         return Observable.create((observer: Observer<string[]>) => {
            observer.next(['development']);
            observer.complete();
         });
      }
      return this.http.get('https://api.github.com/repos/stratio/egeo-web/contents/?ref=gh-pages')
         .map(response => this.parseVersionResponse(response.json()));

   }

   private parseJson(pack: { [key: string]: any }): string {
      return pack.key;
   }

   private parseVersionResponse(versions: any[]): string[] {
      return versions.filter((version) => version && version.type && version.type === 'dir')
         .map((version: any) => version.name)
         .sort(this.reverseCompare.bind(this));
   }

   private reverseCompare(v1: string, v2: string): number {
      return this.versionCompare(v1, v2) * -1;
   }

   private isValidPart(part: string, lexicographical: boolean): boolean {
      return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(part);
   }

   private versionCompare(v1: string, v2: string, options?: VersionComparationOptions): number {
      const lexicographical: boolean = options && options.lexicographical;
      const zeroExtend: boolean = options && options.zeroExtend;
      const v1parts: string[] = v1.split('.');
      const v2parts: string[] = v2.split('.');

      let v1PartsNumeric: number[];
      let v2PartsNumeric: number[];

      if (!v1parts.every((value) => this.isValidPart(value, lexicographical)) || !v2parts.every((value) => this.isValidPart(value, lexicographical))) {
         return NaN;
      }

      if (zeroExtend) {
         while (v1parts.length < v2parts.length) {
            v1parts.push('0');
         }

         while (v2parts.length < v1parts.length) {
            v2parts.push('0');
         }

         if (!lexicographical) {
            v1PartsNumeric = v1parts.map(Number);
            v2PartsNumeric = v2parts.map(Number);
         }

         for (let i = 0; i < v1parts.length; ++i) {
            if (v2parts.length === i) {
               return 1;
            }

            if (v1parts[i] === v2parts[i]) {
               continue;
            } else if (v1parts[i] > v2parts[i]) {
               return 1;
            } else {
               return -1;
            }
         }

         if (v1parts.length !== v2parts.length) {
            return -1;
         }
         return 0;
      }
   }
}
