let arr = [1, 45, 12, 9, 6];
let n = 6;
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
let start = 0;
let end = arr.length - 1;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === n) {
    console.log(mid);
    break;
  } else if (arr[mid] > n) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
