import { Component  } from '@angular/core';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { ProvinciaComponent } from './provincia/provincia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Micropráctica 03!';
  comu?: ComunidadComponent;
  prov?: ProvinciaComponent;
  idComunidadSeleccionada?:string;

  comunidades:ComunidadComponent[] = [];
  provincias:ProvinciaComponent[] = [];

  constructor () {
    this.comu = undefined;
    this.prov = undefined;
    this.idComunidadSeleccionada = undefined;
  };

  ngOnInit():void {
    this.comunidades.push(new ComunidadComponent('1', 'Madrid'));
    this.comunidades.push(new ComunidadComponent('2', 'Galicia'));
    this.comunidades.push(new ComunidadComponent('3', 'Cataluña'));
    this.provincias.push(new ProvinciaComponent('4', 'Lugo', '2'));
    this.provincias.push(new ProvinciaComponent('5', 'A Coruña', '2'));
    this.provincias.push(new ProvinciaComponent('6', 'Pontevedra', '2'));
    this.provincias.push(new ProvinciaComponent('7', 'Ourense', '2'));
    this.provincias.push(new ProvinciaComponent('8', 'Madrid', '1'));
  }


}
