class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //newnode goes to back of the line/end of the queue
    enqueue(value) {
        const newNode = new QueueNode(value);
        //if queue is empty
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
            // add current first pointer to new first(new node), and make new node new first
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size ++;
        return this;
    }

    dequeue() {
        //if queue is empty return false
        if (this.size === 0) {
            return false;
        }
        const dequeuedNode = this.first;
        //get new first (could be NULL if stack is length 1)
        const newFirst = this.first.next;
        //if newFirst is null, reassign last to newFirst(null)
        if (!newFirst) {
            this.last = newFirst;
        }
        //assign new first
        this.first = newFirst;
        //remove refernce to list
        dequeuedNode.next = null;
        //remove 1 from size
        this.size--;
        return dequeuedNode;
    }

    log() {
        let currentNode = this.first;
        let i = 0;
        while (currentNode) {
            console.log(i, currentNode.value);
            i++;
            currentNode = currentNode.next;
        }
    }
}
    

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBFS() {
        //if there is no root, return false
        if (!this.root) {
            return false;
        }

        //start a new Queue
        const queue = new Queue();
        //keep a tally of all values in the tree
        const treeValues = [];
        //add root to queue
        queue.enqueue(this.root);
        while (queue.size !== 0) {
            //get TreeNode Children
            const nodeChildren = queue.first.value.children;
            //if node has children, loop and add each to queue
            if (nodeChildren.length !== 0) {
                nodeChildren.forEach(child => queue.enqueue(child));
            }
            treeValues.push(queue.first.value);
            //remove first node from queue
            queue.dequeue();
        }
        //return values, should be all TreeNodes
        return treeValues;
    }

}



(() => {
    const testTree = new Tree();

    testTree.root = new TreeNode("H");
    testTree.root.children.push(new TreeNode("e"));
    testTree.root.children.push(new TreeNode("l"));
    testTree.root.children[0].children.push(new TreeNode("l"));
    testTree.root.children[0].children.push(new TreeNode("o"));
    testTree.root.children[0].children.push(new TreeNode("W"));
    testTree.root.children[1].children.push(new TreeNode("o"));
    testTree.root.children[1].children.push(new TreeNode("r"));
    testTree.root.children[1].children.push(new TreeNode("l"));
    testTree.root.children[1].children.push(new TreeNode("d"));

    const testTree2 = new Tree();

    testTree2.root = new TreeNode(10);
    testTree2.root.children.push(new TreeNode(6));
    testTree2.root.children.push(new TreeNode(15));
    testTree2.root.children[0].children.push(new TreeNode(3));
    testTree2.root.children[0].children.push(new TreeNode(8));
    testTree2.root.children[0].children.push(new TreeNode(7));
    testTree2.root.children[1].children.push(new TreeNode(20));

    console.log(testTree.traverseBFS());
    console.log(testTree2.traverseBFS());
    // https://ichi.pro/ru/obhod-derev-ev-poisk-v-sirinu-i-v-glubinu-s-pomos-u-javascript-54353411571343
})();
