import { Queue } from "./Queue/.";

const main = (): void => {
  const queue = new Queue<number>();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  console.log(queue);
  console.log(queue.size());

  queue.dequeue();

  console.log(queue);
  console.log(queue.size());
};

main();
