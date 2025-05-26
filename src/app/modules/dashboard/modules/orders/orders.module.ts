import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { StoreModule } from '@ngrx/store';
import { ordersFeature } from './store/orders.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrdersEffects } from './store/orders.effects';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    StoreModule.forFeature(ordersFeature),
    EffectsModule.forFeature([OrdersEffects]),
  ],
})
export class OrdersModule {}
