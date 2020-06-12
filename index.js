const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce((total, element) => element + total)

// which is the sum of all of the battery amounts in the batteryBatches array. Naturally, use reduce() for this!