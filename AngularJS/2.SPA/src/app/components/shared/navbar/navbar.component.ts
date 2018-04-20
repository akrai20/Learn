import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { HeroesServices } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    termino:string ='';

  constructor(private _heroesService:HeroesServices,
              private _router:Router) { }

  ngOnInit() {

  }

  buscarHeroe(termino:string){
    console.log(termino);
    this._router.navigate(['/buscador',termino]);

  }

}
