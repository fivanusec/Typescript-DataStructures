import { BinarySearchTree } from './BST/.'

const main = (): void => {
    const comparator = (a: number, b:number) => {
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    };

    const bst = new BinarySearchTree(comparator);
    bst.insert(5);

    bst.insert(2);
    bst.insert(3);
    bst.insert(1);

    bst.insert(7);
    bst.insert(6);
    bst.insert(8);

    bst.inOrderTraversal(bst.root);
};

main();
