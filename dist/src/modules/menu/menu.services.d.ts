interface CreateMealPayload {
    name: string;
    description: string;
    price: number;
    image?: string;
    cuisine: string;
    dietaryType: string;
    categoryId: string;
}
export type UpdateMealPayload = {
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    cuisine?: string;
    dietaryType?: string;
    categoryId?: string;
};
type MealProps = {
    search?: string;
    category?: string;
    cuisine?: string;
    dietary?: string;
};
export declare const menuServices: {
    createMenu: (data: CreateMealPayload, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string | null;
        description: string;
        providerId: string;
        price: number;
        cuisine: string | null;
        dietaryType: string | null;
        categoryId: string;
    }>;
    getAllMenu: (payload: MealProps) => Promise<{
        id: string;
        name: string;
        image: string | null;
        description: string;
        provider: {
            user: {
                name: string;
            };
            id: string;
            image: string | null;
            address: string | null;
            restaurantName: string;
            description: string | null;
        };
        category: {
            id: string;
            name: string;
        };
        price: number;
        cuisine: string | null;
        dietaryType: string | null;
    }[]>;
    getMenuById: (id: string) => Promise<{
        id: string;
        name: string;
        image: string | null;
        description: string;
        provider: {
            user: {
                name: string;
                image: string | null;
            };
            image: string | null;
            address: string | null;
            restaurantName: string;
            description: string | null;
        };
        category: {
            name: string;
        };
        price: number;
        cuisine: string | null;
        dietaryType: string | null;
    }>;
    updateMenu: (data: UpdateMealPayload, menuId: string, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string | null;
        description: string;
        providerId: string;
        price: number;
        cuisine: string | null;
        dietaryType: string | null;
        categoryId: string;
    }>;
    deleteMenu: (menuId: string, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        image: string | null;
        description: string;
        providerId: string;
        price: number;
        cuisine: string | null;
        dietaryType: string | null;
        categoryId: string;
    }>;
};
export {};
//# sourceMappingURL=menu.services.d.ts.map