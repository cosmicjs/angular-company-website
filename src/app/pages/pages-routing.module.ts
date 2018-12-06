import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HomepageGuard } from '../core/_guards/homepage-guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomepageGuard]
    // This guard will redirect to the default slug.
  },
  {
    path: ':slug',
    component: PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
