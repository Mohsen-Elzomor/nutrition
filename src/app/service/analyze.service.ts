import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {

  constructor(private _http: HttpClient) { }

  apiURL = 'https://api.nutritionix.com/v1_1/search/';
  appId = '62a4da94';
  appKey = 'c64168612b2e49802ed1c12c32734269';


  getAnalysis(food: string){
    let endpoint = this.apiURL + food + '?results=0:1&fields=*&appId='+this.appId+'&appKey='+this.appKey;
    return this._http.get(endpoint);
  }

}
