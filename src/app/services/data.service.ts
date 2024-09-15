import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productsRoot } from '../interfaces/zoom.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }
  apiUrlM:string = "https://zoommer-clone-ee44dea926d6.herokuapp.com/product"
  apiUrlL:string = "https://zoommer-clone-ee44dea926d6.herokuapp.com/product?categoryName=%E1%83%9A%E1%83%94%E1%83%9E%E1%83%A2%E1%83%9D%E1%83%9E%E1%83%94%E1%83%91%E1%83%98+%7C+IT"
  apiUrlT:string = "https://zoommer-clone-ee44dea926d6.herokuapp.com/product?categoryName=%E1%83%A2%E1%83%90%E1%83%91%E1%83%94%E1%83%91%E1%83%98"
  apiUrlS:string = "https://zoommer-clone-ee44dea926d6.herokuapp.com/product?categoryName=%E1%83%A1%E1%83%9B%E1%83%90%E1%83%A0%E1%83%A2+%E1%83%92%E1%83%90%E1%83%AF%E1%83%94%E1%83%A2%E1%83%94%E1%83%91%E1%83%98&page=1&pageSize=12&minPrice=0&maxPrice=120000&onlySales=false"
  apiUrlG:string = "https://zoommer-clone-ee44dea926d6.herokuapp.com/product?categoryName=Gaming&page=1&pageSize=12&minPrice=0&maxPrice=12000&onlySales=false"
  getMobile(){
    return this._http.get<productsRoot>(this.apiUrlM)
  }
  getLaptop(){
    return this._http.get<productsRoot>(this.apiUrlL)
  }
  getTabs(){
    return this._http.get<productsRoot>(this.apiUrlT)
  }
  getSmart(){
    return this._http.get<productsRoot>(this.apiUrlS)
  }
  getGaming(){
    return this._http.get<productsRoot>(this.apiUrlG)
  }
}
