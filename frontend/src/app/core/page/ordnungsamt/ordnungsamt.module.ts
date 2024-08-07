import {NgModule} from "@angular/core";
import {OrdnungsamtRoutingModule} from "./ordnungsamt-routing.module";
import {OrdnungsamtComponent} from "./ordnungsamt.component";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {AnzeigeComponent} from './anzeige/anzeige.component';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {AnzeigeModule} from "./anzeige/anzeige.module";
import {BasicMapComponent} from './map/basic-map/basic-map.component';
import {TableModule} from "primeng/table";


@NgModule({
  imports: [
    OrdnungsamtRoutingModule,
    DividerModule,
    CardModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    AnzeigeModule,
    TableModule

  ],
  providers: [],
  exports: [],
  declarations: [OrdnungsamtComponent, AnzeigeComponent, BasicMapComponent]
})
export class OrdnungsamtModule {
}


