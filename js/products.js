// ======================================================
// FARMCONNECT - PRODUCTS DATABASE
// ======================================================

// 30 DEMO PRODUCTS
// 10 Fruits + 10 Vegetables + 10 Grains

const demoProducts = [

    // =========================
    // FRUITS
    // =========================

    {
        id: "banana",
        name: "Banana",
        category: "fruits",
        price: 45,
        quantity: 100,
        farmer: "Ramesh Farm",
        location: "Davangere",
        distance: "1.2 km",
        option: "self",
        emoji: "🍌"
    },

    {
        id: "apple",
        name: "Apple",
        category: "fruits",
        price: 140,
        quantity: 80,
        farmer: "Shivu Farm",
        location: "Davangere",
        distance: "2.4 km",
        option: "delivery",
        emoji: "🍎"
    },

    {
        id: "orange",
        name: "Orange",
        category: "fruits",
        price: 80,
        quantity: 120,
        farmer: "Kumar Farm",
        location: "Davangere",
        distance: "3.1 km",
        option: "self",
        emoji: "🍊"
    },

    {
        id: "mango",
        name: "Mango",
        category: "fruits",
        price: 100,
        quantity: 90,
        farmer: "Manjunath Farm",
        location: "Davangere",
        distance: "1.8 km",
        option: "delivery",
        emoji: "🥭"
    },

    {
        id: "grapes",
        name: "Grapes",
        category: "fruits",
        price: 90,
        quantity: 70,
        farmer: "Basavaraj Farm",
        location: "Davangere",
        distance: "2.0 km",
        option: "self",
        emoji: "🍇"
    },

    {
        id: "guava",
        name: "Guava",
        category: "fruits",
        price: 60,
        quantity: 100,
        farmer: "Ravi Farm",
        location: "Davangere",
        distance: "1.5 km",
        option: "delivery",
        emoji: "🍐"
    },

    {
        id: "watermelon",
        name: "Watermelon",
        category: "fruits",
        price: 35,
        quantity: 150,
        farmer: "Anand Farm",
        location: "Davangere",
        distance: "2.7 km",
        option: "self",
        emoji: "🍉"
    },

    {
        id: "pineapple",
        name: "Pineapple",
        category: "fruits",
        price: 70,
        quantity: 60,
        farmer: "Mahesh Farm",
        location: "Davangere",
        distance: "3.5 km",
        option: "delivery",
        emoji: "🍍"
    },

    {
        id: "pomegranate",
        name: "Pomegranate",
        category: "fruits",
        price: 160,
        quantity: 50,
        farmer: "Suresh Farm",
        location: "Davangere",
        distance: "2.2 km",
        option: "self",
        emoji: "❤️"
    },

    {
        id: "papaya",
        name: "Papaya",
        category: "fruits",
        price: 50,
        quantity: 90,
        farmer: "Prakash Farm",
        location: "Davangere",
        distance: "1.9 km",
        option: "delivery",
        emoji: "🍈"
    },


    // =========================
    // VEGETABLES
    // =========================

    {
        id: "tomato",
        name: "Tomato",
        category: "vegetables",
        price: 35,
        quantity: 120,
        farmer: "Ramesh Farm",
        location: "Davangere",
        distance: "1.1 km",
        option: "self",
        emoji: "🍅"
    },

    {
        id: "potato",
        name: "Potato",
        category: "vegetables",
        price: 30,
        quantity: 150,
        farmer: "Shivu Farm",
        location: "Davangere",
        distance: "2.0 km",
        option: "delivery",
        emoji: "🥔"
    },

    {
        id: "onion",
        name: "Onion",
        category: "vegetables",
        price: 40,
        quantity: 130,
        farmer: "Kumar Farm",
        location: "Davangere",
        distance: "2.5 km",
        option: "self",
        emoji: "🧅"
    },

    {
        id: "carrot",
        name: "Carrot",
        category: "vegetables",
        price: 50,
        quantity: 80,
        farmer: "Anand Farm",
        location: "Davangere",
        distance: "1.7 km",
        option: "delivery",
        emoji: "🥕"
    },

    {
        id: "cabbage",
        name: "Cabbage",
        category: "vegetables",
        price: 30,
        quantity: 100,
        farmer: "Ravi Farm",
        location: "Davangere",
        distance: "2.2 km",
        option: "self",
        emoji: "🥬"
    },

    {
        id: "brinjal",
        name: "Brinjal",
        category: "vegetables",
        price: 45,
        quantity: 90,
        farmer: "Mahesh Farm",
        location: "Davangere",
        distance: "3.0 km",
        option: "delivery",
        emoji: "🍆"
    },

    {
        id: "beans",
        name: "Beans",
        category: "vegetables",
        price: 70,
        quantity: 70,
        farmer: "Suresh Farm",
        location: "Davangere",
        distance: "1.9 km",
        option: "self",
        emoji: "🫘"
    },

    {
        id: "capsicum",
        name: "Capsicum",
        category: "vegetables",
        price: 80,
        quantity: 60,
        farmer: "Prakash Farm",
        location: "Davangere",
        distance: "2.8 km",
        option: "delivery",
        emoji: "🫑"
    },

    {
        id: "spinach",
        name: "Spinach",
        category: "vegetables",
        price: 25,
        quantity: 80,
        farmer: "Basavaraj Farm",
        location: "Davangere",
        distance: "1.4 km",
        option: "self",
        emoji: "🌿"
    },

    {
        id: "cucumber",
        name: "Cucumber",
        category: "vegetables",
        price: 35,
        quantity: 100,
        farmer: "Manjunath Farm",
        location: "Davangere",
        distance: "2.3 km",
        option: "delivery",
        emoji: "🥒"
    },


    // =========================
    // GRAINS
    // =========================

    {
        id: "rice",
        name: "Rice",
        category: "grains",
        price: 60,
        quantity: 200,
        farmer: "Ramesh Farm",
        location: "Davangere",
        distance: "2.1 km",
        option: "self",
        emoji: "🍚"
    },

    {
        id: "wheat",
        name: "Wheat",
        category: "grains",
        price: 45,
        quantity: 180,
        farmer: "Shivu Farm",
        location: "Davangere",
        distance: "2.5 km",
        option: "delivery",
        emoji: "🌾"
    },

    {
        id: "ragi",
        name: "Ragi",
        category: "grains",
        price: 55,
        quantity: 150,
        farmer: "Kumar Farm",
        location: "Davangere",
        distance: "1.8 km",
        option: "self",
        emoji: "🌾"
    },

    {
        id: "jowar",
        name: "Jowar",
        category: "grains",
        price: 50,
        quantity: 160,
        farmer: "Anand Farm",
        location: "Davangere",
        distance: "3.2 km",
        option: "delivery",
        emoji: "🌾"
    },

    {
        id: "maize",
        name: "Maize",
        category: "grains",
        price: 35,
        quantity: 200,
        farmer: "Ravi Farm",
        location: "Davangere",
        distance: "2.7 km",
        option: "self",
        emoji: "🌽"
    },

    {
        id: "millet",
        name: "Millet",
        category: "grains",
        price: 65,
        quantity: 100,
        farmer: "Mahesh Farm",
        location: "Davangere",
        distance: "2.0 km",
        option: "delivery",
        emoji: "🌾"
    },

    {
        id: "bajra",
        name: "Bajra",
        category: "grains",
        price: 48,
        quantity: 120,
        farmer: "Suresh Farm",
        location: "Davangere",
        distance: "1.6 km",
        option: "self",
        emoji: "🌾"
    },

    {
        id: "corn",
        name: "Corn",
        category: "grains",
        price: 40,
        quantity: 150,
        farmer: "Prakash Farm",
        location: "Davangere",
        distance: "2.9 km",
        option: "delivery",
        emoji: "🌽"
    },

    {
        id: "barley",
        name: "Barley",
        category: "grains",
        price: 55,
        quantity: 100,
        farmer: "Basavaraj Farm",
        location: "Davangere",
        distance: "2.4 km",
        option: "self",
        emoji: "🌾"
    },

    {
        id: "green-gram",
        name: "Green Gram",
        category: "grains",
        price: 90,
        quantity: 90,
        farmer: "Manjunath Farm",
        location: "Davangere",
        distance: "1.9 km",
        option: "delivery",
        emoji: "🫘"
    }

];


// ======================================================
// FARMER PRODUCTS
// ======================================================

function getFarmerProducts() {

    try {

        const saved =
            localStorage.getItem("farmConnectProducts");

        if (!saved) {
            return [];
        }

        const products = JSON.parse(saved);

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
            "Unable to load farmer products:",
            error
        );

        return [];

    }

}


// ======================================================
// GET PRODUCTS BY CATEGORY
// ======================================================

function getProductsByCategory(category) {

    const demo =
        demoProducts.filter(function(product) {

            return product.category === category;

        });


    const farmer =
        getFarmerProducts().filter(function(product) {

            return product.category === category;

        });


    return demo.concat(farmer);

}


// ======================================================
// GET ALL PRODUCTS
// ======================================================

function getAllProducts() {

    return demoProducts.concat(
        getFarmerProducts()
    );

}


// ======================================================
// FIND PRODUCT
// ======================================================

function getProductById(id) {

    const products =
        getAllProducts();

    return products.find(function(product) {

        return String(product.id) === String(id);

    });

      }
