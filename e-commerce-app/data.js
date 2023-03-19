// Scaler Types : String, Int, Float, Boolean

const products = [
    {
        id: "1",
        name: "Black Shoe",
        description: "New Black Shoes",
        quantity: 5,
        price: 100.50,
        onSale: true,
        categoryId: '1'
    },
    {
        id: "2",
        name: "White Shoe",
        description: "New White Shoes",
        quantity: 6,
        price: 110.50,
        onSale: false,
        categoryId: '2'
    },
    {
        id: "3",
        name: "Red Shoe",
        description: "New Red Shoes",
        quantity: 7,
        price: 120.50,
        onSale: true,
        categoryId: '3'
    },
    {
        id: "4",
        name: "Dark Red Shoe",
        description: "New Dark Red Shoes",
        quantity: 7,
        price: 120.50,
        onSale: true,
        categoryId: '3'
    }
];

const categories = [
    {
        id: "1",
        name: "Men"
    },
    {
        id: "2",
        name: "Women"
    },
    {
        id: "3",
        name: "Child"
    }
];

const reviews = [
    {

        id: "1",
        date: "2020-12-10",
        title: "This is good",
        comment: "One of the most decent pots",
        rating: 3,
        productId: "1"

    },
    {

        id: "2",
        date: "2021-12-10",
        title: "This is not bad",
        comment: "One of many decent pots",
        rating: 2,
        productId: "2"

    },
    {

        id: "3",
        date: "2022-12-10",
        title: "This is not bad",
        comment: "One of many decent pots",
        rating: 2,
        productId: "3"

    },
    {

        id: "4",
        date: "2019-12-10",
        title: "This is bad",
        comment: "One of the most decent pots",
        rating: 1,
        productId: "4"

    },
];

module.exports = {
    products,
    categories,
    reviews
};