import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrdersActions } from './orders.actions';
import { catchError, concatMap, map, of } from 'rxjs';
import { OrdersService } from '../orders.service';

@Injectable()
export class OrdersEffects {
  loadOrders$;

  constructor(private actions$: Actions, private ordersService: OrdersService) {
    this.loadOrders$ = createEffect(() => {
      return this.actions$.pipe(
        // Interceptar la acción de cargar pedidos
        ofType(OrdersActions.loadOrders),
        // Despues de interceptar la acción, ejecutar el servicio para obtener los pedidos
        concatMap(() =>
          this.ordersService.getOrders().pipe(
            // Mapear la respuesta del servicio a la acción de éxito
            map((orders) => OrdersActions.loadOrdersSuccess({ orders })),
            // Manejar errores y mapearlos a la acción de fallo
            catchError((error) =>
              of(OrdersActions.loadOrdersFailure({ error: error.message }))
            )
          )
        )
      );
    });
  }
}
