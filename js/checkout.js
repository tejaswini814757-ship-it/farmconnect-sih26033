let cart =
    JSON.parse(
        localStorage.getItem(
            "farmConnectCart"
        )
    ) || [];



function displayCheckout() {

    const checkoutItems =
        document.getElementById(
            "checkoutItems"
        );

    const checkoutTotal =
        document.getElementById(
            "checkoutTotal"
        );


    checkoutItems.innerHTML = "";


    if (cart.length === 0) {

        checkoutItems.innerHTML =
            "<p>Your cart is empty.</p>";

        return;

    }


    let total = 0;


    cart.forEach(function(item) {

        const itemTotal =
            item.price *
            item.quantity;


        total += itemTotal;


        const div =
            document.createElement("div");


        div.className =
            "checkout-item";


        div.innerHTML = `

            <div class="checkout-item-image">
                ${item.emoji}
            </div>

            <div>

                <h3>
                    ${item.name}
                </h3>

                <p>
                    🧑‍🌾 ${item.farmer}
                </p>

                <p>
                    Quantity: ${item.quantity}
                </p>

            </div>

            <strong>
                ₹${itemTotal}
            </strong>

        `;


        checkoutItems.appendChild(div);

    });


    checkoutTotal.innerText =
        "₹" + total;

}



function placeOrder() {

    const name =
        document.getElementById(
            "customerName"
        ).value.trim();


    const phone =
        document.getElementById(
            "customerPhone"
        ).value.trim();


    const location =
        document.getElementById(
            "customerLocation"
        ).value.trim();


    const address =
        document.getElementById(
            "customerAddress"
        ).value.trim();


    const method =
        document.querySelector(
            'input[name="buyMethod"]:checked'
        ).value;


    const message =
        document.getElementById(
            "checkoutMessage"
        );


    if (cart.length === 0) {

        message.innerText =
            "❌ Your cart is empty.";

        return;

    }


    if (
        name === "" ||
        phone === "" ||
        location === ""
    ) {

        message.innerText =
            "⚠️ Please fill all required details.";

        return;

    }


    if (phone.length < 10) {

        message.innerText =
            "⚠️ Please enter a valid mobile number.";

        return;

    }


    const order = {

        orderId:
            "FC" +
            Date.now(),

        customerName:
            name,

        customerPhone:
            phone,

        customerLocation:
            location,

        customerAddress:
            address,

        buyingMethod:
            method,

        items:
            cart,

        total:
            cart.reduce(
                function(sum, item) {

                    return sum +
                        item.price *
                        item.quantity;

                },
                0
            ),

        date:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "farmConnectOrder",
        JSON.stringify(order)
    );


    /* CLEAR CART */

    localStorage.removeItem(
        "farmConnectCart"
    );


    /* OPEN SUCCESS PAGE */

    window.location.href =
        "order.html";

}


displayCheckout();
