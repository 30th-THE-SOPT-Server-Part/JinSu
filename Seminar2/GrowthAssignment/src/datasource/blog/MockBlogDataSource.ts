import { Service }    from "typedi";
import Blog           from "../../model/blog/Blog";
import BlogDataSource from "./BlogDataSource";

@Service()
export default class MockBlogDataSource implements BlogDataSource {
    constructor() {
    }

    private blogData: Blog = {
        publisher: "jinsu",
        link: "https://antilog.tistory.com"
    }

    getMockBlog(): Promise<Blog> {
        return new Promise<Blog>(resolve => {
            setTimeout(() => {
                resolve(this.blogData)
            }, 100);
        });
    }
};