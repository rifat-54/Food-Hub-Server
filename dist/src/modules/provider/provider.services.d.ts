interface createProviderPayload {
    restaurantName: string;
    description?: string;
    address: string;
    image?: string;
}
export declare const providerServices: {
    createProvider: (data: createProviderPayload, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
        address: string | null;
        restaurantName: string;
        description: string | null;
        userId: string;
    }>;
    getAllProvider: () => Promise<{
        user: {
            name: string;
            image: string | null;
        };
        id: string;
        createdAt: Date;
        image: string | null;
        restaurantName: string;
        description: string | null;
    }[]>;
    getProviderById: (id: string) => Promise<{
        user: {
            name: string;
            image: string | null;
        };
        id: string;
        createdAt: Date;
        image: string | null;
        address: string | null;
        restaurantName: string;
        description: string | null;
        meals: {
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
        }[];
    }>;
    providerMeals: (id: string) => Promise<{
        user: {
            name: string;
            image: string | null;
        };
        id: string;
        createdAt: Date;
        image: string | null;
        address: string | null;
        restaurantName: string;
        description: string | null;
        meals: {
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
        }[];
    }>;
};
export {};
//# sourceMappingURL=provider.services.d.ts.map