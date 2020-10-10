function preparePromise(gift, sled, dwarf) {
    return new Promise((resolve, reject) => {
        if (dwarf.status === 'available') {
            console.log('Dwarf is available!')
            if (sled.limitWeight > sled.currentWeight + gift.weight) {
                console.log('Dwarf is working!')
                console.log('There is enough place for the gift in the sled!')
                dwarf.status = 'working'
                setTimeout(() => {
                    sled.currentWeight += gift.weight
                    sled.gifts.push(gift)
                    console.log(sled)
                    resolve(true);
                }, gift.preparingTime)
            } else {
                console.log('Sled is full')
                reject();
            }
        }
        else {
            console.log('Dwarf is not available for now !')
            reject()
        }
        
    })
}

class Dwarf {

    constructor() {
        this.status = 'available'
    }

    async prepare(gift, sled) {
        try {
            console.log('putting the gift in the sled')
            const isPrepared = await preparePromise(gift, sled, this)
            if (isPrepared === true) {
                console.log('Gift prepared')
            }
        } catch (err) {
            console.log(`Unable to prepare the gift`)
        }
        this.status = 'available'

    }


}

export default Dwarf