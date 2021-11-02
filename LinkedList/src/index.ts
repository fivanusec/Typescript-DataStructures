import { LinkedList } from "./LinkedList/.";

interface Post {
  title: string;
}

const main = () => {
  const list = new LinkedList<Post>();

  console.log(list.traverse());

  list.insertAtEnd({ title: "Post A" });
  list.insertAtEnd({ title: "Post B" });
  list.insertInBegin({ title: "Post C" });
  list.insertInBegin({ title: "Post D" });

  console.log(list.traverse());
  console.log(list.search(({ title }) => title === "Post A"));
};

main();
