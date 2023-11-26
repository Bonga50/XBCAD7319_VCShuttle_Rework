import { Reviews } from "../models/Reviews";

export class ReviewHandler {
    private static instance: ReviewHandler;
    private reviews: Reviews[] = [];
    private isFetching: boolean = false;

    private constructor() {
        // Private constructor to enforce singleton pattern
    }

    public static getInstance(): ReviewHandler {
        if (!ReviewHandler.instance) {
            ReviewHandler.instance = new ReviewHandler();
        }

        return ReviewHandler.instance;
    }

    private async fetchReviewsFromBackend(): Promise<void> {
        try {
            const response = await fetch('https://localhost:3000/api/reviewsRoute/getReviews');
            const data = await response.json();

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            this.reviews = data;
        } catch (error) {
            console.error("Error fetching reviews from backend:", error);
            throw error;
        } finally {
            this.isFetching = false;
        }
    }

    async getReviews(): Promise<Reviews[]> {
        if (this.isFetching) {
            // Another fetch is in progress, wait for it to complete
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        if (this.reviews.length === 0) {
            this.isFetching = true;
            await this.fetchReviewsFromBackend();
        }

        return this.reviews;
    }

    async getReviewByID(id: number): Promise<Reviews | undefined> {
        const reviews = await this.getReviews();
        return reviews.find((review) => review.reviewId === id);
    }

    async getReviewByUsername(searchTerm: string): Promise<Reviews[]> {
        const reviews = await this.getReviews();
        return reviews.filter(review => review.username.toLowerCase().includes(searchTerm.toLowerCase()));
    }
}
