import { Component } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.css'
  
})
export class CaruselComponent {
  change(value: boolean): void {
    console.log(value);
  }
}
