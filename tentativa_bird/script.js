const passaro = document.getElementById("passaro")
altura_passaro = 0
velocidade_pulo = 0
function gravidade(){
    altura_passaro += 3
}
document.querySelector("body").onkeydown = (event) => {
    pulo()
}
function pulo(){
    velocidade_pulo=12
}
function update() {

    passaro.style.top = String(altura_passaro)+"px"
    gravidade()
    if (velocidade_pulo>0){
        velocidade_pulo-=0.5
        altura_passaro-=velocidade_pulo
    }
    if (true) {
        requestAnimationFrame(update);
    }
}

requestAnimationFrame(update);