import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blogitem',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.css']
})
export class BlogitemComponent implements OnInit {


  @Input()
  blog: Blog;
  

  constructor(private blogservice:BlogService, private router: Router) { }

  ngOnInit(): void {
  }
  public removeBlog(): void{
    this.blogservice.removeBlog(this.blog.id);
  }
  public editBlog(): void{
    
    this.router.navigateByUrl("/edit/" + this.blog.id)
    
  }
  public showBlog(): void{
    
    this.router.navigateByUrl("/blog/" + this.blog.id)
    
  }
}
