import { match } from "assert";
import { comments } from "../../../data/comments";

export default function handler(req: any, res: any){
    if(req.method === "GET"){
        res.status(200).json(comments)
    }
    if(req.method === "POST"){
        const comment = req.body.comment;
        const newComment = {
            id: Date.now(),
            text: comment
        }
        comments.push(newComment);
        res.status(200).json(newComment)
    }
}