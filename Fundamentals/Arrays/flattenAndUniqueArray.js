const flattenAndUnique = (arr) => {
    return [...new Set(arr.flat(2))].sort((a, b) => a - b);
};

const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
const result = flattenAndUnique(nestedArray);
console.log(result); // Output: [1, 2, 3, 4, 5]
