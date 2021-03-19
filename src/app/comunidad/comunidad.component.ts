import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss'],
})
export class ComunidadComponent implements OnInit {
  @Input() id: string;
  @Input() texto: string;

  constructor(id:string, texto:string) {
    this.id = id
    this.texto = texto;
  };


  ngOnInit() {}

}
