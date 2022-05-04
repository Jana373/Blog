import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router'
import { DbBlogService } from 'src/app/services/db-blog.service';

@Component({
  selector: 'app-fullblog',
  templateUrl: './fullblog.component.html',
  styleUrls: ['./fullblog.component.css']
})
export class FullblogComponent implements OnInit {

  blog: Blog;
  id: string;

  b: Blog;
  blogTitle: string;
  blogBody: string;
  blogCategory: string;
  blogImage: string;
  postDate: Date;
  authName: string;
  authTitle: string;

  constructor(private route: ActivatedRoute, private blogservice: BlogService, public DbBlogservice: DbBlogService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.DbBlogservice.getBlogbyID(this.id).subscribe(res => {
        // res is an array containing the object blog of id id 
        this.blog = res[0];
        console.log(this.blog);
        this.blogTitle = this.blog["title"];
        this.blogBody = this.blog["body"];
        this.blogCategory = this.blog["category"];
        this.postDate = this.blog["post_date"];
        this.blogImage = this.blog["image_url"];  
        this.authName = this.blog["author"];
        this.authTitle = this.blog["author_title"];
      })
    })


  }

}
