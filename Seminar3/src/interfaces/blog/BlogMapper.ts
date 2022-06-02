import { UserInfo }      from "../user/UserInfo";
import { Blog }          from "./Blog";
import { BlogCreateDTO } from "./BlogCreateDTO";

export default class BlogMapper {
    static toDomain(user: UserInfo, blogCreateDTO: BlogCreateDTO): Blog {
        return <Blog>{
            title: blogCreateDTO.title,
            contents: blogCreateDTO.contents,
            user: user
        }
    }
};