import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  private apiUrl = 'https://nominatim.openstreetmap.org/search';

  constructor(private http: HttpClient) {}

  getCoordinates(address: string): Observable<any> {
    const url = `${this.apiUrl}?q=${encodeURIComponent(address)}&format=json&limit=1`;
    return this.http.get(url);
  }
}
