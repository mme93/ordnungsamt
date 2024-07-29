import {Injectable} from '@angular/core';
import {MenuItem} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  getMenubarItems(): MenuItem[] {
    return [
      {
        label: 'Ordnungsamt',
        routerLink: '/',
      },
      {
        label: 'Menu',
        routerLink: '/',
        items: [
          {
            label: 'Anzeigen',
            icon: 'pi pi-fw pi-server',
            items: [
              {
                label: 'Straßenverkehrsrecht',
                icon: 'pi pi-fw pi-code'
              },
              {
                separator: true
              },
              {
                label: 'Illegale Müllentsorgung',
                icon: 'pi pi-fw pi-info-circle'
              },
              {
                separator: true
              },
              {
                label: 'Ruhe Störung',
                icon: 'pi pi-fw pi-user'
              },
              {
                separator: true
              },
              {
                label: 'Ordnungswidrigkeiten',
                icon: 'pi pi-fw pi-user'
              },
              {
                separator: true
              },
              {
                label: 'Gewerberecht',
                icon: 'pi pi-fw pi-chevron-circle-right'
              }
            ]
          },
          {
            label: 'Information',
            icon: 'pi pi-fw pi-database'
          },
          {
            label: 'Kontakte',
            icon: 'pi pi-fw pi-table'
          },
          {
            label: 'Hilfe',
            icon: 'pi pi-fw pi-send'
          }
        ]
      }

    ];
  }
}
