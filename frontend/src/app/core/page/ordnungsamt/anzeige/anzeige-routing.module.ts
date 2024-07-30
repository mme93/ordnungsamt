import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnzeigeComponent } from "./anzeige.component";
import {CreateAnzeigeComponent} from "./create-anzeige/create-anzeige.component";

const routes: Routes = [
  {
    path: '',
    component: AnzeigeComponent
  },{
    path: 'neu',
    component: CreateAnzeigeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnzeigeRoutingModule { }
