import { Component, } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../interfaces/zoom.model';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',

})
export class CardsComponent {
  mobile: Product[] =[]
  laptop:Product[]=[]
  tabs:Product[]=[]
  smart:Product[]=[]
  gaming:Product[] =[]
  
  constructor(private _data:DataService){
    this._data.getMobile().subscribe((data)=>{
      this.mobile = data.products
    })

    this._data.getLaptop().subscribe((data)=>{
      this.laptop = data.products
    })
    this._data.getTabs().subscribe((data)=>{
      this.tabs = data.products
    })
    this._data.getSmart().subscribe((data)=>{
      this.smart = data.products
    })
    this._data.getGaming().subscribe((data)=>{
      this.gaming = data.products
    })
  }

}
