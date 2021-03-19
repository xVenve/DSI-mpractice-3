import { Component, Input, OnInit, QueryList, ContentChildren } from '@angular/core';

import { ProvinciaComponent } from '../provincia/provincia.component';
@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.scss'],
})
export class ComunidadComponent implements OnInit {
  @Input() label1: string;
  @Input() label2: string;

  @ContentChildren(ProvinciaComponent)
  public elements!: QueryList<ProvinciaComponent>;

  constructor() {
    this.label1 = '';
    this.label2 = '';
  }

  ngOnInit() {}


}
