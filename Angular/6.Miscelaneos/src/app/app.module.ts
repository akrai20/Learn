import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
