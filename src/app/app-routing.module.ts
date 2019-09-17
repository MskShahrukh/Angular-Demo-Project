import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './pages/plans/plans.component';
import { FooterComponent } from './components/footer/footer.component';
import { OpenAccountComponent } from './pages/open-account/open-account.component';

const routes: Routes = [
  { path: 'plans', component: PlansComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'open-account/:id', component: OpenAccountComponent },

  {
    path: '**',
    redirectTo: '/plans'
  }
  // { path: '*', component: PlansComponent }
  // {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
