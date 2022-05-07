import { Inject, Service } from "typedi";
import MockBlogRepository  from "../../repository/blog/MockBlogRepository";
import BlogRepository      from "../../repository/blog/BlogRepository";
import Blog                from "../../model/blog/Blog";

@Service()
export default class BlogService {
    constructor(
        @Inject(type => MockBlogRepository) private readonly blogRepository: BlogRepository
    ) {
    }

    async getBlog(): Promise<Blog> {
        return await this.blogRepository.getBlog()
    }
};