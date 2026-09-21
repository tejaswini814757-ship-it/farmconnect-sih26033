const order =
    JSON.parse(
        localStorage.getItem(
            "farmConnectOrder"
        )
    );



if (!order) {

    window.location.href =
        "customer.html";

}



document.getElementById(
    "orderId"
).innerText =
    order.orderId;



document.getElementById(
    "orderDate"
).innerText =
    order.date;



document.getElementById(
    "customerName"
).innerText =
    order.customerName;



document.getElementById(
    "customerPhone"
).innerText =
    order.customerPhone;



document.getElementById(
    "customerLocation"
).innerText =
    order.customerLocation;



const orderItems =
    document.getElementById(
        "orderItems"
    );


orderItems.innerHTML = "";


order.items.forEach(
    function(item) {


        const itemTotal =
            item.price *
            item.quantity;


        const div =
            document.createElement(
                "div"
            );


        div.className =
            "order-product";


        div.innerHTML = `

            <div class="order-product-icon">

                ${item.emoji}

            </div>


            <div class="order-product-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    🧑‍🌾 ${item.farmer}
                </p>

                <p>
                    📍 ${item.distance}
                </p>

                <p>
                    Quantity: ${item.quantity}
                </p>

            </div>


            <strong>
                ₹${itemTotal}
            </strong>

        `;


        orderItems.appendChild(
            div
        );

    }
);



document.getElementById(
    "orderTotal"
).innerText =
    "₹" + order.total;



const method =
    document.getElementById(
        "buyingMethod"
    );


if (
    order.buyingMethod ===
    "delivery"
) {

    method.innerText =
        "🔵 Delivery Available";

} else {

    method.innerText =
        "🟢 Self Buying / Pickup";

}
