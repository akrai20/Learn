import { Component } from '@angular/core';

import { PendientesComponent } from '../pendientes/pendientes.components';
import { TerminadoComponent } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadoComponent;

  constructor() {

  }
}
