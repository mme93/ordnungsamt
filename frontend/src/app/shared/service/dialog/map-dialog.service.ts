import { Injectable } from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {BasicMapComponent} from "../../../core/page/ordnungsamt/map/basic-map/basic-map.component";

@Injectable({
  providedIn: 'root'
})
export class MapDialogService {

  constructor(private dialogService: DialogService) { }

  openBasicMapDialog() {
    this.dialogService.open(BasicMapComponent, {
      header: 'Karte',
      width: '70%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true,
      closeOnEscape: true
    });
  }
}
