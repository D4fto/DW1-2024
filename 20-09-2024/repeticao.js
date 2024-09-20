function _01(n){
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
}
function _02(n){
    for (let i = n; i >= 1; i--) {
        console.log(i)
    }
}
function _03(n){
    for (let i = 2; i <= n; i+=2) {
        console.log(i)
    }
}
function _04(n){
    for (let i = 2; i < n; i++) {
        if(n%i==0){
            return false
        }
    }
    return true
}
function _05(n){
    let primo=2
    for(let i = 0; i<n; i++){
        console.log(primo)
        while(true){
            primo++
            if(_04(primo)){
                break
            }
        }
    }
}

function _06(n){
    fatorial=1
    for (let i = n; i >1; i--) {
        fatorial*=i
    }
    console.log(fatorial)
}

_01(7)
console.log('\n')
_02(7)
console.log('\n')
_03(15)
console.log('\n')
console.log(_04(13))
console.log('\n')
console.log(_04(15))
console.log('\n')
_05(15)
console.log('\n')
_06(5)