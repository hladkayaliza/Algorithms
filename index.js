
function calculateSum(array) {
    for(let i = 0; i < array.length; i++) {
        if (array.length === 1) {
            return array[i];
        }
        let baseCase = array[i];
        array.shift();

        return  baseCase + calculateSum(array);
    }
}

function calculateItems(array) {
    for (let i = 0; i < array.length + 1; i++) {
        if (!array.length) {
            return 0;
        }
        array.shift();

        return 1 + calculateItems(array);
    }
}

function finMaxNode(list, max) {
    let currentNode = list.head;
    let maxValue = max > list.head.data ? max : list.head.data;

    while (currentNode.next) {
        if (currentNode.data > maxValue) {
            maxValue = currentNode.data;
        }
        let nextNode = currentNode.next;
        list.delete(currentNode);
        currentNode = nextNode;
        return finMaxNode(list, maxValue);
    }
    return maxValue;
}


class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class List {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }

        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    }

    delete(node) {
        if(this.head !== null) {
            let previousNode = this.head;
            let currentNode = this.head.next;
            if (previousNode.data === node.data) {
                this.head = currentNode;
                return;
            }

            while (currentNode.data !== node.data) {
                if (!currentNode.next) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
            previousNode.next = currentNode.next
        }
    }
}

(() => {
    console.log(calculateSum([1,3,5]));

    console.log(calculateItems([1,3,5]));

    let list = new List();
    list.add(8);
    list.add(10);
    list.add(50);
    list.add(25);
    list.add(3);
    console.log(finMaxNode(list, 0));
})();
