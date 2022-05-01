import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddblogComponent } from './addblog/addblog.component';
import { BlogService } from './blog.service';
import { BlogComponent } from './blog/blog.component';
import { BlogitemComponent } from './blogitem/blogitem.component';
import { EditblogComponent } from './editblog/editblog.component';
import { FullblogComponent } from './fullblog/fullblog.component';
import { HomepageComponent } from './homepage/homepage.component';

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
