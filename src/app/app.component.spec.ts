import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Describe agrupa los test de un componente
describe('AppComponent', () => {
  beforeEach(async () => {
    // Configuramos el entorno de pruebas
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // IT es un test individual
  it('debe crearse el app', () => {
    // Creamos el componente
    const fixture = TestBed.createComponent(AppComponent);

    // Extraemos la instancia del componente
    const app = fixture.componentInstance;

    // Espero que...
    expect(app)
      // Matchers son funciones que permiten hacer comparaciones
      // Truthy seria como algo no nulo ni indefinido
      .toBeTruthy();
  });

  it('El HP inicial debe ser 100', () => {
    // Creamos el componente
    const fixture = TestBed.createComponent(AppComponent);

    // Extraemos la instancia del componente
    const app = fixture.componentInstance;

    app.iniciarJuego();

    expect(app.HP).toBe(100);
  });

  it('Al iniciarJuego() se debe mostrar un mensaje en consola', () => {
    // Creamos el componente
    const fixture = TestBed.createComponent(AppComponent);

    // Extraemos la instancia del componente
    const app = fixture.componentInstance;
    const spyOnConsoleLog = spyOn(console, 'log');

    app.iniciarJuego();
    expect(spyOnConsoleLog)
      // Debe haberse llamado
      .toHaveBeenCalledWith(`Iniciando juego... Jugador ${app.nombreJugador}`);
  });

  it('Los items iniciales deben ser Escudo, Espada y Pocion', () => {
    // Creamos el componente
    const fixture = TestBed.createComponent(AppComponent);

    // Extraemos la instancia del componente
    const app = fixture.componentInstance;

    expect(app.items).toEqual(['Escudo', 'Espada', 'Pocion']);
  });

  it('La energia debe disminuir en 10 al atacar', () => {
    // Creamos el componente
    const fixture = TestBed.createComponent(AppComponent);

    // Extraemos la instancia del componente
    const app = fixture.componentInstance;

    app.iniciarJuego();
    app.atacar();

    expect(app.energia)
      // Debe ser 90
      .toBe(90);
  });
});
