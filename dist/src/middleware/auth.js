import { auth as betterAuth } from "../lib/auth.js";
export var userRole;
(function (userRole) {
    userRole["USER"] = "USER";
    userRole["PROVIDER"] = "PROVIDER";
    userRole["ADMIN"] = "ADMIN";
})(userRole || (userRole = {}));
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const session = await betterAuth.api.getSession({
                headers: req.headers
            });
            console.log("auth called", session);
            if (!session) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                });
            }
            req.user = {
                id: session.user.id,
                name: session.user.name,
                email: session.user.email,
                role: session.user.role,
                emailVerified: session.user.emailVerified
            };
            if (roles.length && !roles.includes(session.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden Access!"
                });
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
export default auth;
//# sourceMappingURL=auth.js.map