const Human = require('./Human')
class Singleton {
    static instance;
    constructor() {
        console.log(Singleton.instance)
    }
    static getInstance() {
        if (Singleton.instance) {
            return Singleton.instance
        }
        Singleton.instance = new Human();
        return Singleton.instance
    }
}

module.exports = Singleton