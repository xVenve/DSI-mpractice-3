import { Component, Inject,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.scss'],
})
export class ProvinciaComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() idPadre: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.idPadre = '';
  }

  ngOnInit() :void {}
}
