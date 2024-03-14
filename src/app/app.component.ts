import { Component } from '@angular/core';

// decorador, añade caracteristicas especiales a la clase
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'componentes-maya';
}
