
// DIJKSTRA ALGORITHM - to find the shortest path in a graph

let vertices = null;
let distance = {};
let visited = {};


function findOptimalPath(startNode, finishNode) {
    findShortestPath(startNode, finishNode);
    console.log('Finding Optimal Path');
    let shortestPath = [];
    let optimalDistance = 0;
    let node = finishNode;

    // Map Shortest Path: Loop from finish node to start node with parent
    while (node !== startNode) {
        shortestPath.unshift(node);
        node = distance[node].parent;
        optimalDistance = optimalDistance + distance[node].cost;
    }
    shortestPath.unshift(startNode);
    console.log(shortestPath)
    return {
        shortestPath,
        optimalDistance
    };
}

function getLowestCostNode(distance, visited) {
    //Returns Lowest non visited node
    var lowestNode = Object.keys(distance).reduce((lowest, node) => {
        if (lowest === null || distance[node].cost < distance[lowest].cost) {
            if (!visited[node]) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
    return lowestNode;
}

function findShortestPath(startNode, finishNode) {
    console.log("___________________", startNode, "_____________________________")
    visited[startNode] = true;

    //Checking Neighbour Vertices and its lowest Distance
    Object.keys(vertices[startNode]).forEach(vertex => {
        if (!distance[vertex] || distance[vertex].cost > vertices[startNode][vertex]) {
            distance[vertex] = { cost: vertices[startNode][vertex], parent: startNode }
        }
    })
    console.log('CHECK : distance', distance);
    let lowestCostNode = getLowestCostNode(distance, visited);
    console.log("lowestCostNode from Node : ", lowestCostNode)
    if (lowestCostNode) {
        findShortestPath(lowestCostNode, finishNode)
    }
}

module.exports.DijkstraAlgo = function (graphData, startNode = 'start', finishNode = 'finish') {
    console.log("Dijkstra Algorithm");
    console.log("The Graph is : ", graphData);
    vertices = graphData.vertices;
    distance = {};
    visited[startNode] = true;
    distance[startNode] = { cost: 0, parent: null };
    console.log("The Shortest Path is :", findOptimalPath(startNode, finishNode));
    return findOptimalPath(startNode, finishNode);
}