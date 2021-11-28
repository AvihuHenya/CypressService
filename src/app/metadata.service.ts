import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  //backendUrl :string;

  constructor(private http: HttpClient) {
   }

   getMetadata(url: string) {
     return this.http.get<Object>(url)
   }
}
