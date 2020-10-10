class Gift {

    constructor(weight, preparingTime) {
        this.weight = weight
        this.preparingTime = preparingTime
    }
}

class GiftS extends Gift{
    
    constructor() {
        console.log('Small gift created !')
        super(1, 500)
    }
}

class GiftM extends Gift{
    constructor() {
        console.log('Medium gift created !')
        super(2, 1000)
    } 
}

class GiftL extends Gift{
    constructor() {
        console.log('Large gift created !')
        super(5, 2000)
    }
}

const giftFactory = (id) => {
    switch (id) {
        case 'gift-small': return new GiftS()
        case 'gift-medium': return new GiftM()
        case 'gift-large': return new GiftL()
        default: {
            console.error('Unable to create a gift with the id : ' + id)
            return null
        }
    }
}

export default giftFactory