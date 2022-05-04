import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogComponent } from './components/pages/addblog/addblog.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogitemComponent } from './components/items/blogitem/blogitem.component';
import { EditblogComponent } from './components/pages/editblog/editblog.component';
import { FullblogComponent } from './components/pages/fullblog/fullblog.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'add', component: AddblogComponent },
  { path: 'blogs', component: BlogComponent },
  { path: 'edit/:id', component: EditblogComponent },
  { path: 'blog/:id', component: FullblogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
