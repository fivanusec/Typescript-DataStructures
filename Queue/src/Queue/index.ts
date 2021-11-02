interface IQueue<T> {
  enqueue(data: T): void;
  dequeue(): T | undefined;
  size(): number;
}

export class Queue<T> implements IQueue<T> {
  private storage: T[] = [];

  constructor(public capacity: number = Infinity) {}

  enqueue(data: T): void {
    if (this.size() === this.capacity) throw Error("Queue is full");
    this.storage.push(data);
  }

  dequeue(): T | undefined {
    return this.storage.pop();
  }

  size(): number {
    return this.storage.length;
  }
}
