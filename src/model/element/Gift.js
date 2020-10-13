/**
 * Class representing a generic gift
 */
class Gift {

    /**
     * Configurable constructor
     * @param {int} weight weight of the gift
     * @param {int} time preparation time in ms
     */
    constructor(weight, time) {
        this.weight = weight;
        this.time = time;
        this.name = "Normal Gift";
        this.prefix = "normal-gift";
    }

}

/**
 * Class representing a small gift
 */
class GiftS extends Gift {

    /**
     * Default constructor
     */
    constructor() {
        super(1, 500);
        this.name = "Small Gift";
        this.prefix = "gift-small";
    }
}

/**
 * Class representing a medium gift
 */
class GiftM extends Gift {

    /**
     * Default constructor
     */
    constructor() {
        super(2, 1000);
        this.name = "Medium Gift";
        this.prefix = "gift-medium";
    }
}

/**
 * Class representing a large gift
 */
class GiftL extends Gift {

    /**
     * Default constructor
     */
    constructor() {
        super(5, 2000);
        this.name = "Large Gift";
        this.prefix = "gift-large";
    }
}

/**
 * Gift factory
 * @param {String} id "gift-[small,medium,large]"
 */
const giftFactory = (id) => {
    switch (id) {
        case 'gift-small':
            return new GiftS();
        case 'gift-medium':
            return new GiftM();
        case 'gift-large':
            return new GiftL();
        default:
            return null;
    }
}

export default giftFactory;