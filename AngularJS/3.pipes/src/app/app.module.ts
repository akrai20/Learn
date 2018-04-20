import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';


import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

import localEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { BotonPipe } from './pipes/boton.pipe';
registerLocaleData(localEs);


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    BotonPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
