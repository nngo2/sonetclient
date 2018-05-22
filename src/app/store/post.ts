export interface IPost {
    id: string;
    username: string;
    time: Date;
    content: string;
    image: string;
    users: string[];
    comments: [{
        username: string;
        time: Date;
        content: string;
    }];
}
