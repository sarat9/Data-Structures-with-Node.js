
// Directed Graph - Adjecency List - Node Object
// Another Implementation

class DirectedGraphListnodeNode {
    constructor(vertex) {
        this.vertex = vertex;
        this.edges = [];
    }

    addEdge(edge) {
        this.edges.push(edge);
    }
}


module.exports.DirectedGraphListnodeNode = DirectedGraphListnodeNode;