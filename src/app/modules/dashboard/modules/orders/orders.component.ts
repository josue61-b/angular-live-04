import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
} from '../../../../store/counter/counter.actions';
import { map, Observable } from 'rxjs';
import { selectCounterState } from '../../../../store/counter/counter.selector';
import { OrdersActions } from './store/orders.actions';
import { Order } from './models';
import {
  selectOrders,
  selectOrdersError,
  selectOrdersLoading,
} from './store/orders.selectors';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styles: ``,
})
export class OrdersComponent implements OnInit {
  count$: Observable<number>;

  orders$: Observable<Order[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.orders$ = this.store.select(selectOrders);
    this.loading$ = this.store.select(selectOrdersLoading);
    this.error$ = this.store.select(selectOrdersError);

    this.count$ = this.store
      .select(selectCounterState)
      .pipe(map((state) => state.count));
  }

  ngOnInit(): void {
    this.store.dispatch(OrdersActions.loadOrders());
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
