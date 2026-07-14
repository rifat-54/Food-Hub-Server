import { toNodeHandler } from "better-auth/node";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

// import router from "./routes/index";
// import { notFound } from "./middleware/notFound";
// import errorHandler from "./middleware/errorHandler";
import { auth } from "./lib/auth.js";
import router from "./routes/index.js";
import { notFound } from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import { prisma } from "./lib/prisma.js";





const app = express();

app.use(express.json());

// app.use(
//   cors({
//     origin: [
//         process.env.APP_URL!
//     ],
//     credentials: true,
//   }),
// );


app.use(cors({
  origin: [process.env.APP_URL!,"http://localhost:3000"], // Your Next.js app URL
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
}));

// better auth

app.all("/api/auth/*splat", toNodeHandler(auth));

// app.all("/api/auth/*splat",async (req, res) => {
//   console.log("Cookie:", req.headers.cookie);

//   const session=await auth.api.getSession({
//     headers:req.headers as any
//   })

//     console.log("Better app Auth Session:", session);



//   return toNodeHandler(auth)(req, res);
// });



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
