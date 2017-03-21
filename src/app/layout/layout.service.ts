import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class VersionService {

   constructor(private http: Http) { }

   getPom(): Observable<string> {
      return this.http.get(location.pathname + 'assets/package.json')
         .map(response => this.parseJson(response.json()));
   }

   private parseJson(pack: { [key: string]: any }): string {
      let key: string = 'version';
      return pack[key];
   }
}
