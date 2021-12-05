import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  readonly metadata_url = 'http://localhost:8085';

  constructor(private http: HttpClient) {
  }

  getMetadata() {
    return this.http.get(`${this.metadata_url}/metadata/`);
  }
}
