import { Router }        from "express";
import { Container }     from "typedi";
import BlogController    from "../controllers/BlogController";
import { BlogCreateDTO } from "../interfaces/blog/BlogCreateDTO";
import { validateBody }  from "../middlewares/ValidateBody";
import BlogService       from "../services/BlogService";

const router: Router = Router();
const blogService = Container.get(BlogService)
const blogController = new BlogController(blogService)

router.post('/', validateBody(BlogCreateDTO), blogController.createBlog);
// router.put('/:blogId', UserController.updateUser);
// router.get('/:blogId', UserController.findUserById);
// router.delete('/:blogId', UserController.deleteUser);

export default router;