import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SIDEBARComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  nombreObtenido:any;
  imagenObtenida:any;
  referenciaObtenida:any;

  ngOnInit(): void {
  }

  mandarDatos(nombre:any, imagen:any, referencia:any){
    this.nombreObtenido = nombre;
    this.imagenObtenida = imagen;
    this.referenciaObtenida = referencia;
  }

}
