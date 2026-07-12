interface createCategoryPayload {
    name: string;
}
export declare const categoryServices: {
    createCategory: (data: createCategoryPayload) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
    getAllCategory: () => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }[]>;
    deleteCategory: (id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    }>;
};
export {};
//# sourceMappingURL=category.services.d.ts.map