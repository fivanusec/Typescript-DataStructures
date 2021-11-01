export class BinarySearchTreeNode<T> {
    public leftNode: BinarySearchTreeNode<T> | null = null;
    public rightNode: BinarySearchTreeNode<T> | null = null;
    constructor(public data: T) {}
}

interface IBinarySearchTree<T> {
    insert(data: T): BinarySearchTreeNode<T> | null;
    search(data: T): BinarySearchTreeNode<T> | null;
    inOrderTraversal(node: BinarySearchTreeNode<T> | null): void;
    preOrderTraversal(node: BinarySearchTreeNode<T> | null): void;
    postOrderTraversal(node: BinarySearchTreeNode<T> | null): void;
}

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
    public root: BinarySearchTreeNode<T>;
    private comparator: (a: T, b:T) => number;

    constructor(comparator: (a: T, b:T) => number){
        this.comparator = comparator;
    }

    insert(data: T): BinarySearchTreeNode<T> | null {
        if(!this.root) {
            this.root = new BinarySearchTreeNode(data);
            return this.root;
        }

        let curr = this.root;

        while(true){
            if(this.comparator(data, curr.data)===1){
                if(curr.rightNode) {
                    curr = curr.rightNode;
                } else {
                    curr.rightNode = new BinarySearchTreeNode(data);
                    return curr.rightNode;
                }
            } else {
                if(curr.leftNode){
                    curr = curr.leftNode;
                } else {
                    curr.leftNode = new BinarySearchTreeNode(data);
                    return curr.leftNode;
                }
            }
        }
    }

    search(data: T): BinarySearchTreeNode<T> | null {
        if(!this.root) return null;

        let curr = this.root;
        while(this.comparator(data, curr.data) !== 0) {
            if(this.comparator(data, curr.data) === 1) {
                if(!curr.rightNode) return null;
                curr = curr.rightNode;
            } else {
                if(!curr.leftNode) return null;
                curr = curr.leftNode;
            }
        }
        return curr;
    }
    
    inOrderTraversal(node: BinarySearchTreeNode<T> | null): void {
        if(node) {
            this.inOrderTraversal(node.rightNode);
            console.log(node.data);
            this.inOrderTraversal(node.leftNode);
        }
    }

    preOrderTraversal(node: BinarySearchTreeNode<T> | null):void {
        if(node) {
            console.log(node.data);
            this.preOrderTraversal(node.rightNode);
            this.preOrderTraversal(node.leftNode);
        }
    }
    
    postOrderTraversal(node: BinarySearchTreeNode<T> | null):void {
        if(node) {
            this.postOrderTraversal(node.rightNode);
            this.postOrderTraversal(node.leftNode);
            console.log(node.data);
        }
    }
}
