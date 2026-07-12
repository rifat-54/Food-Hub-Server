declare enum userStatus {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED"
}
type updatedStatus = {
    status: userStatus;
};
export declare const authServices: {
    getAllUser: () => Promise<{
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        emailVerified: boolean;
        name: string;
        image: string | null;
        role: import("../../../generated/prisma/enums.js").Role;
        phone: string | null;
        status: import("../../../generated/prisma/enums.js").UserStatus;
        address: string | null;
    }[]>;
    updateStatus: (data: updatedStatus, id: string) => Promise<{
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        emailVerified: boolean;
        name: string;
        image: string | null;
        role: import("../../../generated/prisma/enums.js").Role;
        phone: string | null;
        status: import("../../../generated/prisma/enums.js").UserStatus;
        address: string | null;
    }>;
    getuser: (id: string) => Promise<{
        email: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        emailVerified: boolean;
        name: string;
        image: string | null;
        role: import("../../../generated/prisma/enums.js").Role;
        phone: string | null;
        status: import("../../../generated/prisma/enums.js").UserStatus;
        address: string | null;
    }>;
};
export {};
//# sourceMappingURL=auth.services.d.ts.map