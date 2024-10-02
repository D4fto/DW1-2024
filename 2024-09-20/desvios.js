function idade(idade){
    if(idade>=5&&idade<=7){
        return 'infantil A'
    }
    if(idade>=8&&idade<=10){
        return 'infantil B'
    }
    if(idade>=11&&idade<=13){
        return 'juvenil A'
    }
    if(idade>=14&&idade<=17){
        return 'juvenil B'
    }
    if(idade>=18){
        return 'adulto'
    }
    return 'idade inválida'
}

function trianguloValido(med1, med2, med3){
    let condicao1 = false
    let condicao2 = false
    let condicao3 = false

    if(med1<med2+med3&&med1>(med2>med3?med2-med3:med3-med2)){
        condicao1=true
    }
    if(med2<med1+med3&&med2>(med1>med3?med1-med3:med3-med1)){
        condicao2=true
    }
    if(med3<med2+med1&&med3>(med2>med1?med2-med1:med1-med2)){
        condicao3=true
    }
    if(condicao1&&condicao2&&condicao3){
        return true
    }
    return false
}
function trianguloTipo(med1, med2, med3){
    if(!trianguloValido(med1, med2, med3)){
        return 'inválido'
    }
    if(med1===med2&&med1===med3){
        return 'equilátero'
    }
    if(med1===med2||med1===med3){
        return 'isóceles'
    }
    return 'escaleno'
}
function dosagem(idade,peso){
    if(idade<0){
        return 'idade inválida'
    }
    if(peso<=5){
        return 'peso muito pequeno'
    }
    if(idade>=12){
        if (peso>=60) {
            return '1000 mg'
        }
        return '875 mg'
    }
    if(peso>5&&peso<=9){
        return '125 mg'
    }
    if(peso>9&&peso<=16){
        return '250 mg'
    }
    if(peso>16&&peso<=240){
        return '500mg'
    }
    return '750 mg'
}
function centimetros(centimetros,str){
    if(str=='m'){
        return centimetros/100
    }
    if(str=='mm'){
        return centimetros*10
    }
    if(str=='km'){
        return centimetros/100000
    }
    return 'inválido'
}
function bissexto(ano){
    if(!(ano%400)||(!(ano%4)&&ano%100)){
        return 'bissexto'
    }
    return 'não bissexto'
}
function compensa(alcool,gas){
    if(alcool<gas*0.7){
        return true
    }
    return false
}


console.log(idade(16))
console.log(trianguloValido(3,4,5)+'\n')
console.log(trianguloTipo(3,4,5)+'\n')
console.log(dosagem(7,13)+'\n')
console.log(centimetros(100,'m')+'\n')
console.log(centimetros(100,'mm')+'\n')
console.log(centimetros(100,'km')+'\n')
console.log(bissexto(400)+'\n')
console.log(bissexto(2020)+'\n')
console.log(compensa(69,100)+'\n')

