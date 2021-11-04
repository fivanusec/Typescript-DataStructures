interface IHeap<T> {
    insert(data: T):void;
    deleteMin(): T | undefined;
    size(): number;
    heapifyUp(idx: number):void;
    heapifyDown(idx: number):void;
    leftChild(idx: number): number | undefined;
    rightChild(idx: number): number | undefined;
    swap(arr: Array<T>, i: number, j: number): void;
    parent(idx: number): number;
}

export class Heap<T> implements IHeap<T> {
    private data:T[] = [];

    public insert(data: T): void {
        this.data.push(data);
        this.heapifyUp(this.data.length - 1);
    }

    public deleteMin(): T | undefined {
        if(this.size() > 0) {
            let item = this.data[0];
            this.data[0] = this.data.pop();
            this.heapifyDown(0);
            return item;
        }
        return undefined;
    }

    public size(): number {
        return this.data.length;
    }

    heapifyUp(idx: number): void {
        let parent = this.parent(idx);
        if(parent >= 0 && this.data[parent] > this.data[idx]){
           this.swap(this.data, parent, idx);
           this.heapifyUp(parent);
        }
    }

    heapifyDown(idx: number): void {
        let smallest = idx;
        let leftChild = this.leftChild(idx);
        let rightChild = this.rightChild(idx);

        if(leftChild < this.size() && this.data[leftChild] < this.data[idx]) {
            smallest = leftChild;
        }

        if(rightChild < this.size() && this.data[rightChild] < this.data[smallest]) {
            smallest = rightChild;
        }

        if(smallest !== idx) {
            this.swap(this.data, idx, smallest);
            this.heapifyDown(smallest);
        }
    }

    parent(idx: number): number {
        if(idx < 0) return -1;
        return Math.floor((idx - 1)/2);
    }

    leftChild(idx: number): number | undefined {
        if(idx > 0) {
            return Math.floor((2 * idx + 1) / 2);
        }
        return undefined;
    }

    rightChild(idx: number): number | undefined {
        if(idx > 0) {
            return Math.floor((2 * idx + 2) / 2);
        }
        return undefined;
    }

    swap(arr: Array<T>, i: number, j: number): void {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
