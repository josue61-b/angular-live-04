import { createFeature, createReducer, on } from '@ngrx/store';
import { OrdersActions } from './orders.actions';
import { Order } from '../models';

export const ORDERS_FEATURE_KEY = 'orders';

export interface OrdersState {
  orders: Order[]; // Replace 'any' with the actual type of your orders
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
  }),
  on(OrdersActions.loadOrdersSuccess, (state, action) => {
    return {
      ...state,
      orders: action.orders,
      loading: false,
      error: null,
    };
  }),
  on(OrdersActions.loadOrdersFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      orders: [],
      error: action.error,
    };
  })
);

export const ordersFeature = createFeature({
  name: ORDERS_FEATURE_KEY,
  reducer: ordersReducer,
});
