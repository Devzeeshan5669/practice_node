function OuterFunction(a) {

    function InnerFunction() {
        console.log(a)
    }
    return InnerFunction;
}
var innerFunc = OuterFunction(12);
var innerFunc1 = OuterFunction(14);

innerFunc();
innerFunc1();
