import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { HeroesServices,Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private heroeServices:HeroesServices) {

    // this.activatedRoute.params.subscribe( params => {
    //   console.log(params['termino']); //El parametro que se indica es el mismo que en el archivo de routes se indico se iba a pasar
    //   this.heroes = this.heroeServices.buscarHeroe( params['termino'] );
    //
    // });

    console.log(this.heroes);
  }

  ngOnInit() {
    //I can solve the same problem get the parameter here or in the cosntructor
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino']; //El parametro que se indica es el mismo que en el archivo de routes se indico se iba a pasar
      this.heroes = this.heroeServices.buscarHeroe( params['termino'] );

    });
  }

}
