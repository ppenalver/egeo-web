import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class VersionService {

   constructor(private http: Http) { }

   getPom(): Observable<string> {
      return this.http.get(location.pathname + 'assets/pom.xml')
         .map(response => response.text());
   }
}
