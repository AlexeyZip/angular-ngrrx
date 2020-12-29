import { AddCar, CAR_ACTION } from './cars.action';
import { Action } from "@ngrx/store";
import { Car } from "../car.model";

const initialState = {
    cars: [
        new Car('Toyota', 'Prado', '10.10.21', false, 1),
        new Car('VW', 'Touareg', '10.10.21', false, 2),
    ]
}

export function carsReducer(state = initialState, action: AddCar) {
    switch (action.type) {
        case CAR_ACTION.ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }  
        default: 
            return state
    }
}