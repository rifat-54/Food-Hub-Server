import { toNodeHandler } from "better-auth/node"
import express from "express"
import cors from "cors"
import { auth } from "./lib/auth"
import router from "./routes"
import { notFound } from "./middleware/notFound"
import errorHandler from "./middleware/errorHandler"
import { test } from "./middleware/test"


const app=express()

app.use(express.json())

app.use(cors({
    origin:process.env.APP_URL || "http://localhost:3000",
    credentials:true
}))


// better auth
app.all("/api/auth/*splat",toNodeHandler(auth))



// ! here will be all route
app.use("/api/v1",router)



// default route
app.get("/",(req,res)=>{
res.send("server is running")
})


// not found

app.use(notFound)
app.use(errorHandler)




export default app;