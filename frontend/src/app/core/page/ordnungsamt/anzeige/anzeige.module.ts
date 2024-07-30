import {NgModule} from "@angular/core";
import {DividerModule} from "primeng/divider";
import {CardModule} from "primeng/card";
import {AnzeigeRoutingModule} from "./anzeige-routing.module";
import { CreateAnzeigeComponent } from './create-anzeige/create-anzeige.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {Button, ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {PanelModule} from "primeng/panel";
import {RippleModule} from "primeng/ripple";
import {InputTextareaModule} from "primeng/inputtextarea";


@NgModule({
  imports: [
    AnzeigeRoutingModule,
    DividerModule,
    CardModule,
    DropdownModule,
    FormsModule,
    Button,
    InputTextModule,
    ButtonModule,
    PanelModule,
    RippleModule,
    InputTextareaModule
  ],
  providers: [],
  exports: [],
  declarations: [
    CreateAnzeigeComponent
  ]
})
export class AnzeigeModule {
}


