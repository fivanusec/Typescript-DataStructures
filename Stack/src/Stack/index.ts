interface IStack<T> {
  push(data: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity = Infinity) {}

  push(data: T): void {
    if (this.size() === this.capacity) throw Error("Stack is full!");
    this.storage.push(data);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  print(): void {
    this.storage.map((e) => console.log(e)).flat();
  }
}
