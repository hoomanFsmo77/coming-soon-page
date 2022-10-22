import '../images/bg.jpg';
import '../images/bg-dark.jpg';
import '../style/main.scss';
import Alpine from "alpinejs";
import persist from '@alpinejs/persist';
import dark_mode from "./components/dark_mode/dark_mode";
import { init } from 'ityped';
import "bootstrap";
/////////////////////////////////////
window.Alpine = Alpine
Alpine.plugin(persist)
Alpine.data('dark_mode',dark_mode)
Alpine.start()

const text = document.querySelector('#text')


init(text, { showCursor: true, strings: ['dolor sit amet ipsum dolor.'] });
