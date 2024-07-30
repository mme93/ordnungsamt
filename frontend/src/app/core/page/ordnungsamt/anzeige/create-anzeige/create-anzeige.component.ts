import {Component} from '@angular/core';

export interface DropDownItem {
  name?: string,
  code?: string
}

@Component({
  selector: 'app-create-anzeige',
  templateUrl: './create-anzeige.component.html',
  styleUrl: './create-anzeige.component.scss'
})
export class CreateAnzeigeComponent {

  beschwerdeArten: DropDownItem[]=[];

  selectedBeschwerdeArten: DropDownItem ={
    name: "Straßenverkehr",
    code: "STRASSENVERKEHR"
  };

  constructor() {
    this.beschwerdeArten = [
      {
        name: "Straßenverkehr",
        code: "STRASSENVERKEHR"
      },{
        name: "Lärmbelästigung",
        code: "LAERMBELAESTIGUNG"
      },{
        name: "Müll und Abfall",
        code: "MUELL_ABFALL"
      },{
        name: "Beleuchtung",
        code: "BELEUCHTUNG"
      },{
        name: "Grünflächen und Parks",
        code: "GRUENFLAECHEN_PARKS"
      }
    ];
  }
}
