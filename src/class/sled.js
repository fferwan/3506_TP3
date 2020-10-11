// Import axios
import axios from "axios"

/**
 * Class representing a sled in our factory
 */
class Sled {

    /**
     * Default constructor
     */
    constructor() {
        this.limitLength = 12;
        this.currentLength = 0;
        this.gifts = [];
        this.statusUpdate("available");
    }

    /**
     * Adds a gift in the sled
     * @param {Gift} gift the gift that will be added
     */
    addGift(gift) {
        const newLength = this.currentLength + gift.length;
        if (this.limitLength >= newLength) {
            this.gifts.push(gift);
            this.currentLength = newLength;
            this.statusUpdate("available");
        }
    }

    /**
     * Update the status of the sled and the html view
     * @param {String} status status of the sled
     */
    statusUpdate(status) {
        // List of accepted states
        const statusList = ["available", "delivering", "hunger"];

        // The parameter is correct
        if (statusList.includes(status)) {
            this.status = status;
            let sledClass;

            if (this.status === "delivering") {
                sledClass = "reindeer reindeer-anim";
            } else if (this.status === "hunger") {
                sledClass = "reindeer reindeer-hunger";
            } else if (this.status === "available" && this.currentLength === 0) {
                sledClass = "sled sled-0";
            } else if (this.status === "available") {
                const sledLengthStatus = Math.trunc(((100 * this.currentLength) / this.limitLength) / 25);
                switch (sledLengthStatus) {
                    case 2:
                        sledClass = "sled sled-2";
                        break;
                    case 3:
                        sledClass = "sled sled-3";
                        break;
                    case 4:
                        sledClass = "sled sled-4";
                        break;
                    default:
                        sledClass = "sled sled-1";
                }
            }
            document.getElementById("sled-status-img").className = sledClass;
            document.getElementById("sled-length").innerText = this.currentLength;
        }
    }

    /**
     * Sends the delivery request to the api and asks for the
     * update of the html part
     * @param {Dwarf} dwarf dwarf who will have to wait for delivery
     */
    async send(dwarf) {
        if (dwarf.status !== "working" && this.status !== "delivering" && this.currentLength > 0) {
            dwarf.statusUpdate("waiting");
            this.statusUpdate("delivering");
            try {
                await axios.post("http://localhost:8081", {
                    gifts: this.gifts
                })
                this.currentLength = 0;
                this.gifts = [];
                this.statusUpdate("available");
            }
            catch (err) {
                this.statusUpdate("hunger");
            }
            finally {
                dwarf.statusUpdate("available");
            }
        }
    }
}

export default Sled