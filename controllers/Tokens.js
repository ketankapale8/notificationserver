// // import { User } from "../models/users.js";

export const getAllTokens = async (req , res) =>{
    try{
        const tokens = await req.body.tokens;
        console.log(tokens)
        // const tokens = allUsers.map(item=>item.token);
        res.status(200).json(tokens)

    }catch(err){
        console.log(err)
    }
   
}