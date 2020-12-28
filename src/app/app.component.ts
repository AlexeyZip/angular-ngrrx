import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Toyota', 'Prado', '10.10.21', false, 1),
    new Car('VW', 'Touareg', '10.10.21', false, 2),
  ]

  onAdd(car: Car) {
    this.cars.push(car)
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id)
  }
}


