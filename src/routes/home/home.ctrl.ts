import { Request, Response} from "express"; 
import Item from "../../model/Item";
import User from "../../interfaces/UserInterfsaces";

const output = {
    home: async (req:Request, res: Response) => {
        console.log("hi");
        res.send("어쨋건 됐죠");
    }
}

const post = {
    //쇼핑 상품에 대한 처리
    item: async (req: Request, res: Response) => {
        const { id } = req.query;
        console.log(id);
    },
    basket: async (req: Request, res: Response) => {
        const { id, userID } = req.query;
    },
    like: async (req: Request, res: Response) => {
        const { id } = req.query;
    },
    //user에 대한 처리
    signIn: async (req: Request, res: Response) => {
        const {userID, password } = req.body;
    },
    logIn: async (req: Request, res: Response) => {
        const {userID, password } = req.body;
    },
}

module.exports= {
    output,
    post
};