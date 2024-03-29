const medida1 = document.getElementById("medida1")
const medida2 = document.getElementById("medida2")
const unidade1 = document.getElementById("unidade1")
const unidade2 = document.getElementById("unidade2")


function atualizar_valor(){
    x=null
    if (unidade1.value == 1){
        x = medida1.value*1000
    }
    if (unidade1.value == 2){
        x = medida1.value
    }
    if (unidade1.value == 3){
        x = medida1.value/100
    }
    if (unidade1.value == 4){
        x = medida1.value/1000
    }
    if (unidade1.value == 5){
        x = medida1.value/0.00062137
        x = x.toFixed(2)
    }
    if (unidade1.value == 6){
        x = medida1.value/1.0936
        x = x.toFixed(2)

    }
    if (unidade1.value == 7){
        x = medida1.value/3.2808
        x = x.toFixed(2)
    }
    if (unidade1.value == 8){
        x = medida1.value/39.37
        x = x.toFixed(2)
    }
    if (unidade2.value == 0){
        x=null
    }
    if (unidade2.value == 1){
        x /= 1000
    }
    if (unidade2.value == 3){
        x *= 100
    }
    if (unidade2.value == 4){
        x *= 1000
    }
    if (unidade2.value == 5){
        x *= 0.00062137
    }
    if (unidade2.value == 6){
        x *= 1.0936
    }
    if (unidade2.value == 7){
        x *= 3.2808
    }
    if (unidade2.value == 8){
        x *= 39.37
    }
    medida2.value = x.toFixed(6)
}

unidade1.addEventListener('change', atualizar_valor)
unidade2.addEventListener('change', atualizar_valor)
medida1.addEventListener('input', atualizar_valor)

