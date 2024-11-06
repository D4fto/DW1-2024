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
function removeDuplicates(arr){
    let arr2 = []
    for (const element of arr) {
        if(countOccurrences(arr2,element)===0){
            arr2[arr2.length]=element
        }
    }
    return arr2
}
// console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
// console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]
function average(arr){
    return sumArray(arr)/arr.length
}
// console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
// console.log(average([10, 20, 30])); // Deve exibir: 20
function mergeArrays(arr1, arr2){
    for (let i = 0; i < arr2.length; i++) {
        arr1[arr1.length]=arr2[i]
    }
    return arr1
}
// console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
// console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]
function getEvenNumbers(arr){
    let arr2 = []
    for (const element of arr) {
        if(element%2==0){
            arr2[arr2.length]=element
        }
    }
    return arr2
}
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]
// console.log(getEvenNumbers([10, 15, 20, 25])); // Deve exibir: [10, 20]
function reverseArray(arr){
    let arr2 = []
    for (let i = arr.length-1; i >=0; i--){
        arr2[arr2.length]=arr[i]
        
    }
    return arr2
}
// console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
// console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"] 
function findIndex(arr, element){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===element){
            return i
        }
    }
    return -1
}
// console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
// console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1