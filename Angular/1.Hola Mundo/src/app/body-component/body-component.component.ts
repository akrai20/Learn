import { Component } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent {

    mostrar:boolean = false;

    frase:any = {
      mensaje:"Un gran poder requiere una gran responsabilidad",
      autor:"Ben Parker"
    }

    personajes:string[] = ["Spider-man","Thor","Capitan America","Hulk"];
    
  }
