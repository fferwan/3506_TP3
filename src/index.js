// you can import css in your js file!
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

// If you want to use jquery
import $ from 'jquery'

// TODO

var sled;
var dwarf;

function onLoad() {
    sled = new Sled();
    dwarf = new Dwarf();
}


class Gift {
    constructor(weight, time) {
        this.weight = weight;
        this.time = time;
    }
}

class Sled {
    constructor() {
        this.limitWeight = 10;
        this.currentWeight = 0;
        this.gifts = [];
    }
}

class Dwarf {
    constructor() {
        
    }
    static status() {
        let working = false;
        let waiting = false;
        let available = false;
    }
    static working() {
        let gift = Gift();
        let sled = Sled();
    }
}

function prepare(weight, time) {
    if (sled.currentWeight + weight <= sled.limitWeight) {
        sled.currentWeight += weight;
        sled.gifts.push(new Gift(weight, time));
        document.getElementById('sled-weight').innerHTML = sled.currentWeight;
        console.log(sled.gifts);

        let sledweightStatus = Math.trunc(((100 * sled.currentWeight) / sled.limitWeight) /25);
        let sledClass = '';

        switch(sledweightStatus) {
            case 0:
                sledClass = 'sled sled-1';
                break;
            case 1:
                sledClass = 'sled sled-1';
                break;
            case 2:
                sledClass = 'sled sled-2';
                break;
            case 3:
                sledClass = 'sled sled-3';
                break;
            case 4:
                sledClass = 'sled sled-4';
                break;
        }
        document.getElementById('sled-status-img').className = sledClass;
    }
}