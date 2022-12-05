import { getSession } from "next-auth/react"

const handler = async (req: any, res: any) => {
    const session = await getSession({ req });
    if(!session){
        res.status(401).json({error: 'Unauthorized access'})
    }else{
        res.status(200).json({message: 'Success', session})
    }
}

export default handler;