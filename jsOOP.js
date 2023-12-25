function Container(param) {

    function dec() {
        if (secret > 0) {
            secret -= 1;
            return true;
        } else {
            return false;
        }
    }

    this.member = param;
    var secret = 3;
    var that = this;

    this.service = function () {
        return dec() ? that.member : null;
    };
}
let obj = new Container(1)
console.log(obj.service())

// Public
function Constructor() {
    this.membername = value;
}
Constructor.prototype.membername = value;

// Private
function Constructor() {
    var that = this;
    var membername = value;
    function membername() { }

}

// Privileged
function Constructor() {
    this.membername = function () { };
}