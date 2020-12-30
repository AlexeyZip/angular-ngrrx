import { CarsService } from './../cars.service';
import { Car } from './../car.model';
import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {

  carName: string = ''
  carModel: string = ''


  constructor(private service: CarsService) { }


  onAdd() {
    if(this.carName === '' || this.carModel === '') {
      return
    } else {
      const date = moment().format('DD.MM.YY')
      const car = new Car(this.carName,this.carModel,date)
      this.service.addCar(car)
      this.carModel = ''
      this.carName = ''
    }
  }

  onLoad() {
    this.service.loadCars()
  }

}
