import { Component, Inject,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.scss'],
})
export class ProvinciaComponent implements OnInit {
  @Input() id: string;
  @Input() texto: string;
  @Input() idPadre: string;
  
  constructor(id:string, texto:string, idPadre:string) {
    this.id = id;
    this.texto = texto;
    this.idPadre = idPadre;
  };

  ngOnInit() :void {}
}
