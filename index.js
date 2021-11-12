function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function iNamedThisFunction() {
        console.log("this is a named function")
}
}
function returnsAnAnonymousFunction() {
    return () => console.log("this is my anonymous function");
}