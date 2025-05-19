import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // Puntos de vida de mi personaje
  HP = 100;
  energia = 100;
  items: string[] = ['Escudo', 'Espada', 'Pocion'];
  nombreJugador = 'Juanito';

  iniciarJuego() {
    console.log(`Iniciando juego... Jugador ${this.nombreJugador}`);
  }

  atacar() {
    console.log('Atacando...');
    this.energia -= 10;
  }
}
