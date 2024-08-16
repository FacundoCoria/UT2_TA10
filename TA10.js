function getSum(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    console.log(sum);
}

getSum([1, 2, 3, 4, 5]);
