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
    emoji: "🍌",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e"
},

{
    id: "apple",
    name: "Apple",
    price: 140,
    farmer: "Shivu Farm",
    distance: "2.4 km away",
    option: "delivery",
    emoji: "🍎",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6"
},

{
    id: "orange",
    name: "Orange",
    price: 80,
    farmer: "Kumar Farm",
    distance: "3.1 km away",
    option: "self",
    emoji: "🍊",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e"
},

{
    id: "mango",
    name: "Mango",
    price: 100,
    farmer: "Manjunath Farm",
    distance: "1.8 km away",
    option: "delivery",
    emoji: "🥭",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078"
},

{
    id: "grapes",
    name: "Grapes",
    price: 90,
    farmer: "Basavaraj Farm",
    distance: "2.0 km away",
    option: "self",
    emoji: "🍇",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f"
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

function getProductDistance(product) {

    const customerLatitude =
        parseFloat(
            localStorage.getItem("customerLatitude")
        );

    const customerLongitude =
        parseFloat(
            localStorage.getItem("customerLongitude")
        );


    const farmerLatitude =
        parseFloat(product.latitude);

    const farmerLongitude =
        parseFloat(product.longitude);


    if (
        isNaN(customerLatitude) ||
        isNaN(customerLongitude) ||
        isNaN(farmerLatitude) ||
        isNaN(farmerLongitude)
    ) {

        return product.distance || "Distance unavailable";

    }


    const distance =
        calculateDistance(
            customerLatitude,
            customerLongitude,
            farmerLatitude,
            farmerLongitude
        );


    if (distance < 1) {

        return Math.round(distance * 1000) + " m away";

    }


    return distance.toFixed(1) + " km away";

}
