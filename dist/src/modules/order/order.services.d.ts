import { OrderStatus } from "../../../generated/prisma/enums.js";
type createOrderPayload = {
    deliveryAddress: string;
    items: {
        mealId: string;
        quantity: number;
    }[];
};
export declare const orderServices: {
    createOrder: (userId: string, data: createOrderPayload) => Promise<any>;
    getUserOrders: (id: string) => Promise<({
        user: {
            name: string;
            image: string | null;
        };
        orderItems: {
            meal: {
                id: string;
                name: string;
            };
            quantity: number;
            unitPrice: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        deliveryAddress: string;
        totalAmount: number;
    })[]>;
    getOrderDetails: (id: string) => Promise<{
        user: {
            name: string;
            image: string | null;
        };
        orderItems: {
            meal: {
                id: string;
                name: string;
            };
            quantity: number;
            unitPrice: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        deliveryAddress: string;
        totalAmount: number;
    }>;
    updateOrderStatus: (data: {
        status: OrderStatus;
    }, id: string, user: {
        role: string;
        id: string;
    }) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        deliveryAddress: string;
        totalAmount: number;
    }>;
    getProviderOrders: (providerUserId: string) => Promise<({
        user: {
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
        };
        _count: {
            orderItems: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: OrderStatus;
        userId: string;
        deliveryAddress: string;
        totalAmount: number;
    })[]>;
    getAllOrders: () => Promise<{
        user: {
            name: string;
        };
        id: string;
        createdAt: Date;
        status: OrderStatus;
        _count: {
            orderItems: number;
        };
        deliveryAddress: string;
        totalAmount: number;
    }[]>;
};
export {};
//# sourceMappingURL=order.services.d.ts.map