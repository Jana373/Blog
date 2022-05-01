import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './addblog/addblog.component';
import { BlogComponent } from './blog/blog.component';
import { BlogitemComponent } from './blogitem/blogitem.component';
import { EditblogComponent } from './editblog/editblog.component';
import { FullblogComponent } from './fullblog/fullblog.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'add', component: AddblogComponent},
  {path: 'blogs', component: BlogComponent},
  {path: 'edit/:id', component: EditblogComponent},
  {path: 'blog/:id', component: FullblogComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
