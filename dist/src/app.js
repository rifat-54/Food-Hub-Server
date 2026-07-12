import { toNodeHandler } from "better-auth/node";
import express from "express";
import cors from "cors";
// import router from "./routes/index";
// import { notFound } from "./middleware/notFound";
// import errorHandler from "./middleware/errorHandler";
import { auth } from "./lib/auth.js";
import router from "./routes/index.js";
import { notFound } from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();
app.use(express.json());
app.use(cors({
    origin: [
        process.env.APP_URL,
        "http://localhost:3000"
    ],
    credentials: true,
}));
// better auth
app.all("/api/auth/*splat", toNodeHandler(auth));
// app.all("/api/auth/*splat", (req, res) => {
//   console.log("Cookie:", req.headers.cookie);
//   return toNodeHandler(auth)(req, res);
// });
// app.all("/api/auth/*splat",(req:Request,res:Response,next:NextFunction)=>{
//     console.log("auth:",req.method,req.path)
//      return toNodeHandler(auth)(req, res);
// })
// ! here will be all route
app.use("/api/v1", router);
// default route
app.get("/", (req, res) => {
    res.send("server is running");
});
// not found
app.use(notFound);
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map