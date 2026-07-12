import { prisma } from "../../lib/prisma.js";
const getAllUser = async () => {
    const result = await prisma.user.findMany({
        orderBy: {
            createdAt: "desc"
        }
    });
    return result;
};
var userStatus;
(function (userStatus) {
    userStatus["ACTIVE"] = "ACTIVE";
    userStatus["SUSPENDED"] = "SUSPENDED";
})(userStatus || (userStatus = {}));
const updateStatus = async (data, id) => {
    console.log(data);
    const user = await prisma.user.findFirstOrThrow({
        where: {
            id
        }
    });
    if (user.status === data.status) {
        throw new Error("Status Already Updated!");
    }
    const result = await prisma.user.update({
        where: {
            id
        },
        data
    });
    return result;
};
const getuser = async (id) => {
    const result = await prisma.user.findUniqueOrThrow({
        where: {
            id
        }
    });
    return result;
};
export const authServices = {
    getAllUser,
    updateStatus,
    getuser
};
//# sourceMappingURL=auth.services.js.map