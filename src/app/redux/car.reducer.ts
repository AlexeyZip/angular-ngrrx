import { CAR_ACTION, CarsAction } from './cars.action';
import { Car } from "../car.model";

const initialState = {
    cars: [
        new Car('Toyota', 'Prado', '10.10.21', false, 1),
        new Car('VW', 'Touareg', '10.10.21', false, 2),
    ]
}

export function carsReducer(state = initialState, action: CarsAction) {
    switch (action.type) {
        case CAR_ACTION.ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }  
        case CAR_ACTION.DELETE_CAR: 
            return {
                ...state,
                cars: [...state.cars.filter(c => c.id !== action.payload.id)]
            } 
        case CAR_ACTION.UPDATE_CAR:
            const idx = state.cars.findIndex(c => c.id === action.payload.id)
            state.cars[idx].isSold = true
            return {
                ...state,
                cats: [...state.cars]
            }    
        default: 
            return state
    }
}