export default function handler(req:any, res: any){
    const params = req.query.params;
    res.status(200).json(params);
}