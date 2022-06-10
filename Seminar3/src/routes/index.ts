//router index file
import { Router } from 'express';
import BlogRouter from "./BlogRouter";
import UserRouter from "./UserRouter";

const router: Router = Router();

router.use('/user', UserRouter);
router.use('/blog', BlogRouter);
export default router;