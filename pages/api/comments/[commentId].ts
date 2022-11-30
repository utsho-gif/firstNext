import { comments } from "../../../data/comments";

export default function handler(req: any, res: any){
    const {commentId} = req.query;
    if(req.method === "GET"){
        const comment = comments.find((comment:any) => comment?.id === parseInt(commentId));
        res.status(200).json(comment);
    }
    if(req.method === "DELETE"){
        const DeleteComment = comments.find((comment:any) => comment?.id === parseInt(commentId));
        const index = comments.findIndex((comment:any) => comment?.id === parseInt(commentId));
        comments.splice(index, 1);
        res.status(200).json(DeleteComment);
    }
}