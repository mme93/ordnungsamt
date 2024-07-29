import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'ordnungsamt',
    loadChildren: () => import('./core/page/ordnungsamt/ordnungsamt.module').then(m => m.OrdnungsamtModule)
  },
  {path: '**', redirectTo: 'ordnungsamt', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
