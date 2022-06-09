import { Inject, Service }       from "typedi";
import { Logger }                from "winston";
import { BlogCreateDTO }         from "../interfaces/blog/BlogCreateDTO";
import { BlogCreateResponseDTO } from "../interfaces/blog/BlogCreateResponseDTO";
import BlogMapper                from "../interfaces/blog/BlogMapper";
import { UserInfo }              from "../interfaces/user/UserInfo";
import BlogDAO                   from "../models/BlogDAO";
import User                      from "../models/User";

@Service()
export default class BlogService {
    private blogDAO = BlogDAO

    constructor(
        //@Inject("BlogDAO") private blogDAO: Model<Blog & Document>
        @Inject("Logger") private logger: Logger
    ) {
    }

    async createBlog(blogCreateDTO: BlogCreateDTO) {
        try {
            const postedUser: UserInfo | null = await this.findPostedUserById(blogCreateDTO.userId);
            if (!postedUser) {
                return null;
            }
            const blog = await this.blogDAO.create(BlogMapper.toDomain(postedUser, blogCreateDTO));
            return <BlogCreateResponseDTO>{
                id: blog.id
            }
        } catch (error) {
            throw error;
        }
    }

    private findPostedUserById = async (userId: string): Promise<UserInfo | null> => {
        try {
            const user = await User.findById(userId);
            if (!user) {
                return null;
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    /*async findBlogById(blogId: ) {
    }*/
};