import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core';

const routes: Routes = [
  /*{
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },*/
  { path: 'not-found', component: NotFoundComponent },
  {
    path: '',
    loadChildren: './pages/pages.module#PagesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
