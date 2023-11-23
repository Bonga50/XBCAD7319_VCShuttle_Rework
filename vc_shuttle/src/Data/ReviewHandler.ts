import { Reviews } from "../models/Reviews";

export class ReviewHandler {
    reviews: Reviews[];
    private static instance: ReviewHandler;

    constructor() {
        this.reviews = [
            {reviewId: 1, username: "Review 1", stars: 5 , shuttle: 5, description: "Great product!"},
            {reviewId: 2, username: "Review 2",stars: 3, shuttle: 4, description: "Good service."},
            {reviewId: 3, username: "Review 3", stars: 2, shuttle: 3, description: "Average experience."}]
        };

    public static getInstance(): ReviewHandler {
        if (!ReviewHandler.instance) {
            ReviewHandler.instance = new ReviewHandler();
        }

        return ReviewHandler.instance;
    }

    getReviews(): Reviews[] {
        return this.reviews;
    }

    getReviewByID(id: number): Reviews | undefined {
        return this.reviews.find((review) => review.reviewId === id);
    }
}