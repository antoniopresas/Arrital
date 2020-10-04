import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  titulos = [{titulo: 'Cocina', refe: '#fat' }, {titulo: 'Baños', refe: '#one'}, {titulo: 'Servicios', refe: '#mdo'} ];

  constructor() { }

  ngOnInit(): void {
  }

}
