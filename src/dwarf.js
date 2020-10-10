function preparePromise(gift, sled, dwarf) {
    return new Promise((resolve, reject) => {
        if (dwarf.status === 'available') {
            // console.log('Dwarf is available!');
            if (sled.limitLength >= sled.currentLength + gift.length) {
                // console.log('Dwarf is working!');
                // console.log('There is enough place for the gift in the sled!');
                dwarf.statusUpdate('working');
                setTimeout(() => {
                    // console.log(sled);
                    resolve(true);
                    sled.addGift(gift);
                }, gift.preparingTime);
            } else {
                // console.log('Sled is full');
                reject();
            }
        }
        else {
            // console.log('Dwarf is not available for now !');
            reject();
        }
    })
}

class Dwarf {

    constructor() {
        this.status = 'available'
    }

    async prepare(gift, sled) {
        try {
            console.log('putting the gift in the sled');
            const isPrepared = await preparePromise(gift, sled, this);
            if (isPrepared === true) {
                console.log('Gift prepared');
            }
        } catch (err) {
            console.log(`Unable to prepare the gift`);
        }
        this.statusUpdate('available');
    }

    statusUpdate(status) {
        const image = document.getElementById('dwarf-status-img');
        const text = document.getElementById('dwarf-status-text');

        switch(status) {
            case 'available':
                this.status = status;
                image.className = "dwarf dwarf-available";
                text.className = "mx-auto text-success";
                break;
            case 'working':
                this.status = status;
                image.className = "dwarf dwarf-working";
                text.className = "mx-auto text-warning";
                break;
            case 'waiting':
                this.status = status;
                image.className = "dwarf dwarf-waiting";
                text.className = "mx-auto text-danger";
                break;
            default:
                console.error('unknown dwarf status,', status, 'try again');
                break;
        }
        text.innerHTML = this.status;
    }
}

export default Dwarf