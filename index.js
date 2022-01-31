(() => {

})();

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(node) {
        this.nodes.set(node, []);
    };


    addEdge(source, destination) {
        this.nodes.get(source).push(destination);
        this.nodes.get(destination).push(source);
    };

    getIndexAndRemoveItem(item, list) {
        const index = list.indexOf(item);
        list.splice(index, 1);
    }


    removeNode(node) {
        let neighbors = this.nodes.get(node);
        for(let neighbor of neighbors) {
            let adjacencyListOfNeighbor = this.nodes.get(neighbor);
            this.getIndexAndRemoveItem(node, adjacencyListOfNeighbor)
        }
        this.nodes.delete(node);
    };
    removeEdge(source, destination) {
        let adjacencyListOfSource = this.nodes.get(source);
        let adjacencyListOfDestination = this.nodes.get(destination);

        this.getIndexAndRemoveItem(source, adjacencyListOfDestination);
        this.getIndexAndRemoveItem(destination, adjacencyListOfSource);
    };
    depthFirstSearch(startingNode) {
        let visitedNode = [];
        this.dfsRecursion(startingNode, visitedNode);
    };

    dfsRecursion(currentNode, visitedNode) {
        visitedNode[currentNode] = true;
        console.log(currentNode);
        let adjacencyListOfCurrentNode = this.nodes.get(currentNode);
        for (let node of adjacencyListOfCurrentNode) {
            if (!visitedNode[node]) this.dfsRecursion(node, visitedNode);
        }
    }

    breadthFirstSearch(startingNode) {
        let visitedNode = [];
        let queue = [];
        visitedNode[startingNode] = true;
        queue.push(startingNode);
        while (queue.length > 0) {
            const currentNode = queue.shift();

            console.log(currentNode);

            const adjacencyListOfCurrentNode = this.nodes.get(currentNode);

            for (let node of adjacencyListOfCurrentNode) {
                if (!visitedNode[node]) {
                    visitedNode[node] = true;
                    queue.push(node);
                }
            }
        }
    };
    display() {};
}


// https://dev.to/codebondco/implementation-of-a-graph-javascript-4jin
