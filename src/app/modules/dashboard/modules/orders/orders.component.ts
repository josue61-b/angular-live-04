import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
} from '../../../../store/counter/counter.actions';
import { map, Observable } from 'rxjs';
import { selectCounterState } from '../../../../store/counter/counter.selector';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styles: ``,
})
export class OrdersComponent {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store
      .select(selectCounterState)
      .pipe(map((state) => state.count));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
