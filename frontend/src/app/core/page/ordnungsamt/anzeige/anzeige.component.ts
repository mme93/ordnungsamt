import {AfterViewInit, Component} from '@angular/core';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj';
import {GeocodingService} from "../../../../shared/service/geocording/geocoding.service";

@Component({
  selector: 'app-anzeige',
  templateUrl: './anzeige.component.html',
  styleUrl: './anzeige.component.scss'
})
export class AnzeigeComponent implements AfterViewInit {
  public street: string | undefined;
  public houseNumber: string| undefined;
  public zipCode: string| undefined;
  public city: string| undefined;
  private map: Map| undefined;

  constructor(private geocodingService: GeocodingService) {}

  ngAfterViewInit(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([6.8789, 51.4325]), // Standard-Startpunkt für Mülheim an der Ruhr
        zoom: 13
      })
    });
  }

  locateAddress(): void {
    const address = `${this.street} ${this.houseNumber}, ${this.zipCode} ${this.city}`;
    this.geocodingService.getCoordinates(address).subscribe((result: any) => {
      if (result.length > 0) {
        const lat = parseFloat(result[0].lat);
        const lon = parseFloat(result[0].lon);
        // @ts-ignore
        this.map.getView().setCenter(fromLonLat([lon, lat]));
        // @ts-ignore
        this.map.getView().setZoom(17); // Enger Zoom auf die gefundene Adresse
      } else {
        console.error('Address not found');
      }
    });
  }
}
