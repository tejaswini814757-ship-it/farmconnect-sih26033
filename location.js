// FarmConnect - Location & Distance

function getCustomerLocation() {

    if (!navigator.geolocation) {

        alert("Location is not supported by this browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            localStorage.setItem(
                "customerLatitude",
                latitude
            );

            localStorage.setItem(
                "customerLongitude",
                longitude
            );

            alert(
                "📍 Your location detected successfully!"
            );

            updateLocationStatus();

        },

        function(error) {

            alert(
                "Unable to access location. Please allow location permission."
            );

        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }

    );

}


function updateLocationStatus() {

    const latitude =
        localStorage.getItem("customerLatitude");

    const longitude =
        localStorage.getItem("customerLongitude");

    const status =
        document.getElementById("locationStatus");

    if (
        status &&
        latitude &&
        longitude
    ) {

        status.innerHTML =
            "📍 Location detected successfully";

    }

}


/*
Calculate distance between two coordinates
*/

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const earthRadius = 6371;

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

    return earthRadius * c;
}


/*
Get customer's saved location
*/

function getCustomerCoordinates() {

    const latitude =
        parseFloat(
            localStorage.getItem(
                "customerLatitude"
            )
        );

    const longitude =
        parseFloat(
            localStorage.getItem(
                "customerLongitude"
            )
        );


    if (
        isNaN(latitude) ||
        isNaN(longitude)
    ) {

        return null;

    }


    return {
        latitude: latitude,
        longitude: longitude
    };

}
