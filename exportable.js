
module.exports = {
    arrowBefore: () => {
        console.log('arrowBefore')
        // this.functionBefore()
        // this.arrowAfter()
        // this.functionAfter()
    },
    functionBefore: function () {
        console.log('functionBefore', this)
        // this.arrowBefore()
        // this.arrowAfter()
        // this.functionAfter()
    },
    arrowAfter: () => {
        console.log('arrowAfter', this)
        // this.arrowBefore()
        // this.functionBefore()
        // this.functionAfter()
    },
    functionAfter: function () {
        console.log('functionAfter')
        this.arrowBefore()
        this.functionBefore()
        this.arrowAfter()
    }
}


