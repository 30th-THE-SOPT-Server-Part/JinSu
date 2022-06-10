import { Model } from "mongoose";
import BlogDAO   from "./BlogDAO";


const models: { name: string; instance: Model<any>}[] = [
    { name: 'BlogDAO', instance: BlogDAO}
]

export default models