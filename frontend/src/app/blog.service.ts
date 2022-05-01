import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Blog } from './blog';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  
  
  private NextId:number;

  constructor() {
    let blogs = this.getBlogs();
    if(blogs.length == 0){
      this.NextId = 0;
    }
    else{
      let currmaxId = blogs[blogs.length -1].id;
      this.NextId = currmaxId + 1
    }
    
    
    
   }
   public addBlog(title:string, body:string, category:string, imageUrl:string, 
    postdate:Date, author:string, authorTitle: string):void{
     // take the current date 
     postdate = new Date();
     let blog = new Blog(this.NextId, title, body,category,imageUrl,postdate,author,authorTitle);
     let blogs = this.getBlogs();
     blogs.push(blog);
     this.setLocalStorageBlog(blogs);
     this.NextId ++;

   }
   public updateBlog(title:string, body:string, category:string, imageUrl:string, 
    postdate:Date, author:string, authorTitle: string, id:number): void{
      // we wil update the post date 
      postdate   = new Date();
      // a new blog with the same id
      let blog = new Blog(id ,title, body,category,imageUrl,postdate,author,authorTitle);
      let blogs = this.getBlogs();
      // we need to find the index of our blog (index is not the id bcz of remove )
      const index = blogs.findIndex((blog) => blog.id === id);
      blogs[index] = blog;
      this.setLocalStorageBlog(blogs);

    }
   public getBlogs():Blog[]{
     let localStorageItem = JSON.parse(localStorage.getItem('blogs'));
     return localStorageItem == null ? []: localStorageItem.blogs;
   }
   public getBlogbyID(id: number):any{
    let blogs = this.getBlogs();
    let blog = blogs.filter((blogs) => blogs.id === id)
    
    //console.log(blog[0]);
    return blog[0]

   }
   public removeBlog(id: number):void{
     let blogs = this.getBlogs();

     // filter will create an array with all elments except the one of id id 
    blogs = blogs.filter((blogs) =>blogs.id !=id)
    // update local storage
    this.setLocalStorageBlog(blogs)
   }
   private setLocalStorageBlog(blogs: Blog[]):void{
     localStorage.setItem('blogs',JSON.stringify({blogs: blogs}));
   }
   public editBlog(id: number):void{
     let blogs = this.getBlogs();

   }
}
