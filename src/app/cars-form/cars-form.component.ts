import { AddCar } from './../redux/cars.action';
import { AppState } from './../redux/app.state';
import { Car } from './../car.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {

  private id: number = 2
  carName: string = ''
  carModel: string = ''


  constructor(private store: Store<AppState>) { }


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
      this.store.dispatch(new AddCar(car))
      this.carModel = ''
      this.carName = ''
    }
  }

  onLoad() {

  }

}
