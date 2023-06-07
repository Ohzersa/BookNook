import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  key = 'AIzaSyAC2TmYyRxOGLSU-pLPor0M5NzhHrfjxYc';
  
  constructor(private httpClient: HttpClient) { }
  
  getList() {
    return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=search+terms');
  }

  getItem(queryField: string) {
    return this.httpClient.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${this.key}`
    );
  }

}
