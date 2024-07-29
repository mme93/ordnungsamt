import {NgModule} from "@angular/core";
import {OrdnungsamtRoutingModule} from "./ordnungsamt-routing.module";
import {OrdnungsamtComponent} from "./ordnungsamt.component";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import { AnzeigeComponent } from './anzeige/anzeige.component';
import {FormsModule} from "@angular/forms";
import { ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  imports: [
    OrdnungsamtRoutingModule,
    DividerModule,
    CardModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  exports: [],
  declarations: [OrdnungsamtComponent,AnzeigeComponent]
})
export class OrdnungsamtModule {
}


