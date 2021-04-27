let map;
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 49.23211241208777, lng: 28.498968874769705 },
    });
    const image =
        "../static/images/general/pin.png";
    const beachMarker = new google.maps.Marker({
        position: { lat: 49.23211241208777, lng: 28.498968874769705 },
        map,
        icon: image,
    });
}