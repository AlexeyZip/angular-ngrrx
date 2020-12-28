import { Car } from './../car.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  private id: number = 2
  carName: string = ''
  carModel: string = ''

 @Output() addCar = new EventEmitter<Car>()

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    if(this.carName === '' || this.carModel === '') {
      return
    } else {
      this.id = ++this.id
      const car = new Car(
        this.carName,
        this.carModel,
        moment().format('DD.MM.YY'),
        false,
        this.id
      )

      this.addCar.emit(car)
      this.carModel = ''
      this.carName = ''
    }
  }

  onLoad() {

  }

}
