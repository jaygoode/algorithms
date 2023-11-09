function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    //recurse
    //pre
    walk(curr.left, path);

    //recurse
    walk(curr.right, path);

    //post
    path.push(curr.value);
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {}
