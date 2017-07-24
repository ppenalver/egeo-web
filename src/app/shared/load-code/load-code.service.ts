import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoadCodeService {

   constructor(private http: Http) { }

   getExampleFile(filePath: string): Observable<string> {
      return this.http.get(`${location.pathname}assets/examples/${filePath}`)
         .map(response => response.text());
   }
}
