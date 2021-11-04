import {Heap} from './Heap/.'

const main =():void => {
    const heap = new Heap<number>();

    heap.insert(5);
    heap.insert(10);
    heap.insert(25);
    heap.insert(7823);
    heap.insert(789);
    heap.insert(7283);

    console.log(heap);

    console.log(heap.deleteMin());

    console.log("Heap size " + heap.size());
};

main();
