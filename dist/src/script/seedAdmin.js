import { UserRole } from "../lib/auth.js";
import { prisma } from "../lib/prisma.js";
// import { UserRole } from "../lib/auth"
// import { prisma } from "../lib/prisma"
async function seedAdmin() {
    try {
        console.log("**********  start admin creation **********");
        const adminData = {
            name: "Hasan Ali",
            email: "admin@gmail.com",
            password: "Admin@123",
            role: UserRole.ADMIN
        };
        console.log("******** check if admin exit **********");
        const exitAdmin = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }
        });
        if (exitAdmin) {
            throw new Error("admin already created");
        }
        const signupAdmin = await fetch("http://localhost:5000/api/auth/sign-up/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: JSON.stringify(adminData)
        });
        const result = await signupAdmin.json();
        console.log(result);
        console.log("signup data", signupAdmin);
        if (signupAdmin.ok) {
            console.log("******* Successfully admin created! *********");
            const data = await prisma.user.update({
                where: {
                    email: adminData.email
                },
                data: {
                    emailVerified: true
                }
            });
            console.log("updated data -> ", data);
        }
        console.log("******** finished seeding process *******");
    }
    catch (error) {
        console.log(error);
    }
}
// seedAdmin()
//# sourceMappingURL=seedAdmin.js.map