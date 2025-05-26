import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './models';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  constructor(private httpClient: HttpClient) {}

  // Aquí puedes agregar métodos para interactuar con la API de pedidos
  // Por ejemplo, obtener pedidos, crear un nuevo pedido, etc.
  // Estos métodos pueden usar HttpClient para hacer solicitudes HTTP
  // y devolver observables que se pueden suscribir en los componentes.

  getOrders(): Observable<Order[]> {
    // Lógica para obtener pedidos
    // Por ejemplo, hacer una solicitud HTTP a la API de pedidos
    return this.httpClient.get<Order[]>('http://localhost:3000/or2ders');
  }
}
