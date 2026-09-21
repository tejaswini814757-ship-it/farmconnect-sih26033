// FarmConnect - Shared Product Data

const demoProducts = {

    fruits: [
        {
            id: "banana",
            name: "Banana",
            price: 45,
            farmer: "Ramesh Farm",
            distance: "1.2 km away",
            option: "self",
            emoji: "🍌"
        },
        {
            id: "apple",
            name: "Apple",
            price: 140,
            farmer: "Shivu Farm",
            distance: "2.4 km away",
            option: "delivery",
            emoji: "🍎"
        },
        {
            id: "orange",
            name: "Orange",
            price: 80,
            farmer: "Kumar Farm",
            distance: "3.1 km away",
            option: "self",
            emoji: "🍊"
        },
        {
            id: "mango",
            name: "Mango",
            price: 100,
            farmer: "Manjunath Farm",
            distance: "1.8 km away",
            option: "delivery",
            emoji: "🥭"
        },
        {
            id: "grapes",
            name: "Grapes",
            price: 90,
            farmer: "Basavaraj Farm",
            distance: "2.0 km away",
            option: "self",
            emoji: "🍇"
        },
        {
            id: "guava",
            name: "Guava",
            price: 60,
            farmer: "Ravi Farm",
            distance: "1.5 km away",
            option: "delivery",
            emoji: "🍐"
        },
        {
            id: "watermelon",
            name: "Watermelon",
            price: 35,
            farmer: "Anand Farm",
            distance: "2.7 km away",
            option: "self",
            emoji: "🍉"
        },
        {
            id: "pineapple",
            name: "Pineapple",
            price: 70,
            farmer: "Mahesh Farm",
            distance: "3.5 km away",
            option: "delivery",
            emoji: "🍍"
        },
        {
            id: "pomegranate",
            name: "Pomegranate",
            price: 160,
            farmer: "Suresh Farm",
            distance: "2.2 km away",
            option: "self",
            emoji: "❤️"
        },
        {
            id: "papaya",
            name: "Papaya",
            price: 50,
            farmer: "Prakash Farm",
            distance: "1.9 km away",
            option: "delivery",
            emoji: "🍈"
        }
    ],

    vegetables: [
        {
            id: "tomato",
            name: "Tomato",
            price: 35,
            farmer: "Ramesh Farm",
            distance: "1.1 km away",
            option: "self",
            emoji: "🍅"
        },
        {
            id: "potato",
            name: "Potato",
            price: 30,
            farmer: "Shivu Farm",
            distance: "2.0 km away",
            option: "delivery",
            emoji: "🥔"
        },
        {
            id: "onion",
            name: "Onion",
            price: 40,
            farmer: "Kumar Farm",
            distance: "2.5 km away",
            option: "self",
            emoji: "🧅"
        },
        {
            id: "carrot",
            name: "Carrot",
            price: 50,
            farmer: "Anand Farm",
            distance: "1.7 km away",
            option: "delivery",
            emoji: "🥕"
        },
        {
            id: "cabbage",
            name: "Cabbage",
            price: 30,
            farmer: "Ravi Farm",
            distance: "2.2 km away",
            option: "self",
            emoji: "🥬"
        },
        {
            id: "brinjal",
            name: "Brinjal",
            price: 45,
            farmer: "Mahesh Farm",
            distance: "3.0 km away",
            option: "delivery",
            emoji: "🍆"
        },
        {
            id: "beans",
            name: "Beans",
            price: 70,
            farmer: "Suresh Farm",
            distance: "1.9 km away",
            option: "self",
            emoji: "🫘"
        },
        {
            id: "capsicum",
            name: "Capsicum",
            price: 80,
            farmer: "Prakash Farm",
            distance: "2.8 km away",
            option: "delivery",
            emoji: "🫑"
        },
        {
            id: "spinach",
            name: "Spinach",
            price: 25,
            farmer: "Basavaraj Farm",
            distance: "1.4 km away",
            option: "self",
            emoji: "🌿"
        },
        {
            id: "cucumber",
            name: "Cucumber",
            price: 35,
            farmer: "Manjunath Farm",
            distance: "2.3 km away",
            option: "delivery",
            emoji: "🥒"
        }
    ],

    grains: [
        {
            id: "rice",
            name: "Rice",
            price: 60,
            farmer: "Ramesh Farm",
            distance: "2.1 km away",
            option: "self",
            emoji: "🍚"
        },
        {
            id: "wheat",
            name: "Wheat",
            price: 45,
            farmer: "Shivu Farm",
            distance: "2.5 km away",
            option: "delivery",
            emoji: "🌾"
        },
        {
            id: "ragi",
            name: "Ragi",
            price: 55,
            farmer: "Kumar Farm",
            distance: "1.8 km away",
            option: "self",
            emoji: "🌾"
        },
        {
            id: "jowar",
            name: "Jowar",
            price: 50,
            farmer: "Anand Farm",
            distance: "3.2 km away",
            option: "delivery",
            emoji: "🌾"
        },
        {
            id: "maize",
            name: "Maize",
            price: 35,
            farmer: "Ravi Farm",
            distance: "2.7 km away",
            option: "self",
            emoji: "🌽"
        },
        {
            id: "millet",
            name: "Millet",
            price: 65,
            farmer: "Mahesh Farm",
            distance: "2.0 km away",
            option: "delivery",
            emoji: "🌾"
        },
        {
            id: "bajra",
            name: "Bajra",
            price: 48,
            farmer: "Suresh Farm",
            distance: "1.6 km away",
            option: "self",
            emoji: "🌾"
        },
        {
            id: "corn",
            name: "Corn",
            price: 40,
            farmer: "Prakash Farm",
            distance: "2.9 km away",
            option: "delivery",
            emoji: "🌽"
        },
        {
            id: "barley",
            name: "Barley",
            price: 55,
            farmer: "Basavaraj Farm",
            distance: "2.4 km away",
            option: "self",
            emoji: "🌾"
        },
        {
            id: "green_gram",
            name: "Green Gram",
            price: 90,
            farmer: "Manjunath Farm",
            distance: "1.9 km away",
            option: "delivery",
            emoji: "🫘"
        }
    ]
};


// Farmer-added products from localStorage
function getFarmerProducts() {

    const products =
        JSON.parse(localStorage.getItem("farmConnectProducts")) || [];

    return products;
}


// Get all products for a category
function getProductsByCategory(category) {

    const demo = demoProducts[category] || [];

    const farmerProducts = getFarmerProducts()
        .filter(product =>
            product.category.toLowerCase() === category.toLowerCase()
        )
        .map(product => ({
            ...product,
            farmerProduct: true
        }));

    return [...demo, ...farmerProducts];
          }
