import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {SplitButtonModule} from "primeng/splitbutton";
import {InputTextModule} from "primeng/inputtext";
import {SelectButtonModule} from "primeng/selectbutton";
import {MenubarModule} from "primeng/menubar";
import {HttpClientModule} from "@angular/common/http";
import {DialogModule} from "primeng/dialog";
import {ListboxModule} from "primeng/listbox";
import {TableModule} from "primeng/table";
import {PaginatorModule} from "primeng/paginator";
import {CheckboxModule} from "primeng/checkbox";
import {MessagesModule} from "primeng/messages";
import {OpenLayerMapComponent} from "./shared/components/map/open-layer-map/open-layer-map.component";

@NgModule({
  declarations: [
    AppComponent,
    OpenLayerMapComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    SplitButtonModule,
    InputTextModule,
    SelectButtonModule,
    MenubarModule,
    HttpClientModule,
    DialogModule,
    ListboxModule,
    TableModule,
    PaginatorModule,
    CheckboxModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
