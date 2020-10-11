import giftFactory from "./gift";

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
     * @param {String} giftID
     * @param {Sled} sled 
     */
    async prepare(giftID, sled) {
        if (this.status === "available") {
            const gift = giftFactory(giftID);
            if (sled.limitLength >= sled.currentLength + gift.length) {
                await this.preparePromise(gift, sled);
            }
        }
    }

    /**
     * Adds a gift if the dwarf is available and there is 
     * enough space in the sled
     * @param {Gift} gift gift to add
     * @param {Sled} sled sled that will receive the gift
     */
    preparePromise(gift, sled) {
        return new Promise((resolve, reject) => {
            this.statusUpdate("working");
            setTimeout(() => {
                sled.addGift(gift);
                this.statusUpdate("available");
                resolve();
            }, gift.time);
        });
    }

    /**
     * Update the status of the dwarf and the html view
     * @param {String} status status of the dwarf
     */
    statusUpdate(status) {
        // List of accepted states
        const statusList = ["available", "working", "waiting"];

        // The parameter is correct
        if (statusList.includes(status)) {
            this.status = status;
            const image = document.getElementById('dwarf-status-img');
            const text = document.getElementById('dwarf-status-text');

            switch (this.status) {
                case 'available':
                    image.className = "dwarf dwarf-available";
                    break;
                case 'working':
                    image.className = "dwarf dwarf-working";
                    break;
                case 'waiting':
                    image.className = "dwarf dwarf-waiting";
                    break;
                default:
                    break;
            }
            text.innerText = this.status.charAt(0).toUpperCase() + this.status.substring(1);
        }
    }
}

export default Dwarf