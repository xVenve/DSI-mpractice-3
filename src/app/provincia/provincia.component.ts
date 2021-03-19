import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.scss'],
})
export class ProvinciaComponent implements OnInit {
  @Input() id: string;
  @Input() texto: string;
  @Input() idPadre: string;
  constructor() {
    this.id = '';
    this.texto = '';
    this.idPadre = '';
  }

  ngOnInit(): void {}
}
