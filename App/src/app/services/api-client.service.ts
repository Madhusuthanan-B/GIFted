import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Search } from '../models/search';

@Injectable()
export class ApiClientService {

  get httpHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  constructor(private http: HttpClient) { }

  search(search: Search) {
    return this.http.get(this.buildSearchUrl(search), { headers: this.httpHeaders });
  }

  private buildSearchUrl(search: Search) {
    return `${environment.API.search}api_key=${environment.API.token}&q=${search.query}&limit=${search.limit}
    &offset=${search.offset}&rating=${search.rating}&lang=${search.lang}`;
  }
}
