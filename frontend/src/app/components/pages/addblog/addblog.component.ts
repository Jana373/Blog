import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { DbBlogService } from 'src/app/services/db-blog.service';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  blogTitle: string;
  blogBody: string;
  blogCategory: string;
  blogImage: string;
  postDate: Date;
  authName: string;
  authTitle: string;

  constructor(private blogservice: BlogService, public DbBlogservice: DbBlogService) {
    this.blogTitle = "";
    this.blogBody = "";
    this.blogCategory = "";
    this.postDate = new Date();
    this.blogImage = "";
    this.blogImage = "";
    this.authName = "";
    this.authTitle = "";
  }

  ngOnInit(): void {
  }
  public addBlog(): void {

    this.DbBlogservice.addBlog(this.blogTitle, this.blogBody, this.blogCategory, this.blogImage, this.postDate,
      this.authName, this.authTitle).subscribe(() => {
        this.blogTitle = '';
        this.blogBody = '';
        this.authName = '';
        this.authTitle = '';
        this.blogCategory = '';
        this.blogImage = '';

      });



  }

}
