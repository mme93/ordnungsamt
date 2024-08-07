import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { OrdnungsamtComponent } from "./ordnungsamt.component";

const routes: Routes = [
  {
    path: '',
    component: OrdnungsamtComponent
  },
  {
    path: 'anzeige',
    loadChildren: () => import('./anzeige/anzeige.module').then(m => m.AnzeigeModule),
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdnungsamtRoutingModule { }
