import { Component } from '@angular/core';

@Component({
  selector: 'app-graphics-horizontal',
  templateUrl: './graphics-horizontal.component.html',
  styleUrls: ['./graphics-horizontal.component.css']
})
export class GraphicsHorizontalComponent  {

  results: any[] = [
    {
      "name": "Juego 1",
      "value": 50
    },
    {
      "name": "Juego 2",
      "value": 12
    },
    {
      "name": "Juego 3",
      "value": 20
    },
    {
      "name": "Juego 4",
      "value": 6
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis   = true;
  showYAxis   = true;
  gradient    = true;
  showLegend  = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor(){}

  onSelect(event) {
    console.log(event);
  }


}