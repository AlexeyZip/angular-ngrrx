import { AppState } from './redux/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cars } from './car.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carState: Observable<Cars>
  constructor(private store: Store<AppState>) {}
  

  ngOnInit() {
    this.carState = this.store.select('carPage')
  }


}


