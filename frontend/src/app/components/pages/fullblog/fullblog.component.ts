import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-fullblog',
  templateUrl: './fullblog.component.html',
  styleUrls: ['./fullblog.component.css']
})
export class FullblogComponent implements OnInit {

  blog: Blog;
  id: string ;
  
  b:Blog;
  blogTitle:string;
  blogBody:string;
  blogCategory:string;
  blogImage:string;
  postDate:Date;
  authName:string;
  authTitle:string;

  constructor(private route: ActivatedRoute,private blogservice:BlogService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.b = this.blogservice.getBlogbyID(Number(this.id));
    this.blogTitle = this.b["title"];
    this.blogBody = this.b["body"];
    this.blogCategory = this.b["category"];
    this.postDate = new Date();
    this.blogImage= this.b["imageUrl"];
    this.authName = this.b["author"];
    this.authTitle = this.b["authorTitle"];
  }

}
