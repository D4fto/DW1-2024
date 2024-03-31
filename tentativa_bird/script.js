const passaro = document.getElementById("passaro")
const div_cano = document.getElementById("canos")
const contador_pontos = document.getElementById("ponto")
altura_passaro = 0
velocidade_pulo = 0
pulo_ok = true
rotation = 0
velocidade = 1
pontos = 0
cano_passado = null
x=0
function gravidade(){
    altura_passaro += 0.5
}
document.querySelector("body").onkeydown = (event) => {
    if (pulo_ok & altura_passaro>0){
        pulo()
        pulo_ok = false
    }
    
}
document.querySelector("body").onkeyup = (event) => {
    pulo_ok = true
    
}

function gerar_canos(){
    
    altura = Math.random() * (0.8 - 0.1) + 0.1
    for(var i = 1; i<=2;i++){
        cano = document.createElement("img");
        cano.src = "./Sprites/cano_"+String(i)+".png"
        cano.style.position = "absolute"
        cano.style.height = "100vh"
        cano.style.left="110vw"
        if (i == 1){
            cano.style.bottom = String(-1*altura*100+100)+"vh"
        }
        if (i == 2){
            cano.style.top = String(altura*100+20)+"vh"
        }
        
        div_cano.insertAdjacentElement("beforeend", cano)
    }
    
}

function parallax(speed,item){
    for (var i=1;i<=3;i++ ){
        document.getElementById(item+String(i)).style.left = String(parseFloat(document.getElementById(item+String(i)).style.left)-speed)+"vw"
        if (parseFloat(document.getElementById(item+String(i)).style.left)-speed<-50){
            document.getElementById(item+String(i)).style.left = String(100+parseFloat(document.getElementById(item+String(i)).style.left)-speed+50)+"vw"
        }
    }
}

function pulo(){
    velocidade_pulo=1.2
}
function mover_canos(){
    for(i=0;i<div_cano.querySelectorAll("img").length;i++){
        
        div_cano.querySelectorAll("img")[i].style.left=String(parseFloat(div_cano.querySelectorAll("img")[i].style.left)-(velocidade*0.2))+"vw"
        if (parseInt(div_cano.querySelectorAll("img")[i].style.left)<-10){
            div_cano.querySelectorAll("img")[i].parentElement.removeChild(div_cano.querySelectorAll("img")[i])
        }
    }
    
}



function update() {
    if(div_cano.querySelectorAll("img")[0]!=null & div_cano.querySelectorAll("img")[0]!=cano_passado ){
        if(parseInt(div_cano.querySelectorAll("img")[0].style.left)<parseInt(passaro.style.left)){
            if (x == 10){
                pontos+=1
                cano_passado=div_cano.querySelectorAll("img")[0]
                contador_pontos.innerText = pontos
                x=0
            }
            else{
                x++
            }
        }
    }
    passaro.height = document.getElementById("chao1").height*0.75
    mover_canos()
    parallax(0.02*velocidade,"nuvem")
    parallax(0.05*velocidade,"cidade")
    parallax(0.1*velocidade,"arbusto")
    parallax(0.2*velocidade,"chao")
    passaro.style.top = String(altura_passaro)+"vh"
    passaro.style.rotate = String(rotation)+"deg"
    
        if (altura_passaro/100*window.innerHeight<window.innerHeight-passaro.height-document.getElementById("chao1").height){
            gravidade()
    }
    if (velocidade_pulo>0){
        velocidade_pulo-=0.03
        rotation = velocidade_pulo*-1*75
        altura_passaro-=velocidade_pulo
    }
    else if(rotation<45 & altura_passaro/100*window.innerHeight<window.innerHeight-passaro.height-document.getElementById("chao1").height){
        rotation += 1
    }
    else if(rotation<0){
        rotation += 1
    }
    else if(rotation>0){
        rotation -= 1
    }
    
    if (true) {
        requestAnimationFrame(update);
    }
}
setInterval(function(){
    gerar_canos()
}, 1500);
update()