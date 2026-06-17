import { toNodeHandler } from "better-auth/node"
import express from "express"
import cors from "cors"
import { auth } from "./lib/auth"


const app=express()

app.use(express.json())

// app.use(cors({
//     origin:process.env.APP_URL || "http://localhost:3000",
//     credentials:true
// }))


// better auth

console.log("console ")

app.all("/api/auth/*splat",toNodeHandler(auth))



// ! here will be all route

app.use("/api/v1")


// default route
app.get("/",(req,res)=>{
res.send("server is running")
})

export default app;