import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddblogComponent } from './components/pages/addblog/addblog.component';
import { BlogService } from './services/blog.service';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogitemComponent } from './components/items/blogitem/blogitem.component';
import { EditblogComponent } from './components/pages/editblog/editblog.component';
import { FullblogComponent } from './components/pages/fullblog/fullblog.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddblogComponent,
    BlogComponent,
    BlogitemComponent,
    EditblogComponent,
    FullblogComponent,
    HomepageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    BlogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
