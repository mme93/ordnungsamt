import {NgModule} from "@angular/core";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {AnzeigeRoutingModule} from "./anzeige-routing.module";


@NgModule({
  imports: [
    AnzeigeRoutingModule,
    DividerModule,
    CardModule
  ],
  providers: [],
  exports: [],
  declarations: []
})
export class AnzeigeModule {
}


