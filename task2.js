let nums1 = [9, 5, 3, 3, 6, 1];
let nums2 = [1, 3, 9, 7, 11, 5, 6];
let count = 0;
for (let i = 0; i < nums2.length; i++) {
  for (let j = 0; j < nums1.length; j++) {
    if (nums2[i] == nums1[j]) {
      count++;
    }
  }
}
if (count == nums1.length) {
  console.log(true);
} else {
  console.log(false);
}
