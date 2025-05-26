import { createFeature, createReducer, on } from '@ngrx/store';
import { OrdersActions } from './orders.actions';

interface OrdersState {
  orders: any[]; // Replace 'any' with the actual type of your orders
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersReducer = createReducer(
  initialState,
  on(OrdersActions.loadOrders, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  })
);

export const ordersFeature = createFeature({
  name: 'orders',
  reducer: ordersReducer,
});
