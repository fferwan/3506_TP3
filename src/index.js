// Import css
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

// Class files
import Dwarf from './class/dwarf'
import Sled from './class/sled'
import giftFactory from './class/gift'

// Initialize the dwarf and the sled
const dwarf = new Dwarf()
const sled = new Sled()


// List of prefix of id in html
const prefixGiftList = ["gift-small", "gift-medium", "gift-large"];

// Initialization of model values and their onClickListener
prefixGiftList.forEach(prefix => {

    // Initializes the tables with the model values
    document.getElementById(prefix + "-length").innerText = giftFactory(prefix).length;
    document.getElementById(prefix + "-time").innerText = giftFactory(prefix).time / 1000;

    // Initializes the onclicklistener on each of the gift preparation buttons
    document.getElementById(prefix + "-button").addEventListener('click', () => {
        dwarf.prepare(prefix, sled);
    });
});

// Initializes the onclicklistener on send button
document.getElementById("sled-button").addEventListener('click', () => {
    sled.send(dwarf);
});