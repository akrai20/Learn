import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesServices } from '../../services/heroes.service';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

      heroe:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroeServices:HeroesServices
   ) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params['id']); //El parametro que se indica es el mismo que en el archivo de routes se indico se iba a pasar
      this.heroe = this.heroeServices.getHeroe( params['id'] );

    });
      console.log(this.heroe.casa);
   }
  ngOnInit() {
  }

}
