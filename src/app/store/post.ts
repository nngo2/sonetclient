export interface IPost {
    _id: string;
    username: string;
    time: Date;
    content: string;
    image: string;
    comments: [{
        username: string;
        time: Date;
        content: string;
    }];
}
