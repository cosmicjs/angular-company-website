import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  /*{
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },*/
  { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
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
