exports.Category = {
    products: ({ id }, { filter }, { products }) => {
        // category altından product'ları onSale=true olarak getirebilmek icin update edildi.
        const categoryProducts = products.filter((product) => product.categoryId === id)
        let filteredCategoryProducts = categoryProducts;

        if (filter) {
            if (filter.onSale === true) return filteredCategoryProducts.filter(product => product.onSale)
            if (avgRating) {
                //reviews.forEach(review => console.log(review.productId));
                filteredProducts = filteredProducts.filter(product => {
                    let sumRating = 0; 
                    let numberOfReviews = 0;
                    let avg = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id) {
                            sumRating += review.rating
                            numberOfReviews++
                        }
                    })
                    avg = sumRating/numberOfReviews
                    console.log(sumRating, numberOfReviews, avg, product.name);
                    return avg >= avgRating
                })
            }
        }

        return filteredCategoryProducts;
    }
};