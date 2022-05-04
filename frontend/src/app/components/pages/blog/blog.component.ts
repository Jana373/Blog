import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { DbBlogService } from 'src/app/services/db-blog.service';
import { Blog } from 'src/app/classes/blog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Blog[]

  constructor(public blogservice: BlogService, public DbBlogservice: DbBlogService) {

  }




  ngOnInit(): void {
    // excuting code when the componenet is fully initilaised 
    this.fetch_blogs()


  }

  fetch_blogs() {
    //streaming data
    this.DbBlogservice.getBlogs().subscribe((data: Blog[]) => {
      this.blogs = data;


    }
    )

  };

}
