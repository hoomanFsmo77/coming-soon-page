import '../images/bg.jpg';
import '../images/bg-dark.jpg';
import '../style/main.scss';
import Alpine from "alpinejs";
import persist from '@alpinejs/persist';
import dark_mode from "./components/dark_mode/dark_mode";
import countdown from "./components/countdown/countdown.js";
import { init } from 'ityped';
import "leaflet";
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png'
import "bootstrap";
/////////////////////////////////////
window.Alpine = Alpine
Alpine.plugin(persist)
Alpine.data('dark_mode',dark_mode)
Alpine.data('countdown',countdown)
Alpine.start()

const text = document.querySelector('#text')


init(text, { showCursor: true, strings: ['dolor sit amet ipsum dolor.'] });


let mymap = L.map('map').setView([35.67426901547201, 51.394755885994755], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([35.67426901547201, 51.394755885994755]).bindPopup("hooman mouavi").addTo(mymap).openPopup();