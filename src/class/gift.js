/**
 * Class representing a generic gift
 */
class Gift {

    /**
     * Configurable constructor
     * @param {int} length weight of the gift
     * @param {int} time preparation time in ms
     */
    constructor(length, time) {
        this.length = length;
        this.time = time;
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

export default giftFactory