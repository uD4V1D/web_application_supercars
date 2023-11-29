function getMap(){
    mapboxgl.accessToken = 'pk.eyJ1IjoidWQ0djFkIiwiYSI6ImNscGQ3MDExejBxdjkybG5veGlmc2xtMWgifQ.ULLGgaN2FYEwWSiZzDD1Ww';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-46.6741841866569, -23.567647621810632], // starting position [lng, lat]
        zoom: 9, // starting zoom
    });

}

function get_locations(){
    const url = "https://replit.com/@DavidFerreira37/JSONServer#db.json"
    fetch(url)
        .then
}

getMap();