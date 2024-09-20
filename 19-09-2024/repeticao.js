function tabuada(x,y){
    let contador=0
    while(contador<=y){
        console.log(`${x} x ${contador} = ${x*contador}`)
        contador++
    }
    return
}
function tabuadafor(x,y){
    for(let i = 0;i<=y;i++){
        console.log(`${x} x ${i} = ${x*i}`)
    }
    return
}
tabuadafor(2,10)