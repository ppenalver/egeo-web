import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { VersionComparationOptions } from './layout.model';

@Injectable()
export class VersionService {

   constructor(private http: Http) { }

   getPom(): Observable<string> {
      return this.http.get(location.pathname + 'assets/package.json')
         .map(response => this.parseJson(response.json()));
   }

   getVersions(): Observable<number[]> {
      return this.http.get('https://api.github.com/repos/stratio/egeo-web/contents/?ref=gh-pages')
      .map(response => this.parseVersionResponse(response.json()))
   }

   private parseJson(pack: { [key: string]: any }): string {
      let key: string = 'version';
      return pack[key];
   }

   private parseVersionResponse(versions: { [key: string]: any }[]): number[] {
      return versions.filter((version) => version && version['type'] && version['type'] === 'dir')
      .map((version) => version['name'])
      .sort(this.reverseCompare.bind(this));
   }

   private reverseCompare(v1: string, v2: string) {
      return this.versionCompare(v1, v2) * -1;
   }

   private isValidPart(part: string, lexicographical: boolean): boolean {
      return (lexicographical ? /^\d+[A-Za-z]*$/ : /^\d+$/).test(part);
   }

   private versionCompare(v1: string, v2: string, options?: VersionComparationOptions): number {
      let lexicographical: boolean = options && options.lexicographical;
      let zeroExtend: boolean = options && options.zeroExtend;
      let v1parts: string[] = v1.split('.');
      let v2parts: string[] = v2.split('.');

      let v1PartsNumeric: number[];
      let v2PartsNumeric: number[];

      if (!v1parts.every((value) => this.isValidPart(value, lexicographical)) || !v2parts.every((value) => this.isValidPart(value, lexicographical))) {
         return NaN;
      }

      if (zeroExtend) {
         while (v1parts.length < v2parts.length) v1parts.push("0");
         while (v2parts.length < v1parts.length) v2parts.push("0");
      }

      if (!lexicographical) {
         v1PartsNumeric = v1parts.map(Number);
         v2PartsNumeric = v2parts.map(Number);
      }

      for (var i = 0; i < v1parts.length; ++i) {
         if (v2parts.length === i) {
            return 1;
         }

         if (v1parts[i] === v2parts[i]) {
            continue;
         }
         else if (v1parts[i] > v2parts[i]) {
            return 1;
         }
         else {
            return -1;
         }
      }

      if (v1parts.length !== v2parts.length) {
         return -1;
      }
      return 0;
   }
}
