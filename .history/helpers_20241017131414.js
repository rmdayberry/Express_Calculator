function calculateMean(nums) {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  return sum / nums.length;
}

function calculateMedian(nums) {
  nums.sort((a, b) => a - b);
  const mid = Math.floor(nums.length / 2);

  return nums.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
}

function calculateMode(nums) {
  const frequency = {};
  let maxFreq = 0;
  let mode;

  nums.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
      mode = num;
    }
  });
  return mode;
}

function convertAndValidateNumsArray(numsStr){
  const nums = numsStr.split(',').map(num=>{
    if(isNaN(Number(num))) {
      throw new Error(`'${num}' is not a valid number.`);
    }
    return Number(num);
  })
  return nums;
}

module.exports= {calculateMean, calculateMedian, calculateMode, convertAndValidateNumsArray};