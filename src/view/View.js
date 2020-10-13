/**
 * This class groups together all the modifications of the view 
 */
class View {

    /**
     * Update the view for the given dwarf
     * @param {Dwarf} dwarf given dwarf
     */
    updateDwarf(dwarf) {
        const image = document.getElementById('dwarf-status-img');
        const text = document.getElementById('dwarf-status-text');

        switch (dwarf.status) {
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
        text.innerText = dwarf.status.charAt(0).toUpperCase() + dwarf.status.substring(1);
    }

    /**
     * Update the view for the given sled
     * @param {Sled} sled given sled
     */
    updateSled(sled) {
        let sledClass;

        if (sled.status === "delivering") {
            sledClass = "sled sled-delivering";
        }
        else if (sled.status === "hunger") {
            sledClass = "sled sled-hunger";
        }
        else if (sled.status === "available" && sled.currentWeight === 0) {
            sledClass = "sled sled-0";
        }
        else if (sled.status === "available") {
            const sledWeightStatus = Math.trunc(((100 * sled.currentWeight) / sled.limitWeight) / 25);
            switch (sledWeightStatus) {
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
        document.getElementById("sled-weight").innerText = sled.currentWeight;
    }

    /**
     * Update the view for the given gift
     * @param {Gift} gift given gift
     */
    updateGift(gift) {
        document.getElementById(gift.prefix + "-weight").innerText = gift.weight;
        document.getElementById(gift.prefix + "-time").innerText = gift.time / 1000;
        document.getElementById(gift.prefix + "-name").innerText = gift.name;
    }

    /**
     * Updates the view according to the status of music
     * @param {string} state state of the music
     */
    updateAudio(state) {
        if (state === "off") {
            document.getElementById("stopAudio").hidden = true;
            document.getElementById("playAudio").hidden = false;
        }
        else {
            document.getElementById("stopAudio").hidden = false;
            document.getElementById("playAudio").hidden = true;
        }
    }

}

export default View;