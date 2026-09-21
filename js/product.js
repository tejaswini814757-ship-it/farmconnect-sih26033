// ======================================================
// FARMCONNECT - PRODUCT DETAILS
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);

    const productId = params.get("product");

    const product = getProductById(productId);

    if (!product) {

        showProductError();

        return;
    }

    displayProduct(product);

});


// ======================================================
// DISPLAY PRODUCT
// ======================================================

function displayProduct(product) {

    const imageBox =
        document.getElementById("productImage");

    const name =
        document.getElementById("productName");

    const price =
        document.getElementById("productPrice");

    const farmer =
        document.getElementById("productFarmer");

    const location =
        document.getElementById("productLocation");

    const distance =
        document.getElementById("productDistance");

    const quantity =
        document.getElementById("availableQuantity");

    const option =
        document.getElementById("buyingOption");


    // PRODUCT NAME

    name.innerText =
        product.name;


    // PRICE

    price.innerText =
        "₹" + product.price + " / kg";


    // FARMER

    farmer.innerText =
        "👨‍🌾 " +
        (product.farmer || "Local Farmer");


    // LOCATION

    location.innerText =
        "📍 " +
        (product.location || "Davangere");


    // DISTANCE

    distance.innerText =
        "📏 " +
        (product.distance || "Distance unavailable");


    // QUANTITY

    quantity.innerText =
        "📦 Available: " +
        (product.quantity || 0) +
        " kg";


    // BUYING OPTION

    if (product.option === "delivery") {

        option.innerText =
            "🚚 Delivery Available";

    } else {

        option.innerText =
            "🛍️ Self Buying / Pickup";

    }


    // PRODUCT IMAGE

    if (product.image) {

        imageBox.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="showEmojiImage()"
            >
        `;

    } else {

        imageBox.innerHTML = `
            <div class="big-emoji">
                ${product.emoji || "🌾"}
            </div>
        `;

    }


    // SAVE CURRENT PRODUCT

    localStorage.setItem(
        "currentFarmConnectProduct",
        JSON.stringify(product)
    );

}


// ======================================================
// FALLBACK IMAGE
// ======================================================

function showEmojiImage() {

    const product =
        JSON.parse(
            localStorage.getItem(
                "currentFarmConnectProduct"
            )
        );

    const imageBox =
        document.getElementById("productImage");


    imageBox.innerHTML = `
        <div class="big-emoji">
            ${product?.emoji || "🌾"}
        </div>
    `;

}


// ======================================================
// QUANTITY CONTROL
// ======================================================

function increaseQuantity() {

    const input =
        document.getElementById("buyQuantity");

    const product =
        JSON.parse(
            localStorage.getItem(
                "currentFarmConnectProduct"
            )
        );


    let value =
        parseInt(input.value) || 1;


    const max =
        parseInt(product.quantity) || 999;


    if (value < max) {

        value++;

        input.value = value;

    }

}


function decreaseQuantity() {

    const input =
        document.getElementById("buyQuantity");


    let value =
        parseInt(input.value) || 1;


    if (value > 1) {

        value--;

        input.value = value;

    }

}


// ======================================================
// ADD TO CART
// ======================================================

function addToCart() {

    const product =
        JSON.parse(
            localStorage.getItem(
                "currentFarmConnectProduct"
            )
        );


    if (!product) {

        alert(
            "Product information not found."
        );

        return;

    }


    const quantityInput =
        document.getElementById(
            "buyQuantity"
        );


    let quantity =
        parseInt(quantityInput.value) || 1;


    const available =
        parseInt(product.quantity) || 999;


    if (quantity < 1) {

        alert(
            "Please select at least 1 kg."
        );

        return;

    }


    if (quantity > available) {

        alert(
            "Only " +
            available +
            " kg available."
        );

        return;

    }


    let cart =
        JSON.parse(
            localStorage.getItem(
                "farmConnectCart"
            )
        ) || [];


    const existingIndex =
        cart.findIndex(function(item) {

            return String(item.id) ===
                   String(product.id);

        });


    if (existingIndex !== -1) {

        const newQuantity =
            cart[existingIndex].quantity +
            quantity;


        if (newQuantity > available) {

            alert(
                "Maximum available quantity is " +
                available +
                " kg."
            );

            return;

        }


        cart[existingIndex].quantity =
            newQuantity;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: Number(product.price),

            quantity: quantity,

            farmer:
                product.farmer || "Local Farmer",

            location:
                product.location || "Davangere",

            distance:
                product.distance || "Distance unavailable",

            option:
                product.option || "self",

            emoji:
                product.emoji || "🌾",

            image:
                product.image || ""

        });

    }


    localStorage.setItem(
        "farmConnectCart",
        JSON.stringify(cart)
    );


    // SUCCESS MESSAGE

    alert(
        product.name +
        " added to your cart! 🛒"
    );


    // GO TO CART

    window.location.href =
        "cart.html";

}


// ======================================================
// BUY NOW
// ======================================================

function buyNow() {

    const product =
        JSON.parse(
            localStorage.getItem(
                "currentFarmConnectProduct"
            )
        );


    if (!product) {

        alert(
            "Product information not found."
        );

        return;

    }


    const quantityInput =
        document.getElementById(
            "buyQuantity"
        );


    let quantity =
        parseInt(quantityInput.value) || 1;


    const available =
        parseInt(product.quantity) || 999;


    if (quantity > available) {

        alert(
            "Only " +
            available +
            " kg available."
        );

        return;

    }


    const cartItem = {

        id: product.id,

        name: product.name,

        price: Number(product.price),

        quantity: quantity,

        farmer:
            product.farmer || "Local Farmer",

        location:
            product.location || "Davangere",

        distance:
            product.distance || "Distance unavailable",

        option:
            product.option || "self",

        emoji:
            product.emoji || "🌾",

        image:
            product.image || ""

    };


    localStorage.setItem(
        "farmConnectCart",
        JSON.stringify([
            cartItem
        ])
    );


    window.location.href =
        "checkout.html";

}


// ======================================================
// BACK TO MARKETPLACE
// ======================================================

function goBackToMarketplace() {

    window.location.href =
        "customer.html";

}


// ======================================================
// PRODUCT NOT FOUND
// ======================================================

function showProductError() {

    const container =
        document.querySelector(
            ".product-container"
        );


    if (container) {

        container.innerHTML = `

            <div
                style="
                    text-align:center;
                    padding:50px;
                "
            >

                <div
                    style="
                        font-size:60px;
                    "
                >
                    😔
                </div>

                <h2>
                    Product Not Found
                </h2>

                <p>
                    This product is no longer
                    available.
                </p>

                <button
                    onclick="
                        goBackToMarketplace()
                    "
                >
                    Back to Marketplace
                </button>

            </div>

        `;

    }

        }
