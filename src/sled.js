// axios
import axios from 'axios'

class Sled {

    constructor() {
        this.limitLength = 12;
        this.currentLength = 0;
        this.gifts = [];
        this.status = "available";
    }

    send() {
        console.log('sending the sled');
    }

    addGift(gift) {
        const newLength = this.currentLength + gift.length;
        if (this.limitLength >= newLength) {
            this.gifts.push(gift);
            this.currentLength = newLength;
        } else {
            console.error('sled is full');
        }
        this.sledUpdate();
    }

    sledUpdate() {
        let sledClass;
        if (this.status === 'delivering') {
            sledClass = "reindeer reindeer-anim";
        } else if (this.status === 'hunger') {
            sledClass = "reindeer reindeer-hunger";
        } else if (this.currentLength === 0) {
            sledClass = "sled sled-0";
        } else {
            const sledLengthStatus = Math.trunc(((100 * this.currentLength) / this.limitLength) / 25);
            switch (sledLengthStatus) {
                case 0:
                case 1:
                    sledClass = "sled sled-1";
                    break;
                case 2:
                    sledClass = "sled sled-2";
                    break;
                case 3:
                    sledClass = "sled sled-3";
                    break;
                case 4:
                    sledClass = "sled sled-4";
                    break;
            }
        }
        document.getElementById('sled-status-img').className = sledClass;
        document.getElementById('sled-weight').innerHTML = this.currentLength;
    }

    async send() {
        if (this.currentLength !== 0 && (this.status === 'available' || this.status === 'hunger')) {
            this.status = 'delivering';
            this.sledUpdate();
            await axios.post('http://localhost:8081', { gifts: this.gifts })
                .then((res) => {
                    // console.log('res', res)
                    this.currentLength = 0;
                    this.status = 'available';
                }).catch((error) => {
                    // console.error('error', error)
                    this.status = 'hunger';
                });
            this.sledUpdate();
        }
    }
}


export default Sled