import mongoose                  from "mongoose";
import { Service }               from "typedi";
import { BlogCreateDTO }         from "../interfaces/blog/BlogCreateDTO";
import { BlogCreateResponseDTO } from "../interfaces/blog/BlogCreateResponseDTO";
import BlogMapper                from "../interfaces/blog/BlogMapper";
import { UserInfo }              from "../interfaces/user/UserInfo";
import BlogDAO                   from "../models/BlogDAO";
import User                      from "../models/User";

@Service()
export default class BlogService {
    constructor() {
    }

    async createBlog(blogCreateDTO: BlogCreateDTO) {
        try {
            const postedUser: UserInfo | null = await this.findPostedUserById(blogCreateDTO.userId);
            if (!postedUser) {
                return null;
            }
            const blog = new BlogDAO(BlogMapper.toDomain(postedUser, blogCreateDTO));
            await blog.save();
            return <BlogCreateResponseDTO>{
                id: blog.id
            }
        } catch (error) {
            throw error;
        }
    }

    private findPostedUserById = async (userId: mongoose.Types.ObjectId): Promise<UserInfo | null> => {
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
};