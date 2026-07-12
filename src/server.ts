import "dotenv/config";
import app from "./app.js";
import { prisma } from "./lib/prisma.js";
// import app from "./app";
// import { prisma } from "./lib/prisma";

const port = process.env.PORT || 5000;

async function main() {
  try {
    await prisma.$connect();
    app.listen(port, () => {
      console.log(`server is running on port : ${port}`);
    });
  } catch (error) {
    console.error("An Error Occurred:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}


main();
