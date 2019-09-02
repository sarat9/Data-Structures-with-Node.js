
// Graph - Directed Graph - Adjecency List
const { Queue } = require('../../queue/queue');


class DirectedGraphList {
    constructor() {
        this.vertices = {}
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = []
        }
    }

    addEdges(vertex, edge) {
        if (this.vertices[vertex]) {
            this.vertices[vertex].push(edge)
        }
    }

    depthFirstTraverse() {
        var visited = {};
        Object.keys(this.vertices).forEach(vertex => {
            if (visited[vertex] !== true) {
                this.depthFirstTraverseUtil(vertex, visited)
            }
        })
    }

    depthFirstTraverseUtil(vertex, visited) {
        //handling data
        console.log("DFS : ",vertex);
        visited[vertex] = true;

        this.vertices[vertex].forEach(edge => {
            if (visited[edge] !== true) {
                this.depthFirstTraverseUtil(edge, visited)
            }
        })
    }

    breadthFirstTraverse(startVertex) {
        var visited = {};
        var queue = new Queue();

        queue.enqueue(startVertex)
        visited[startVertex] = true;

        while (!queue.isEmpty()) {
            let nodeVertex = queue.dequeue();

            // Handling Data
            console.log("BFS : ", nodeVertex)

            this.vertices[nodeVertex].forEach(edge => {
                if (visited[edge] !== true) {
                    queue.enqueue(edge)
                    visited[edge] = true;
                }
            })
        }
    }

    print() {
        return this.vertices
    }


    //  implement
    //  detectCycle()



}

module.exports.DirectedGraphList = DirectedGraphList;