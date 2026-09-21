/* SAVE PRODUCT */

function saveProduct() {


    const farmerName =
        document.getElementById(
            "farmerName"
        ).value.trim();


    const productName =
        document.getElementById(
            "productName"
        ).value.trim();


    const category =
        document.getElementById(
            "productCategory"
        ).value;


    const price =
        Number(
            document.getElementById(
                "productPrice"
            ).value
        );


    const quantity =
        Number(
            document.getElementById(
                "productQuantity"
            ).value
        );


    const location =
        document.getElementById(
            "productLocation"
        ).value.trim();


    const option =
        document.querySelector(
            'input[name="buyingOption"]:checked'
        ).value;


    const message =
        document.getElementById(
            "productMessage"
        );



    /* VALIDATION */

    if (
        farmerName === "" ||
        productName === "" ||
        category === "" ||
        price <= 0 ||
        quantity <= 0 ||
        location === ""
    ) {

        message.innerText =
            "⚠️ Please fill all required fields.";

        return;

    }



    /* GET OLD PRODUCTS */

    let products =
        JSON.parse(
            localStorage.getItem(
                "farmConnectProducts"
            )
        ) || [];



    /* CREATE PRODUCT */

    const product = {

        id:
            "P" +
            Date.now(),

        farmer:
            farmerName,

        name:
            productName,

        category:
            category,

        price:
            price,

        quantity:
            quantity,

        location:
            location,

        option:
            option,

        emoji:
            getCategoryEmoji(
                category
            ),

        date:
            new Date().toLocaleString()

    };



    /* ADD PRODUCT */

    products.push(product);



    /* SAVE */

    localStorage.setItem(
        "farmConnectProducts",
        JSON.stringify(products)
    );



    message.style.color =
        "#16803c";

    message.innerText =
        "✅ Product listed successfully!";



    /* CLEAR FORM */

    document.getElementById(
        "farmerName"
    ).value = "";


    document.getElementById(
        "productName"
    ).value = "";


    document.getElementById(
        "productCategory"
    ).value = "";


    document.getElementById(
        "productPrice"
    ).value = "";


    document.getElementById(
        "productQuantity"
    ).value = "";


    document.getElementById(
        "productLocation"
    ).value = "";



    updatePreview();

}



/* CATEGORY EMOJI */

function getCategoryEmoji(
    category
) {

    if (category === "fruits") {

        return "🍎";

    }


    if (category === "vegetables") {

        return "🥕";

    }


    if (category === "grains") {

        return "🌾";

    }


    return "🌱";

}



/* LIVE PREVIEW */

function updatePreview() {


    const name =
        document.getElementById(
            "productName"
        ).value;


    const farmer =
        document.getElementById(
            "farmerName"
        ).value;


    const location =
        document.getElementById(
            "productLocation"
        ).value;


    const price =
        document.getElementById(
            "productPrice"
        ).value;


    const quantity =
        document.getElementById(
            "productQuantity"
        ).value;


    const option =
        document.querySelector(
            'input[name="buyingOption"]:checked'
        ).value;



    document.getElementById(
        "previewName"
    ).innerText =
        name || "Your Product";


    document.getElementById(
        "previewFarmer"
    ).innerText =
        farmer || "Farmer Name";


    document.getElementById(
        "previewLocation"
    ).innerText =
        "📍 " +
        (location || "Farm Location");


    document.getElementById(
        "previewPrice"
    ).innerText =
        price || "0";


    document.getElementById(
        "previewQuantity"
    ).innerText =
        quantity || "0";



    const previewOption =
        document.getElementById(
            "previewOption"
        );


    if (option === "delivery") {

        previewOption.innerText =
            "🔵 Delivery Available";

        previewOption.className =
            "delivery";

    } else {

        previewOption.innerText =
            "🟢 Self Buying";

        previewOption.className =
            "self-buy";

    }

}



/* LIVE INPUTS */

document
    .querySelectorAll(
        "#farmerName, #productName, #productPrice, #productQuantity, #productLocation"
    )
    .forEach(function(input) {

        input.addEventListener(
            "input",
            updatePreview
        );

    });


document
    .getElementById(
        "productCategory"
    )
    .addEventListener(
        "change",
        updatePreview
    );


document
    .querySelectorAll(
        'input[name="buyingOption"]'
    )
    .forEach(function(radio) {

        radio.addEventListener(
            "change",
            updatePreview
        );

    });


updatePreview();
