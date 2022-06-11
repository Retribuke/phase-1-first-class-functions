function receivesAFunction(boo) {
    boo();
}

function returnsANamedFunction() {
    return function namedFunction() {

    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}