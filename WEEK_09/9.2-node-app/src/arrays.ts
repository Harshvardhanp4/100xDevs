function maxValue(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }

    let maxValue = arr[0]!;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]! > maxValue) {   // "!" ensures arr[i] is not undefined
            maxValue = arr[i]!;
        }
    }
    return maxValue;
}

console.log(maxValue([1, 2, 3]));    
console.log(maxValue([-5, -3, -10])); 
