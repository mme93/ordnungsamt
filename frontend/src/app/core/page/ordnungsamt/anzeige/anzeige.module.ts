import {NgModule} from "@angular/core";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {AnzeigeRoutingModule} from "./anzeige-routing.module";
import { CreateAnzeigeComponent } from './create-anzeige/create-anzeige.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  imports: [
    AnzeigeRoutingModule,
    DividerModule,
    CardModule,
    DropdownModule,
    FormsModule,
    Button,
    InputTextModule
  ],
  providers: [],
  exports: [],
  declarations: [
    CreateAnzeigeComponent
  ]
})
export class AnzeigeModule {
}


