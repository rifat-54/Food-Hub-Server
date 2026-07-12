import { Request,Response,NextFunction } from "express";

import { auth as betterAuth } from "../lib/auth.js";


export enum userRole{
    USER="USER",
    PROVIDER="PROVIDER",
    ADMIN="ADMIN"
}

declare global{
    namespace Express{
        interface Request{
            user?:{
                id:string,
                name:string,
                email:string,
                role:string,
                emailVerified:boolean
            }
        }
    }
}


const auth=(...roles:userRole[])=>{

    return async(req:Request,res:Response,next:NextFunction)=>{

       try {
         const session=await betterAuth.api.getSession({
            headers:req.headers
        })
        
        console.log("auth called", session)

        if(!session){
            return res.status(401).json({
                success:false,
                message:"Unauthorized"
            })
        }

        req.user={
            id:session.user.id,
            name:session.user.name,
            email:session.user.email,
            role:session.user.role as userRole,
            emailVerified:session.user.emailVerified
        }

        if(roles.length && !roles.includes(session.user.role as userRole)){
            return res.status(403).json({
                success:false,
                message:"Forbidden Access!"
            })
        }

        next()
       } catch (error) {
        next(error)
       }
    }
    


}


export default auth;