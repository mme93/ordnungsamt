import {NgModule} from "@angular/core";
import {OrdnungsamtRoutingModule} from "./ordnungsamt-routing.module";
import {OrdnungsamtComponent} from "./ordnungsamt.component";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";

@NgModule({
  imports: [
    OrdnungsamtRoutingModule,
    DividerModule,
    CardModule
  ],
  providers: [],
  exports: [],
  declarations: [OrdnungsamtComponent]
})
export class OrdnungsamtModule {
}

