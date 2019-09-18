import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent, OpenAccountComponent } from './pages/index';

const routes: Routes = [
  { path: '', component: PlansComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'open-account/:id', component: OpenAccountComponent },
  { path: '**', redirectTo: '/plans' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
