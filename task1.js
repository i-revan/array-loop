let arr = [1, 9, 12, 7, 4];
for (let i = 0; i < arr.length; i++) {
  let temp;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}
console.log(arr);
