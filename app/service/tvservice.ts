import {Item}from './item';
import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TvItemOperations{

constructor(private http:Http){
 }

callServer():Promise<Item[]>{
    var url:string = 'https://raw.githubusercontent.com/ShazamDC/flipkart-angularJS/master/tv.json';
    return this.http.get(url).toPromise().then((response)=>{
      return response.json().tv as Item[];
  }).catch((error)=>{
    console.error('An error occurred', error);
  return Promise.reject(error.message || error);
  });
}
}