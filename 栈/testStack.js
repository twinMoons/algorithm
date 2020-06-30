function Stack () {
    var items = [] // one
    // this.items = [] // two
}

var stack = new Stack()
stack.items.push(1);
console.log(stack)
// one TypeError: Cannot read property 'push' of undefined
// two Stack { items: [ 1 ] }