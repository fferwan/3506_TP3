import giftFactory from '../model/element/Gift';

/**
 * Class that retrieves the user's interactions, modifies the model 
 * and requests view updates
 */
class Controller {

    /**
     * Complete constructor
     * @param {Model} model model to be used
     * @param {View} view view to be used
     */
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    /**
     * Initializes the EventListener and updates the initial view
     */
    init() {
        // Initializes the onclicklistener on gift buttons
        this.model.gifts.forEach(gift => {
            document.getElementById(gift.prefix + "-button").addEventListener('click', () => {
                this.dwarfPreparation(gift.prefix)
            });

            // Update the view for the current gift 
            this.view.updateGift(gift);
        });

        // Initializes the onclicklistener on send button
        document.getElementById("sled-button").addEventListener('click', () => {
            this.sledDelivery();
        });

        // Update the view for dwarf and sled
        this.view.updateDwarf(this.model.dwarf);
        this.view.updateSled(this.model.sled);

        // Initializes the onclicklistener on audio buttons
        document.getElementById("stopAudio").addEventListener('click', () => {
            this.stopAudio();
        });

        document.getElementById("playAudio").addEventListener('click', () => {
            this.playAudio();
        });

        // Launch audio
        this.playAudio();
    }

    /**
     * Manages the preparation of a gift when a "<prefix>-button" is pressed
     * @param {string} prefix prefix id of the button pressed
     */
    async dwarfPreparation(prefix) {

        // If the dwarf can work
        if (this.model.dwarf.status === "available") {

            // If there is enough space in the sled
            const gift = giftFactory(prefix);
            if (this.model.sled.limitWeight >= this.model.sled.currentWeight + gift.weight) {

                // Brefore preparation
                this.model.dwarf.statusUpdate("working");
                this.view.updateDwarf(this.model.dwarf);

                // Preparation
                await this.model.dwarf.prepare(gift, this.model.sled);

                // After preparation
                this.view.updateDwarf(this.model.dwarf);
                this.view.updateSled(this.model.sled);
            }
        }
    }

    /**
     * Manages the delivery of the sled when the "sled-button" is pressed
     */
    async sledDelivery() {

        // If the dwarf is not working and the sled is not empty and not in delivery
        if (this.model.dwarf.status !== "working" && this.model.sled.status !== "delivering" && this.model.sled.currentWeight > 0) {

            // Before delivery
            this.model.dwarf.statusUpdate("waiting");
            this.model.sled.statusUpdate("delivering");
            this.view.updateDwarf(this.model.dwarf);
            this.view.updateSled(this.model.sled);

            // Delivery
            await this.model.sled.delivery();

            // After delivery
            this.model.dwarf.statusUpdate("available");
            this.view.updateDwarf(this.model.dwarf);
            this.view.updateSled(this.model.sled);
        }
    }

    /**
     * Play audio
     */
    playAudio() {
        document.getElementById("myAudio").play();
        this.view.updateAudio("on");
    }

    /**
     * Stop audio
     */
    stopAudio() {
        document.getElementById("myAudio").pause();
        this.view.updateAudio("off");
    }


}

export default Controller;