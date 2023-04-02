export const Product = {
    category: ({ categoryId }, args, { categories }) => {

        let result = categories.find((category) => category.id === categoryId)
        return result;
    },
    reviews: ({ id }, args, { reviews }) => {
        return reviews.filter((review) => review.productId === id)
    }
};