export default function bubble_sort(arr: number[]): void {
  //loop through whole arr
  for (let i = 0; i < arr.length; ++i) {
    //for each iter of outer loop, inner loop iters one less(-i), also up to but not incl last elem.(-1)
    for (let j = 0; j < arr.length - 1 - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}
