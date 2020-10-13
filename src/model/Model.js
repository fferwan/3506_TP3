import giftFactory from './element/Gift';
import Dwarf from './element/Dwarf';
import Sled from './element/Sled';

/**
 * Class that represents the model of our application
 */
class Model {

    /**
     * Default constructor
     */
    constructor(){
        this.gifts = [ 
            giftFactory("gift-small"),
            giftFactory("gift-medium"),
            giftFactory("gift-large")
        ];

        this.dwarf = new Dwarf();
        this.sled = new Sled();
    }
}

export default Model;