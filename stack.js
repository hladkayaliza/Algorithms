class Stack {
    constructor(maxLenght) {
        this.maxLenght = maxLenght;
        this.state = [];
    }

    push(value) {
        this.state.push(value);
    }

    pop() {
        this.state.pop();
    }

    isEmpty() {
        if(this.state?.length) {
            return false;
        }
        return true;
    }

    peek() {
        return this.state[this.state.length - 1];
    }

    isFull() {
        if(this.state?.length >= this.maxLenght) {
            return true;
        }
        return false;
    }
}


(() => {
    const stack1 = new Stack(5);
    stack1.push(5);
    stack1.push(15);
    stack1.push(25);
    stack1.push(35);
    stack1.push(45);
    console.log(stack1);
    debugger

    stack1.pop();
    stack1.pop();
    console.log(stack1);


    console.log(stack1.isEmpty());
    console.log(stack1.isFull());
    console.log(stack1.peek());
})();
