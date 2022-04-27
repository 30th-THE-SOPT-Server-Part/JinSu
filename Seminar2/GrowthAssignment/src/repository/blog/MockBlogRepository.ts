import BlogRepository      from "./BlogRepository";
import { Inject, Service } from "typedi";
import BlogDataSource      from "../../datasource/blog/BlogDataSource";
import MockBlogDataSource  from "../../datasource/blog/MockBlogDataSource";
import Blog                from "../../model/blog/Blog";

@Service()
export default class MockBlogRepository implements BlogRepository {
    constructor(
        @Inject(type => MockBlogDataSource) private readonly blogDataSource: BlogDataSource
    ) {
    }

    async getBlog(): Promise<Blog> {
        return await this.blogDataSource.getMockBlog()
    }
};