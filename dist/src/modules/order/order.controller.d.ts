import { Request, Response, NextFunction } from "express";
export declare const orderController: {
    createOrder: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUserOrders: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getOrderDetails: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateOrderStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProviderOrders: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllOrders: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=order.controller.d.ts.map