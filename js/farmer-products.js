let products =
    JSON.parse(
        localStorage.getItem(
            "farmConnectProducts"
        )
    ) || [];



function displayProducts() {

    const container =
        document.getElementById(
            "farmerProducts"
        );


    const noProducts =
        document.getElementById(
            "noProducts"
        );


    const productCount =
        document.getElementById(
            "productCount"
        );


    container.innerHTML = "";


    productCount.innerText =
        products.length +
        (
            products.length === 1
            ? " product"
            : " products"
        );



    if (products.length === 0) {

        noProducts.style.display =
            "block";

        return;

    }


    noProducts.style.display =
        "none";



    products.forEach(
        function(product, index) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "farmer-product-card";


            card.innerHTML = `

                <div class="farmer-product-image">

                    ${product.emoji}

                </div>


                <div class="farmer-product-content">

                    <div class="product-category">

                        ${
                            product.category
                            .toUpperCase()
                        }

                    </div>


                    <h3>
                        ${product.name}
                    </h3>


                    <p>
                        👨‍🌾 ${product.farmer}
                    </p>


                    <p>
                        📍 ${product.location}
                    </p>


                    <div class="farmer-product-price">

                        ₹${product.price}

                        <span>
                            / kg
                        </span>

                    </div>


                    <p>
                        Available:
                        <strong>
                            ${product.quantity} kg
                        </strong>
                    </p>


                    <div class="farmer-product-bottom">

                        <span class="${
                            product.option === "delivery"
                            ? "delivery"
                            : "self-buy"
                        }">

                            ${
                                product.option === "delivery"
                                ? "🔵 Delivery Available"
                                : "🟢 Self Buying"
                            }

                        </span>


                        <button
                            class="delete-product-btn"
                            onclick="deleteProduct(${index})"
                        >
                            🗑 Delete
                        </button>

                    </div>

                </div>

            `;


            container.appendChild(
                card
            );

        }
    );

}



/* DELETE */

function deleteProduct(index) {

    const product =
        products[index];


    const confirmDelete =
        confirm(
            "Delete " +
            product.name +
            "?"
        );


    if (!confirmDelete) {

        return;

    }


    products.splice(
        index,
        1
    );


    localStorage.setItem(
        "farmConnectProducts",
        JSON.stringify(products)
    );


    displayProducts();

}


displayProducts();
