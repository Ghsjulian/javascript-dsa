/*
 *
 Problem : Create A Class for stack data structure 
 *
 */
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        if (this.isEmpty()) {
            return "Item Is Empty!";
        }
        this.items.pop();
    }
    peeck() {
        if (this.isEmpty()) {
            return "Item is empty!";
        }
        return this.items[this.items.length - 1];
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

// Let's create a instance of the Stack class
// And call it
const myStack = new Stack();
myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.size());
console.log(myStack.isEmpty());
console.log(myStack.pop());
console.log(myStack.peeck());
