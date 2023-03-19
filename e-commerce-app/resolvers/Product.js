exports.Product = {
    category: ({ categoryId }, args, { categories }) => {

        let result = categories.find((category) => category.id === categoryId)
        return result;
    }
};