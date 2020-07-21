import { Component } from '@angular/core';


@Component({

    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html',
    styleUrls: ['./mi-componente.component.css']
    })
    export class MiComponente{

        public titulo:  string ;
        public descripcion : string ;
        public year : number ;

        constructor(){
            console.log('Mi primer constructor');
            this.titulo='Hola este es mi titulo';
            this.descripcion='"Esta es mi descripcion';
            this.year = 2020;
        }
    }
       