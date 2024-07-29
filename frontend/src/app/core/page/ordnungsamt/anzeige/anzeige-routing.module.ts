import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnzeigeComponent } from "./anzeige.component";

const routes: Routes = [
  {
    path: '',
    component: AnzeigeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnzeigeRoutingModule { }
