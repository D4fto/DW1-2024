function reverseString(string){
    let newString = ''
    for (let i = string.length-1; i >=0; i--) {
        newString+=string[i]
    }
    return newString
}
function countVowels(string){
    string = string.toLowerCase()
    let vowels = 'aeiou'
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])){
            count+=1
        }
        
    }
    return count
}
function isPalindrome(str){
    return str === reverseString(str)
}
function countOccurrences(str, char){
    str = str.toLowerCase()
    char = char.toLowerCase()
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i]===char){
            count+=1
        }
        
    }
    return count
}
function getInitials(name){
    let initials = ''
    name = name.split(' ')
    for (let i = 0; i < name.length; i++) {
        initials += name[i][0];
        
    }
    return initials
}

function toSnakeCase(str){
    let newStr = ''
    str = str.toLowerCase().split(' ')
    newStr+=str[0]
    for (let i = 1; i < str.length; i++) {
        newStr += '_'+str[i];
        
    }
    return newStr
}

function capitalizeWords(str){
    let newStr = ''
    str = str.split(' ')
    for (let i = 0; i < str.length; i++) {
        str[i]=str[i][0].toUpperCase() + str[i].slice(1);
        
    }
    newStr+=str[0]
    for (let i = 1; i < str.length; i++) {
        newStr+=' '+str[i];
        
    }
    return newStr
}
function trimSpaces(str){
    let newStr = ''
    str = str.split(' ')
    for (let i = 1; i < str.length; i++) {
        if(str[i]!=''){
            if(newStr==''){
                newStr += str[i];
                continue
            }
            newStr += ' '+str[i];
        }
        
    }
    return newStr
}
function replaceChar(str, oldChar, newChar) {
    return str.replaceAll(oldChar, newChar)
}
function replaceChar2(str, oldChar, newChar) {
    let newStr=''
    for (let i = 0; i < str.length; i++) {
        if(str[i]===oldChar){
            newStr += newChar
            continue
        }
        newStr+=str[i]
        
    }
    return newStr
}

console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"

console.log('\n')


console.log(countVowels("OpenAI")); // Deve exibir: 4
console.log(countVowels("JavaScript")); // Deve exibir: 3

console.log('\n')

console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false

console.log('\n')

console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3


console.log('\n')

console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"

console.log('\n')


console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"


console.log('\n')

console.log(capitalizeWords("hello world")); // Deve exibir: "Hello World"
console.log(capitalizeWords("javaScript is awesome")); // Deve exibir: "JavaScript Is Awesome"

console.log('\n')


console.log(trimSpaces("   JavaScript    é     divertido    ")); // Deve exibir: "JavaScript é divertido"
console.log(trimSpaces("   Programação     é   interessante  ")); // Deve exibir: "Programação é interessante"


console.log('\n')

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"