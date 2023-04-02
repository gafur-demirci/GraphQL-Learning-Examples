export const Query = {
    hello: () => { return "Hello World!" },
    age: () => { return 28 },
    salary: () => { return 123456.123 },
    isLive: () => { return false },
    products: (parent, { filter }, { products }) => {
        let filteredProducts = products

        if (filter) {
            const { onSale, avgRating } = filter
            if (onSale) return filteredProducts.filter(product => product.onSale)
            if (avgRating) {
                //reviews.forEach(review => console.log(review.productId));
                filteredProducts = filteredProducts.filter(product => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    let avg = 0;
                    reviews.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating += review.rating
                            numberOfReviews++
                        }
                    })
                    avg = sumRating / numberOfReviews
                    console.log(sumRating, numberOfReviews, avg, product.name);
                    return avg >= avgRating
                })
            }
        };
        return filteredProducts;
    },
    product: (parent, { id }, { products }) => {

        let result = products.find((product) => product.id === id)
        return result;
    },
    categories: (parent, args, { categories }) => { return categories },
    category: (parent, { id }, { categories }) => {
        let category = categories.find((category) => category.id === id)
        return category;
    }
};