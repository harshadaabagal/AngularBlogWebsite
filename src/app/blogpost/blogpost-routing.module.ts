import { NgModule } from '@angular/core';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'blog', component: BlogpostListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpostRoutingModule { }
