function sumArray(arr){
    let sum = 0
    for (const element of arr) {
        sum+=element
    }
    return sum
}
// console.log(sumArray([1, 2, 3, 4])); // Deve exibir: 10
// console.log(sumArray([10, -10, 10])); // Deve exibir: 10
function findMax(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>arr[arr.length-1]){
            arr[arr.length-1]=arr[i]
        }
    }
    return arr[arr.length-1]
}
// console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5
// console.log(findMax([-10, 0, 10, 5])); // Deve exibir: 10
function countOccurrences(arr, element){
    let count = 0
    for (const item of arr) {
        if(item===element){
            count+=1
        }
    }
    return count
}
// console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
// console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2
function allEquals(arr){
    for (const element of arr) {
        if(arr[0]!==element){
            return false
        }
    }
    return true
}
// console.log(allEquals([1, 1, 1])); // Deve exibir: true
// console.log(allEquals([1, 2, 1])); // Deve exibir: false
