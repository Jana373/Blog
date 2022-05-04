import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { Router, ActivatedRoute } from '@angular/router'
import { DbBlogService } from 'src/app/services/db-blog.service';
import { partitionArray } from '@angular/compiler/src/util';
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {



  id: string;

  blog: any = {};
  blogTitle: string;
  blogBody: string;
  blogCategory: string;
  blogImage: string;
  postDate: Date;
  authName: string;
  authTitle: string;



  constructor(private route: ActivatedRoute, private blogservice: BlogService, public DbBlogservice: DbBlogService) {


  }


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
        this.postDate = new Date();
        this.blogImage = this.blog["image_url"];  
        this.authName = this.blog["author"];
        this.authTitle = this.blog["author_title"];
      })
    })


  }



  public updateBlog(): void {
    this.DbBlogservice.updateBlog(this.blogTitle, this.blogBody, this.blogCategory, this.blogImage, this.postDate.toDateString(),
      this.authName, this.authTitle, this.id).subscribe(() => {
        alert("Your post has been updated")
        console.log(this.postDate)
      });


  }


}


