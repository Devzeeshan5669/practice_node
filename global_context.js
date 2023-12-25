// Define your variables and functions
var a;

function test() {

}

const b = 2;

// List variables and functions declared with 'var' in the global context
function listGlobalVars() {
    console.log('Variables and functions declared with "var" in the global context:');
    const globalVars = Object.keys(global).filter(key => {
        return global[key] === global;
    });
    globalVars.forEach(item => {
        console.log(item);
    });
}

listGlobalVars();
