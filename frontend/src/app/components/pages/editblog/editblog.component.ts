import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {

  
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
  
  
  // b is a dict , we will use it to construct the blog object 
  constructor(private route: ActivatedRoute,private blogservice:BlogService) {

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.b = this.blogservice.getBlogbyID(Number(this.id));
    //this.blog = new Blog(this.b["id"], this.b["title"],this.b["body"],this.b["category"],this.b["imageUrl"],this.b["postdate"],this.b["author"],this.b["authorTitle"])
    this.blogTitle = this.b["title"];
    this.blogBody = this.b["body"];
    this.blogCategory = this.b["category"];
    this.postDate = new Date();
    this.blogImage= this.b["imageUrl"];
    this.authName = this.b["author"];
    this.authTitle = this.b["authorTitle"];
    
  }
  public updateBlog():void{
    this.blogservice.updateBlog(this.blogTitle, this.blogBody,this.blogCategory, this.blogImage,this.postDate,
      this.authName,this.authTitle, Number(this.id))
    alert("Your post has been updated")
  }
  }
  
