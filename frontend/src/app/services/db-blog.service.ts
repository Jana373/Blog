import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../classes/blog';

@Injectable({
  providedIn: 'root'
})
export class DbBlogService {


  private NextId: number;

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {

  }
  getBlogs() {
    return this.http.get(`${this.url}/get_blogs`);

  }
  getBlogbyID(id) {

    return this.http.get(`${this.url}/get_blogs/${id}`);
  }

  updateBlog(blogTitle, blogBody, blogCategory, blogImage, postDate,
    authName, authTitle, id) {
    const blog = {
      _id: id,
      title: blogTitle,
      body: blogBody,
      category: blogCategory,
      image_url: blogImage,
      post_date: postDate,
      author: authName,
      author_title: authTitle

    };
    //console.log(blog.post_date)
    return this.http.put(`${this.url}/post_blog/${id}`, blog)

  }
  deleteBlog(id) {
    return this.http.delete(`${this.url}/delete_blog/${id}`)
  }


  addBlog(blogTitle, blogBody, blogCategory, blogImage, postDate,
    authName, authTitle) {
    const blog = {
      //_id: id,
      title: blogTitle,
      body: blogBody,
      category: blogCategory,
      image_url: blogImage,
      post_date: postDate,
      author: authName,
      author_title: authTitle

    };
    //console.log(blog.post_date)
    return this.http.post(`${this.url}/post_blog/`, blog)

  }


}
