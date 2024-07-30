import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {MapDialogService} from "../../../../../shared/service/dialog/map-dialog.service";

export interface DropDownItem {
  name?: string,
  code?: string
}

@Component({
  selector: 'app-create-anzeige',
  templateUrl: './create-anzeige.component.html',
  styleUrl: './create-anzeige.component.scss'
})
export class CreateAnzeigeComponent implements OnInit {


  columns: number[] = [];


  ngOnInit() {
    this.columns = [0, 1, 2, 3, 4, 5];
    this.primengConfig.ripple = true;
  }

  addColumn() {
    this.columns.push(this.columns.length);
  }

  removeColumn() {
    this.columns.splice(-1, 1);
  }

  beschwerdeArten: DropDownItem[] = [];

  selectedBeschwerdeArten: DropDownItem = {
    name: "Straßenverkehr",
    code: "STRASSENVERKEHR"
  };

  constructor(private primengConfig: PrimeNGConfig, private mapDialogService: MapDialogService) {
    this.beschwerdeArten = [
      {
        name: "Straßenverkehr",
        code: "STRASSENVERKEHR"
      }, {
        name: "Lärmbelästigung",
        code: "LAERMBELAESTIGUNG"
      }, {
        name: "Müll und Abfall",
        code: "MUELL_ABFALL"
      }, {
        name: "Beleuchtung",
        code: "BELEUCHTUNG"
      }, {
        name: "Grünflächen und Parks",
        code: "GRUENFLAECHEN_PARKS"
      }
    ];
  }

  openMap(){
    this.mapDialogService.openBasicMapDialog()
  }

}
