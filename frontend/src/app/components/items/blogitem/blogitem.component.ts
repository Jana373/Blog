import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/classes/blog';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';
import { DbBlogService } from 'src/app/services/db-blog.service';
import { BlogComponent } from '../../pages/blog/blog.component';
@Component({
  selector: 'app-blogitem',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.css']
})
export class BlogitemComponent implements OnInit {


  @Input()
  blog: Blog;


  constructor(private blogservice: BlogService, private router: Router, public DbBlogservice: DbBlogService) { }

  ngOnInit(): void {
  }
  public removeBlog(): void {
    this.DbBlogservice.deleteBlog(this.blog._id).subscribe(() =>
      this.router.navigate(['/blogs/'])
        .then(() => {
          window.location.reload();
        })

    )




  }
  public editBlog(): void {

    this.router.navigateByUrl("/edit/" + this.blog._id)

  }
  public showBlog(): void {

    this.router.navigateByUrl("/blog/" + this.blog._id)


  }
}
