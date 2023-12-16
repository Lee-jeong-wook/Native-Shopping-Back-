import { Request, Response} from "express"; 

const output = {
    home: (req: Request, res: Response) => {
        res.send("")
    },
}

const post = {
    home: async (req: Request, res: Response) =>{

    }
}

module.exports= {
    output,
    post
};