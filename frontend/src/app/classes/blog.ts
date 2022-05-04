export class Blog {
    _id: number;
    title: string;
    body: string;
    category: string;
    image_url: string;
    post_date: Date;
    author: string;
    author_title: string;
    constructor(id: number, title: string, body: string, category: string, imageUrl: string,
        postdate: Date, author: string, authorTitle: string) {
        this._id = id;
        this.title = title;
        this.body = body;
        this.category = category;
        this.image_url = imageUrl;
        this.post_date = postdate;
        this.author = author;
        this.author_title = authorTitle;
    }


}
