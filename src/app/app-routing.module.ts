import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonComposantComponent } from './mon-composant/mon-composant.component';

const routes: Routes = [
  {
    path: 'newcompo',
    component: MonComposantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
