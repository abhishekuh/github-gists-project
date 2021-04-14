import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GistsService {

  apiUrl = "https://api.github.com/gists"

  constructor(private http:HttpClient) { }

  getAllGists(){
    return this.http.get(this.apiUrl+`?per_page=100`)
  }
}
