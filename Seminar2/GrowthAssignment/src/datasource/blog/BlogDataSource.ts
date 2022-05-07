import Blog from "../../model/blog/Blog";

export default interface BlogDataSource {
    getMockBlog(): Promise<Blog>
}