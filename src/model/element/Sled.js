// Import axios
import axios from "axios";

/**
 * Class representing a sled in our factory
 */
class Sled {

    /**
     * Default constructor
     */
    constructor() {
        this.limitWeight = 12;
        this.currentWeight = 0;
        this.gifts = [];
        this.statusUpdate("available");
    }

    /**
     * Adds a gift in the sled
     * @param {Gift} gift the gift that will be added
     */
    addGift(gift) {
        const newweight = this.currentWeight + gift.weight;
        if (this.limitWeight >= newweight) {
            this.gifts = [...this.gifts, gift];
            this.currentWeight = newweight;
            this.statusUpdate("available");
        }
    }

    /**
     * Update the status of the sled
     * @param {string} status status of the sled
     */
    statusUpdate(status) {
        // List of accepted states
        const statusList = ["available", "delivering", "hunger"];

        // The parameter is correct
        if (statusList.includes(status)) {
            this.status = status;
        }
    }

    /**
     * Sends the delivery request to the api
     */
    async delivery() {
        try {
            await axios.post("http://localhost:8081", {
                gifts: this.gifts
            });
            this.currentWeight = 0;
            this.gifts = [];
            this.statusUpdate("available");
        }
        catch (err) {
            this.statusUpdate("hunger");
        }
    }
}

export default Sled;