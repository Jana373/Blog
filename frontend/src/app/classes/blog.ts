export class Blog {
    id:number;
    title:string;
    body:string;
    category:string;
    imageUrl:string;
    postdate:Date;
    author:string;
    authorTitle:string;
    constructor(id:number, title:string, body:string, category:string, imageUrl:string, 
                postdate:Date, author:string, authorTitle: string){
        this.id = id;
        this.title = title;
        this.body = body;
        this.category = category;
        this.imageUrl = imageUrl;
        this.postdate = postdate;
        this.author = author;
        this.authorTitle = authorTitle;
    }


}
