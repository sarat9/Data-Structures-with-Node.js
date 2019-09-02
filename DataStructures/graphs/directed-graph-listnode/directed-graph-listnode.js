
// Weighted Directed Graph -Adjecency List 

const { Queue } = require('../../queue/queue');
const { DirectedGraphListnodeNode } = require('./directed-graph-listnode-Node')

class DirectedGraphListnode {
    constructor() {
        this.vertices = {}
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            let vertexNode = new DirectedGraphListnodeNode(vertex);
            this.vertices[vertex] = vertexNode;
        }
    }

    addEdges(vertex, edge) {
        if (this.vertices[vertex] && this.vertices[edge]) {
            this.vertices[vertex].addEdge(this.vertices[edge])
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
        console.log("DFS : ", vertex);
        visited[vertex] = true;

        this.vertices[vertex].edges.forEach(edge => {
            if (visited[edge.vertex] !== true) {
                this.depthFirstTraverseUtil(edge.vertex, visited)
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

            this.vertices[nodeVertex].edges.forEach(edge => {
                if (visited[edge.vertex] !== true) {
                    queue.enqueue(edge.vertex)
                    visited[edge.vertex] = true;
                }
            })


        }
    }


    print() {
        console.log("The vetices are ", this.vertices)
        Object.keys(this.vertices).forEach(v => {
            console.log("Edges for ", v, " are \n", this.vertices[v].edges);
        })
    }

}


module.exports.DirectedGraphListnode = DirectedGraphListnode;