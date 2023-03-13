const { categories } = require('../data');

exports.Product = {
    category: (parent, args, context) => {

        let result = categories.find((category) => category.id === parent.categoryId)
        return result;
    }
};