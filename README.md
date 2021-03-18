# Practica03

Utilizando lo visto en clase de práctica/Lab, se pide implementar la siguiente página web utilizando Angular y Custom Components. Como se puede observar, la página permite al usuario seleccionar una opción a partir de un listado de Comunidades Autónomas, así como un listado de Provincias pertenecientes a la Comunidad Autónoma seleccionada. 

Se pide realizar la micropráctica definiendo Custom Elements para los selectores de Comunidad y Provincia; estos Custom Elements tendrán un atributo numérico id que sirve como identificador único. 

Cuando el usuario selecciona una Comunidad Autónoma, el listado de Provincias se actualiza automáticamente. 

Finalmente, cuando el usuario presiona sobre el botón mostrado al final de la página, se muestra el id de la Comunidad y Provincia actuales. 

Se sugiere la siguiente estructura: 

```
<app-select2 [(values)]="values" (changed)="changed_lists($event)" label1="Comunidad" label2="Provincia">
<app-option2 id="1" texto="Castilla y León" ></app-option2>
<app-option2 id="2" texto="Ávila" idPadre="1"></app-option2>
...
<app-option2 id="8" texto="Madrid"></app-option2>
<app-option2 id="9" texto="Madrid" idPadre="8"></app-option2>
...
</app-select2>
```

Como se puede observar, en este ejemplo se ha definido un elemento custom padre que contiene todas las opciones y pinta los dos selectores utilizando las etiquetas definidas como atributos; el elemento custom hijo define una de las opciones que puede estar incluida dentro de uno de los dos selectores, dependiendo si existe el atributo idPadre o no, i.e. si tiene un parámetro idPadre, es una provincia, de lo contrario es una comunidad autónoma.

## Deploy en GitHub Pages

No hace falta crear la rama, se crea sola.

Una vez creado el repositorio con todo en GitHub.

```terminal
ng add angular-cli-ghpages
ng deploy --base-href=/<repositoryname>/
```
