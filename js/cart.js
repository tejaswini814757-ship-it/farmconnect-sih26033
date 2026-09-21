/* GET CART */

let cart =
    JSON.parse(
        localStorage.getItem("farmConnectCart")
    ) || [];



/* SAVE CART */

function saveCart() {

    localStorage.setItem(
        "farmConnectCart",
        JSON.stringify(cart)
    );

}



/* DISPLAY CART */

function displayCart() {

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    const emptyCart =
        document.getElementById(
            "emptyCart"
        );

    const cartSummary =
        document.getElementById(
            "cartSummary"
        );


    cartItems.innerHTML = "";


    /* EMPTY */

    if (cart.length === 0) {

        emptyCart.style.display =
            "block";

        cartSummary.style.display =
            "none";

        return;

    }


    emptyCart.style.display =
        "none";

    cartSummary.style.display =
        "block";



    let subtotal = 0;

    let totalItems = 0;



    /* CREATE CART ITEMS */

    cart.forEach(
        function(item, index) {


            const itemTotal =
                item.price *
                item.quantity;


            subtotal += itemTotal;

            totalItems +=
                item.quantity;



            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.className =
                "cart-item";



            cartItem.innerHTML = `

                <div class="cart-product-image">
                    ${item.emoji}
                </div>


                <div class="cart-product-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        🧑‍🌾 ${item.farmer}
                    </p>

                    <p>
                        📍 ${item.distance}
                    </p>

                    <span class="${
                        item.option === "delivery"
                        ? "delivery"
                        : "self-buy"
                    }">

                        ${
                            item.option === "delivery"
                            ? "🔵 Delivery Available"
                            : "🟢 Self Buying"
                        }

                    </span>

                </div>



                <div class="cart-price">

                    <strong>
                        ₹${item.price} / kg
                    </strong>


                    <div class="cart-quantity">

                        <button
                            onclick="changeQuantity(${index}, -1)"
                        >
                            −
                        </button>


                        <span>
                            ${item.quantity}
                        </span>


                        <button
                            onclick="changeQuantity(${index}, 1)"
                        >
                            +
                        </button>

                    </div>


                    <strong>
                        ₹${itemTotal}
                    </strong>


                    <button
                        class="remove-btn"
                        onclick="removeItem(${index})"
                    >
                        Remove
                    </button>

                </div>

            `;


            cartItems.appendChild(
                cartItem
            );

        }
    );



    /* UPDATE SUMMARY */

    document.getElementById(
        "subtotal"
    ).innerText =
        "₹" + subtotal;


    document.getElementById(
        "itemCount"
    ).innerText =
        totalItems;


    document.getElementById(
        "grandTotal"
    ).innerText =
        "₹" + subtotal;

}



/* CHANGE QUANTITY */

function changeQuantity(
    index,
    change
) {

    cart[index].quantity +=
        change;


    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(index, 1);

    }


    saveCart();

    displayCart();

}



/* REMOVE ITEM */

function removeItem(index) {

    cart.splice(
        index,
        1
    );

    saveCart();

    displayCart();

}



/* CHECKOUT */

function proceedToCheckout() {

    if (cart.length === 0) {

        return;

    }


    window.location.href =
        "checkout.html";

}



/* LOAD */

displayCart();
