import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // AWS server
  url: string = 'https://contableag.site';

  constructor(public http: HttpClient) { }

  get(path: any) {
    return this.http.get(this.url + '/' + path);
  };

  post(path: string, body: any) {
    return this.http.post(this.url + '/' + path, body);
  };
}
