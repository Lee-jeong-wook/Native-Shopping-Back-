import { Request, Response} from "express"; 
import Item from "../../model/Item";
import User from "../../interfaces/UserInterfsaces";
const post = {
    //쇼핑 상품에 대한 처리
    home: async (req: Request, res: Response) =>{

    },
    item: async (req: Request, res: Response) => {
        const { id } = req.query;
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
    post
};