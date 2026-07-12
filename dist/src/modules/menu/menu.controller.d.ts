import { NextFunction, Request, Response } from "express";
export declare const menuController: {
    createMenu: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllMenu: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getMenuById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateMenu: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteMenu: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=menu.controller.d.ts.map