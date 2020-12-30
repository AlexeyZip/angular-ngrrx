import { CarsService } from './cars.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './redux/car.reducer';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,HttpModule, FormsModule, StoreModule.forRoot({carPage: carsReducer})
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
