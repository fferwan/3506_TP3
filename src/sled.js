class Sled {

    constructor() {
        this.limitWeight = 12
        this.currentWeight = 0
        this.gifts = []
        this.status = "available"
    }

    send() {
        console.log('sending the sled')
    }

}

export default Sled