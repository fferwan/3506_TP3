// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

// If you want to use jquery
import $ from 'jquery'
// axios
import axios from 'axios'

// Src files
import Dwarf from './dwarf'
import Sled from './sled'
import giftFactory from './gift'

// TODO

const dwarf = new Dwarf()
const sled = new Sled()

document.getElementById("gift-small-button").addEventListener('click',async() => {
    if (dwarf.status === 'available') {
        const gift = giftFactory('gift-small');
        await dwarf.prepare(gift, sled);
    }
});
document.getElementById("gift-medium-button").addEventListener('click', async () => {
    if (dwarf.status === 'available') {
        const gift = giftFactory('gift-medium');
        await dwarf.prepare(gift, sled);
    }
});
document.getElementById("gift-large-button").addEventListener('click', async () => {
    if (dwarf.status === 'available') {
        const gift = giftFactory('gift-large');
        await dwarf.prepare(gift, sled);
    }
});
document.getElementById("sled-button").addEventListener('click', async () => {
    if (dwarf.status === 'available') {
        dwarf.statusUpdate('waiting');
        await sled.send();
        dwarf.statusUpdate('available');
    }
});