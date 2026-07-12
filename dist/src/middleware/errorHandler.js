import { Prisma } from "../../generated/prisma/client.js";
function errorHandler(err, req, res, next) {
    let statusCode = 500;
    let errorMessage = "Internal Server Error";
    let errorDetails = err;
    if (err instanceof Error) {
        errorMessage = err.message;
    }
    if (err instanceof Prisma.PrismaClientValidationError) {
        statusCode = 400;
        errorMessage = "You provided incorrect type or missing fields";
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
            errorMessage = "Missing or invalid fields";
        }
    }
    res.status(statusCode).json({
        message: errorMessage,
        error: errorDetails,
    });
}
export default errorHandler;
//# sourceMappingURL=errorHandler.js.map