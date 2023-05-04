import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorDetailComponent } from './author-detail/author-detail.component';

const routes: Routes = [
  {
    path: 'authors',
    children: [
      {
        path: ':id',
        component: AuthorDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorRoutingModule {}
