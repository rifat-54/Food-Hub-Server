interface ReviewPayload {
    comment: string;
    rating: number;
    mealId: string;
}
export declare const reviewServices: {
    createReview: (data: ReviewPayload, id: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        mealId: string;
        rating: number;
        comment: string;
    }>;
};
export {};
//# sourceMappingURL=review.services.d.ts.map