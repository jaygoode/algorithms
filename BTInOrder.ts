function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  //binary tree in order
  if (!curr) {
    return path;
  }

  //recurse
  //pre
  walk(curr.left, path);

  //recurse
  path.push(curr.value);
  walk(curr.right, path);

  //post
  return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
