// ================= LOGIN =================

function showLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function loginRole(role) {

    alert(
        "Demo Login\n\nSelected Role: " + role +
        "\n\nThis is a prototype login for SIH demonstration."
    );

    closeLogin();
}


// ================= PRODUCT SEARCH =================

function searchProducts() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        const name =
            product.dataset.name.toLowerCase();

        if (name.includes(search)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}


// ================= CATEGORY FILTER =================

function filterProducts() {

    const category =
        document.getElementById("categoryFilter").value;

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(product => {

        if (
            category === "all" ||
            product.dataset.category === category
        ) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });
}


// ================= BUY PRODUCT =================

function buyProduct(productName) {

    alert(
        "Order Request\n\n" +
        productName +
        "\n\nDirect farmer/FPO connection demo.\n" +
        "The buyer can proceed with quantity and delivery details."
    );

}


// ================= AI FORECAST =================

function generateForecast() {

    const crop =
        document.getElementById("cropSelect").value;

    const demandValues = {

        Tomato: "1,450 kg",

        Onion: "1,780 kg",

        Potato: "1,320 kg",

        Banana: "2,150 kg"

    };

    document.getElementById("demandValue")
        .innerText = demandValues[crop];

    alert(
        "AI Demand Forecast generated for " +
        crop +
        ".\n\n" +
        "Prototype prediction based on simulated historical demand data."
    );

}


// ================= ROUTE OPTIMIZATION =================

function optimizeRoute() {

    const button =
        document.querySelector(".optimize-btn");

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Optimizing...';

    setTimeout(() => {

        button.innerHTML =
            '<i class="fa-solid fa-check"></i> Route Optimized';

        alert(
            "Route optimization completed!\n\n" +
            "Suggested distance: 42 km\n" +
            "Estimated time: 1h 15m\n" +
            "Potential fuel saving: 18%"
        );

    }, 1500);

}


// ================= CLOSE MODAL =================

window.onclick = function(event) {

    const modal =
        document.getElementById("loginModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};
