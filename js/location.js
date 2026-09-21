function getCustomerLocation() {

    const status = document.getElementById("locationStatus");

    if (!navigator.geolocation) {
        status.innerText = "❌ Location is not supported on this device.";
        return;
    }

    status.innerText = "📍 Detecting your location...";

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Save customer location
            localStorage.setItem(
                "customerLatitude",
                latitude
            );

            localStorage.setItem(
                "customerLongitude",
                longitude
            );

            // Show success
            status.innerHTML =
                "✅ Location detected<br>" +
                "<small>" +
                latitude.toFixed(5) +
                ", " +
                longitude.toFixed(5) +
                "</small>";

        },

        function(error) {

            if (error.code === 1) {

                status.innerText =
                    "❌ Location permission denied. Please allow location.";

            } else if (error.code === 2) {

                status.innerText =
                    "❌ Location unavailable. Turn ON Location/GPS.";

            } else if (error.code === 3) {

                status.innerText =
                    "⏳ Location request timed out. Try again.";

            } else {

                status.innerText =
                    "❌ Unable to detect location.";

            }

        },

        {
            enableHighAccuracy: false,
            timeout: 15000,
            maximumAge: 300000
        }

    );
}


/* =========================================
   DISTANCE CALCULATION
========================================= */

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R = 6371;

    const dLat =
        (lat2 - lat1) *
        Math.PI / 180;

    const dLon =
        (lon2 - lon1) *
        Math.PI / 180;

    const a =
        Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +

        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *

        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}


/* =========================================
   GET CUSTOMER COORDINATES
========================================= */

function getCustomerCoordinates() {

    const lat =
        parseFloat(
            localStorage.getItem(
                "customerLatitude"
            )
        );

    const lon =
        parseFloat(
            localStorage.getItem(
                "customerLongitude"
            )
        );

    if (
        Number.isFinite(lat) &&
        Number.isFinite(lon)
    ) {

        return {
            latitude: lat,
            longitude: lon
        };

    }

    return null;
}


/* =========================================
   PRODUCT DISTANCE
========================================= */

function getProductDistance(product) {

    const customer =
        getCustomerCoordinates();

    if (!customer) {

        return product.distance ||
               "Distance unavailable";

    }


    if (
        product.latitude === undefined ||
        product.longitude === undefined
    ) {

        return product.distance ||
               "Nearby";

    }


    const distance =
        calculateDistance(
            customer.latitude,
            customer.longitude,
            Number(product.latitude),
            Number(product.longitude)
        );


    if (!Number.isFinite(distance)) {

        return product.distance ||
               "Nearby";

    }


    return distance.toFixed(1) + " km";

}
