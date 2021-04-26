import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Components/Layout/layout.component';

const layoutRoutes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path: 'movies',
        loadChildren: () => import('../Admin/Movies/movies.module').then(mod => mod.MoviesModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes)
  ],
  exports: [RouterModule]
})

export class LayoutRoutingModule {}
