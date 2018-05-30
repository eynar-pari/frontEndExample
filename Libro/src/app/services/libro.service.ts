import { Injectable } from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions} from '@angular/http';
//import {HttpResponse} from "@angular/common/http";
//import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class LibroService {

  constructor(
    private http: Http) {}

   getLibros2(): Observable<HttpResponse<any>> {
      return this.http.get('http://localhost:8083/UPB/libros/get',
         {observe: 'response'});
    }


  postLibros(newLibro) {
    let url = 'http://localhost:8083/UPB/libros/post';
    let data = JSON.stringify(newLibro);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    let requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: headers,
      body: data
    });

   return this.http.post(url,data,requestOptions).subscribe(res => res.json());
  }
}

