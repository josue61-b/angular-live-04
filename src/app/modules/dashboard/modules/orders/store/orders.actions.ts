// import { createAction } from "@ngrx/store";

import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Order } from '../models';

// export const loadOrders = createAction("[Orders] Load Orders");

export const OrdersActions = createActionGroup({
  source: 'Orders',
  events: {
    // Acciones sin argumentos, usamos emptyProps
    'Load Orders': emptyProps(),
    // Accion satisfactoria
    'Load Orders Success': props<{ orders: Order[] }>(), // Reemplaza 'any[]' con el tipo real de tus pedidos
    // Accion de error
    'Load Orders Failure': props<{ error: string }>(),

    // Si necesitamos argumentos, usamos props
    'Load Order By Id': props<{ id: string }>(),
  },
});
