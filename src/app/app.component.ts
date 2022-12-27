import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Turnos', url: '/turnos', icon: 'list' },
    { title: 'Reserva', url: '/reserva', icon: 'pencil' }
  ];
  public labels = ['Confirmado', 'Pendiente', 'Cancelado', 'Modificado', 'Otro'];
  constructor() {}
}
