import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ORDERS_FEATURE_KEY, OrdersState } from './orders.reducer';

export const selectOrdersState =
  createFeatureSelector<OrdersState>(ORDERS_FEATURE_KEY);

export const selectOrders = createSelector(
  selectOrdersState,
  (state) => state.orders
);

export const selectOrdersLoading = createSelector(
  selectOrdersState,
  (state) => state.loading
);

export const selectOrdersError = createSelector(
  selectOrdersState,
  (state) => state.error
);
