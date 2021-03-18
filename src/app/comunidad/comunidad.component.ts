import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss'],
})
export class ComunidadComponent implements OnInit {
  @Input() id: string;
  @Input() idPadre: string;

  @Input() text: string;

  constructor() {
    this.id = '';
    this.idPadre = '';
    this.text = '';
  }

  ngOnInit() {}
}
