// ===============================
// FARMCONNECT DEMO PRODUCTS
// ===============================

const demoProducts = [

    // ===============================
    // FRUITS
    // ===============================

    {
        id: "banana",
        name: "Banana",
        category: "fruits",
        price: 45,
        farmer: "Ramesh Farm",
        distance: "1.2 km away",
        option: "self",
        emoji: "🍌"
    },

    {
        id: "apple",
        name: "Apple",
        category: "fruits",
        price: 140,
        farmer: "Shivu Farm",
        distance: "2.4 km away",
        option: "delivery",
        emoji: "🍎"
    },

    {
        id: "orange",
        name: "Orange",
        category: "fruits",
        price: 80,
        farmer: "Kumar Farm",
        distance: "3.1 km away",
        option: "self",
        emoji: "🍊"
    },

    {
        id: "mango",
        name: "Mango",
        category: "fruits",
        price: 100,
        farmer: "Manjunath Farm",
        distance: "1.8 km away",
        option: "delivery",
        emoji: "🥭"
    },

    {
        id: "grapes",
        name: "Grapes",
        category: "fruits",
        price: 90,
        farmer: "Basavaraj Farm",
        distance: "2.0 km away",
        option: "self",
        emoji: "🍇"
    },

    {
        id: "guava",
        name: "Guava",
        category: "fruits",
        price: 60,
        farmer: "Ravi Farm",
        distance: "1.5 km away",
        option: "delivery",
        emoji: "🍐"
    },

    {
        id: "watermelon",
        name: "Watermelon",
        category: "fruits",
        price: 35,
        farmer: "Anand Farm",
        distance: "2.7 km away",
        option: "self",
        emoji: "🍉"
    },

    {
        id: "pineapple",
        name: "Pineapple",
        category: "fruits",
        price: 70,
        farmer: "Mahesh Farm",
        distance: "3.5 km away",
        option: "delivery",
        emoji: "🍍"
    },

    {
        id: "pomegranate",
        name: "Pomegranate",
        category: "fruits",
        price: 160,
        farmer: "Suresh Farm",
        distance: "2.2 km away",
        option: "self",
        emoji: "❤️"
    },

    {
        id: "papaya",
        name: "Papaya",
        category: "fruits",
        price: 50,
        farmer: "Prakash Farm",
        distance: "1.9 km away",
        option: "delivery",
        emoji: "🍈"
    },


    // ===============================
    // VEGETABLES
    // ===============================

    {
        id: "tomato",
        name: "Tomato",
        category: "vegetables",
        price: 35,
        farmer: "Ramesh Farm",
        distance: "1.1 km away",
        option: "self",
        emoji: "🍅"
    },

    {
        id: "potato",
        name: "Potato",
        category: "vegetables",
        price: 30,
        farmer: "Shivu Farm",
        distance: "2.0 km away",
        option: "delivery",
        emoji: "🥔"
    },

    {
        id: "onion",
        name: "Onion",
        category: "vegetables",
        price: 40,
        farmer: "Kumar Farm",
        distance: "2.5 km away",
        option: "self",
        emoji: "🧅"
    },

    {
        id: "carrot",
        name: "Carrot",
        category: "vegetables",
        price: 50,
        farmer: "Anand Farm",
        distance: "1.7 km away",
        option: "delivery",
        emoji: "🥕"
    },

    {
        id: "cabbage",
        name: "Cabbage",
        category: "vegetables",
        price: 30,
        farmer: "Ravi Farm",
        distance: "2.2 km away",
        option: "self",
        emoji: "🥬"
    },

    {
        id: "brinjal",
        name: "Brinjal",
        category: "vegetables",
        price: 45,
        farmer: "Mahesh Farm",
        distance: "3.0 km away",
        option: "delivery",
        emoji: "🍆"
    },

    {
        id: "beans",
        name: "Beans",
        category: "vegetables",
        price: 70,
        farmer: "Suresh Farm",
        distance: "1.9 km away",
        option: "self",
        emoji: "🫘"
    },

    {
        id: "capsicum",
        name: "Capsicum",
        category: "vegetables",
        price: 80,
        farmer: "Prakash Farm",
        distance: "2.8 km away",
        option: "delivery",
        emoji: "🫑"
    },

    {
        id: "spinach",
        name: "Spinach",
        category: "vegetables",
        price: 25,
        farmer: "Basavaraj Farm",
        distance: "1.4 km away",
        option: "self",
        emoji: "🌿"
    },

    {
        id: "cucumber",
        name: "Cucumber",
        category: "vegetables",
        price: 35,
        farmer: "Manjunath Farm",
        distance: "2.3 km away",
        option: "delivery",
        emoji: "🥒"
    },


    // ===============================
    // GRAINS
    // ===============================

    {
        id: "rice",
        name: "Rice",
        category: "grains",
        price: 60,
        farmer: "Ramesh Farm",
        distance: "2.1 km away",
        option: "self",
        emoji: "🍚"
    },

    {
        id: "wheat",
        name: "Wheat",
        category: "grains",
        price: 45,
        farmer: "Shivu Farm",
        distance: "2.5 km away",
        option: "delivery",
        emoji: "🌾"
    },

    {
        id: "ragi",
        name: "Ragi",
        category: "grains",
        price: 55,
        farmer: "Kumar Farm",
        distance: "1.8 km away",
        option: "self",
        emoji: "🌾"
    },

    {
        id: "jowar",
        name: "Jowar",
        category: "grains",
        price: 50,
        farmer: "Anand Farm",
        distance: "3.2 km away",
        option: "delivery",
        emoji: "🌾"
    },

    {
        id: "maize",
        name: "Maize",
        category: "grains",
        price: 35,
        farmer: "Ravi Farm",
        distance: "2.7 km away",
        option: "self",
        emoji: "🌽"
    },

    {
        id: "millet",
        name: "Millet",
        category: "grains",
        price: 65,
        farmer: "Mahesh Farm",
        distance: "2.0 km away",
        option: "delivery",
        emoji: "🌾"
    },

    {
        id: "bajra",
        name: "Bajra",
        category: "grains",
        price: 48,
        farmer: "Suresh Farm",
        distance: "1.6 km away",
        option: "self",
        emoji: "🌾"
    },

    {
        id: "corn",
        name: "Corn",
        category: "grains",
        price: 40,
        farmer: "Prakash Farm",
        distance: "2.9 km away",
        option: "delivery",
        emoji: "🌽"
    },

    {
        id: "barley",
        name: "Barley",
        category: "grains",
        price: 55,
        farmer: "Basavaraj Farm",
        distance: "2.4 km away",
        option: "self",
        emoji: "🌾"
    },

    {
        id: "green-gram",
        name: "Green Gram",
        category: "grains",
        price: 90,
        farmer: "Manjunath Farm",
        distance: "1.9 km away",
        option: "delivery",
        emoji: "🫘"
    }

];


// ======================================
// GET FARMER ADDED PRODUCTS
// ======================================

function getFarmerProducts() {

    try {

        const saved =
            localStorage.getItem("farmConnectProducts");

        if (!saved) {
            return [];
        }

        const products =
            JSON.parse(saved);

        if (!Array.isArray(products)) {
            return [];
        }

        return products.map(function(product) {

            return {
                ...product,
                farmerProduct: true
            };

        });

    } catch (error) {

        console.error(
            "Farmer products error:",
            error
        );

        return [];
    }
}


// ======================================
// GET PRODUCTS BY CATEGORY
// ======================================

function getProductsByCategory(category) {

    const demo =
        demoProducts.filter(function(product) {

            return product.category === category;

        });


    const farmerProducts =
        getFarmerProducts().filter(function(product) {

            return product.category === category;

        });


    return demo.concat(farmerProducts);
}


// ======================================
// GET ALL PRODUCTS
// ======================================

function getAllProducts() {

    return demoProducts.concat(
        getFarmerProducts()
    );
}


// ======================================
// FIND PRODUCT BY ID
// ======================================

function getProductById(id) {

    const allProducts =
        getAllProducts();

    return allProducts.find(function(product) {

        return String(product.id) === String(id);

    });

      }
