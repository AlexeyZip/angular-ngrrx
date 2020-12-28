import { Car } from './../car.model';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car: Car
  @Output() deleteCar = new EventEmitter<Car>()

  onDelete() {
    this.deleteCar.emit(this.car)
  }

  onBuy() {
    this.car.isSold = true
  }


}
