
// Weighted Directed Graph -Adjecency List 

const { Queue } = require('../../queue/queue');

class WeightedDirectedGraph {
    constructor() {
        this.vertices = {}
    }

    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = {}
        }
    }

    addEdges(vertex, edge, weight = 0) {
        if (this.vertices[vertex]) {
            this.vertices[vertex][edge] = weight;
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
        console.log(vertex);
        visited[vertex] = true;

        Object.keys(this.vertices[vertex]).forEach(edge => {
            if (visited[edge.vertex] !== true) {
                this.depthFirstTraverseUtil(edge.vertex, visited)
            }
        })
    }

    breadthFirstTraverse(startVertex) {
        var visited = {};
        var queue = new Queue();

        let nodeVertex = {
            vertex: startVertex,
            weight: 0
        }
        queue.enqueue(nodeVertex)
        visited[startVertex] = true;

        while (!queue.isEmpty()) {
            let nodeVertex = queue.dequeue();

            // Handling Data
            // console.log("BFS Vertex : ", nodeVertex.vertex, " Weight : ", nodeVertex.weight);
            console.log("BFS Vertex : ", nodeVertex.vertex);

            Object.keys(this.vertices[nodeVertex.vertex]).forEach(edge => {
                if (visited[edge] !== true) {
                    let edgeVertex = {
                        vertex: edge,
                        weight: this.vertices[nodeVertex.vertex][edge]
                    }
                    queue.enqueue(edgeVertex)
                    visited[edge] = true;
                }
            })
        }
    }

    print() {
        return this.vertices
    }

    dijkstraAlgo() {
        // Dijkstra Algorithm - Finding the nearest path to other Nodes from a Node

    }

}


module.exports.WeightedDirectedGraph = WeightedDirectedGraph;