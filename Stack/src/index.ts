import { Stack } from "./Stack/.";

const main = (): void => {
  const stack = new Stack<String>();

  stack.push("F");
  stack.push("I");
  stack.push("L");
  stack.push("I");
  stack.push("P");

  stack.print();

  stack.pop();
  stack.print();

  console.log(stack);
};

main();
