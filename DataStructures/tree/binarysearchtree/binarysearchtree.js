
// BINARY SEARCH TREE

const { BSTreeNode } = require('./BSTree-node')
const { Queue } = require('../../queue/queue');


class BinarySearchTree {

    constructor() {
        // root of a binary seach tree 
        this.root = null;
    }

    insert(data) {
        let newNode = new BSTreeNode(data);

        if (this.root === null) {
            // If Root Node is Empty
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(rootNode, newNode) {
        if (rootNode.data >= newNode.data) {
            //Root Node is greater than new Node
            if (rootNode.left === null) {
                rootNode.left = newNode;
            }
            else {
                this.insertNode(rootNode.left, newNode)
            }
        }
        else if (rootNode.data < newNode.data) {
            //Root Node is lesser than new Node
            if (rootNode.right === null) {
                rootNode.right = newNode;
            }
            else {
                this.insertNode(rootNode.right, newNode)
            }
        }
        else {
            console.error("something wrong")
        }
    }

    remove(data) {
        this.root = this.removeData(this.root, data);
    }

    removeData(node, data) {
        if (!node) {
            console.error("findNode(): Value doesn't exist in Binary Search Tree", data)
            return null;
        }
        else if (data < node.data) {
            node.left = this.removeData(node.left, data)
            return node;
        }
        else if (data > node.data) {
            node.right = this.removeData(node.right, data)
            return node;
        }
        else if (node.data === data) {
            if (!node.left && !node.right) {
                //No Child Nodes
                node = null;
                return node;
            }
            else if ((node.left && !node.right) || (!node.left && node.right)) {
                //One Child Left or Right
                if (node.left) {
                    node = node.left
                }
                if (node.right) {
                    node = node.right
                }
                return node;
            }
            else if (node.left && node.right) {
                //Two Children
                //Assigning right child tree minimum node value to the deletable node
                let rightMinNode = this.findMinNode(node.right);
                node.data = rightMinNode.data;
                node.right = this.removeData(node.right, rightMinNode.data);
                return node;
            }
        }
    }

    findNode(node, data) {
        if (!node) {
            console.error("findNode(): Value doesn't exist in Binary Search Tree", data)
            return null;
        }
        else if (node.data === data) {
            return node;
        }
        else if (data <= node.data) {
            return this.findNode(node.left, data)
        }
        else if (data > node.data) {
            return this.findNode(node.right, data)
        }
        else {
            return null;
        }
    }

    findMinNode(minNode = this.root) {
        // let minNode = this.root;
        while (minNode.left !== null) {
            minNode = minNode.left;
        }
        return minNode;
    }

    getRootNode() {
        return this.root;
    }

    depthFirstTraversal() {
        // Depth First Traversal 
        console.log('Depth First Traversal')
        console.log('DFS - PREORDER')
        this.preorder();
        console.log('DFS - INORDER')
        this.inorder();
        console.log('DFS - POSTORDER')
        this.postorder();
    }

    preorder(node = this.root) {
        //Depth First Search - PREORDER
        // -> Root -> Left -> Right
        if (node) {
            console.log(node.data)
            this.preorder(node.left);
            this.preorder(node.right)
        }
    }

    inorder(node = this.root) {
        //Depth First Search - INORDER
        // -> Left -> Root -> Right
        if (node) {
            this.inorder(node.left);
            console.log(node.data)
            this.inorder(node.right)
        }
    }

    postorder(node = this.root) {
        //Depth First Search - POSTORDER
        // -> Left -> Right -> Root
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right)
            console.log(node.data)
        }
    }


    breadthFirstTraversal(node = this.root) {
        //Breadth First Traversal - Level by Level
        console.log("Breadth First Traversal - Level by Level")
        let queue = new Queue();
        //Adding node to the queue
        queue.enqueue(node);
        while (!queue.isEmpty()) {
            // Taking the First In Element Node
            let qNode = queue.dequeue();

            //Adding the First In Element Node's left and right children to the queue
            if (qNode.left) {
                queue.enqueue(qNode.left)
            }
            if (qNode.right) {
                queue.enqueue(qNode.right)
            }

            //Handling data
            console.log(qNode.data)
        }
    }

}


module.exports.BinarySearchTree = BinarySearchTree