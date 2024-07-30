import {AfterViewInit, Component} from '@angular/core';
import {Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import {fromLonLat} from "ol/proj";
import {GeocodingService} from "../../../../../shared/service/geocording/geocoding.service";

@Component({
  selector: 'app-basic-map',
  templateUrl: './basic-map.component.html',
  styleUrl: './basic-map.component.scss'
})
export class BasicMapComponent implements AfterViewInit {
  public street: string | undefined;
  public houseNumber: string | undefined;
  public zipCode: string | undefined;
  public city: string | undefined;
  private map: Map | undefined;

  constructor(private geocodingService: GeocodingService) {
  }

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

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.getAddressFromCoordinates(position.coords.longitude,position.coords.latitude)
        // @ts-ignore
        this.map.getView().setCenter(fromLonLat([position.coords.longitude, position.coords.latitude]));
        // @ts-ignore
        this.map.getView().setZoom(20);
        console.error('Adresse gefunden an: Lat.:'+position.coords.latitude +' Long.:'+position.coords.longitude+'.');
      }, (error) => {
        console.error('Error fetching location', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  getAddressFromCoordinates(latitude:any, longitude:any) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.address) {
          // Detailierte Adresse ausgeben, falls vorhanden
          let address = data.address.road || '';
          let city = data.address.city || data.address.town || data.address.village || '';
          let state = data.address.state || '';
          let country = data.address.country || '';

          console.log(`Adresse: ${address}, ${city}, ${state}, ${country}`);
        } else {
          console.error('Keine genaue Adresse gefunden an: Lat.:'+latitude +' Long.:'+longitude+', alternative Informationen:');
          console.log('Rohdaten:', data);
        }
      })
      .catch(error => console.error('Fehler bei der Adresssuche:', error));
  }

}
