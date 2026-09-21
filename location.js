// FarmConnect - Customer Location

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
                "📍 Your location has been detected successfully!"
            );


            updateLocationStatus();

        },


        function(error) {

            if (error.code === 1) {

                alert(
                    "Location permission was denied. Please allow location access."
                );

            }

            else {

                alert(
                    "Unable to detect your location."
                );

            }

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
