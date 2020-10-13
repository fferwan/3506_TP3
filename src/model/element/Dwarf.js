/**
 * Class representing a dwarf worker in our factory
 */
class Dwarf {

    /**
     * Default constructor
     */
    constructor() {
        this.statusUpdate("available");
    }

    /**
     * Triggers the preparation of a gift
     * @param {Gift} gift gift to add
     * @param {Sled} sled sled that will receive the gift
     */
    prepare(gift, sled) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                sled.addGift(gift);
                this.statusUpdate("available");
                resolve();
            }, gift.time);
        });
    }

    /**
     * Update the status of the dwarf 
     * @param {string} status status of the dwarf
     */
    statusUpdate(status) {
        // List of accepted states
        const statusList = ["available", "working", "waiting"];

        // The parameter is correct
        if (statusList.includes(status)) {
            this.status = status;
        }
    }
}

export default Dwarf;