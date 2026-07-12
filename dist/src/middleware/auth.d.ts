import { Request, Response, NextFunction } from "express";
export declare enum userRole {
    USER = "USER",
    PROVIDER = "PROVIDER",
    ADMIN = "ADMIN"
}
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                name: string;
                email: string;
                role: string;
                emailVerified: boolean;
            };
        }
    }
}
declare const auth: (...roles: userRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export default auth;
//# sourceMappingURL=auth.d.ts.map