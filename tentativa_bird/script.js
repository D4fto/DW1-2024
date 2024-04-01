const passaro = document.getElementById("passaro")
const div_cano = document.getElementById("canos")
const contador_pontos = document.getElementById("ponto")
const button_start = document.getElementById("button_start")
const button_score = document.getElementById("button_score")
const maior_ponto = document.getElementById("maior_ponto")
altura_passaro = 50
velocidade_pulo = 0
pulo_ok = true
rotation = 0
canos=0
pontos = 0
cano_passado = null
x=0
contador = 0
fps=0
min = 1000
rodada_teste = true
proporcao_fps=1
velocidade = 2*proporcao_fps
media_fps = null
timer_cano = null
timer_fps = null
function iniate(){
    button_start.style.visibility = "hidden"
    button_score.style.visibility = "hidden"
    for(var i=0;i<div_cano.querySelectorAll("img").length*4;i++){
        
        div_cano.querySelectorAll("img")[0].parentElement.removeChild(div_cano.querySelectorAll("img")[0])
        
        }
    velocidade = 2*proporcao_fps
    timer_fps = setInterval(function(){
        update()
    }, 10);
    timer_cano = setInterval(function(){-
        gerar_canos()
        
    }, 1200)*proporcao_fps;
}
function reset(){
    button_start.style.visibility = "visible"
    button_score.style.visibility = "visible"
    clearInterval(timer_cano)
    clearInterval(timer_fps)
    
}
function detectar_colisao(pos1,pos2,tam1,tam2){

    if(((pos1[1]>pos2[1]&pos1[1]+tam1[1]<pos2[1]+tam2[1])||(pos1[1]<pos2[1]&pos1[1]+tam1[1]>pos2[1])||(pos1[1]<pos2[1]+tam2[1]&pos1[1]+tam1[1]>pos2[1]+tam2[1]))&((pos1[0]<pos2[0]&pos1[0]+tam1[0]>pos2[0])||(pos1[0]<pos2[0]+tam2[0]&pos1[0]+tam1[0]>pos2[0]+tam2[0])||(pos1[0]>pos2[0]&pos1[0]+tam1[0]<pos2[0]+tam2[0]))){
        return true
    }
    else{
        
        return false
    }
}


function gravidade(){
    altura_passaro += 1*proporcao_fps
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
            cano.style.top = String(altura*100+22)+"vh"
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
    velocidade_pulo=1.9*proporcao_fps
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
    if (div_cano.querySelectorAll("img").length<4){
        canos = div_cano.querySelectorAll("img").length
    }
    else{
        canos = 4
    }
    for(var i = 0;i<canos;i++){

        if(div_cano.querySelectorAll("img")[i].style.top !=""){
            

            if (detectar_colisao([window.innerWidth*(parseFloat(passaro.style.left)/100),window.innerHeight*(parseFloat(passaro.style.top)/100)],[window.innerWidth*(parseFloat(div_cano.querySelectorAll("img")[i].style.left)/100),window.innerHeight*(parseFloat(div_cano.querySelectorAll("img")[i].style.top)/100)],[passaro.clientWidth,passaro.clientHeight],[div_cano.querySelectorAll("img")[i].clientWidth,div_cano.querySelectorAll("img")[i].clientHeight])){
            
                pontos=0
                contador_pontos.innerText = pontos
                reset()
                break
            }
            else{
                passaro.style.backgroundColor = ""
                
                
            }
        }
        else{
            
            
            if (detectar_colisao([window.innerWidth*(parseFloat(passaro.style.left)/100),window.innerHeight*(parseFloat(passaro.style.top)/100)],[window.innerWidth*(parseFloat(div_cano.querySelectorAll("img")[i].style.left)/100),window.innerHeight*((100-parseFloat(div_cano.querySelectorAll("img")[i].style.bottom))/100)-div_cano.querySelectorAll("img")[i].clientHeight],[passaro.clientWidth,passaro.clientHeight],[div_cano.querySelectorAll("img")[i].clientWidth,div_cano.querySelectorAll("img")[i].clientHeight])){
                
                pontos=0
                contador_pontos.innerText = pontos
                reset()
                break
            }
            else{
                passaro.style.backgroundColor = ""
                
                
                
            }
        }

        
    }
        
    
    
    if(div_cano.querySelectorAll("img")[0]!=null & div_cano.querySelectorAll("img")[0]!=cano_passado ){
        if(parseInt(div_cano.querySelectorAll("img")[0].style.left)<parseInt(passaro.style.left)){
            if (x == 5){
                pontos+=1
                cano_passado=div_cano.querySelectorAll("img")[0]
                contador_pontos.innerText = pontos
                if (parseInt(maior_ponto.innerText) < pontos){
                    maior_ponto.innerText=pontos
                }
                x=0
            }
            else{
                x++
            }
        }
    }

    mover_canos()
    parallax(0.02*velocidade,"nuvem")
    parallax(0.05*velocidade,"cidade")
    parallax(0.1*velocidade,"arbusto")
    parallax(0.2*velocidade,"chao")
    passaro.style.top = String(altura_passaro)+"vh"
    passaro.style.rotate = String(rotation)+"deg"
    
    if (altura_passaro/100*window.innerHeight<window.innerHeight-passaro.clientHeight-(document.getElementById("chao1").clientHeight*1.1)){
        gravidade()
    }
    if (velocidade_pulo>0){
        velocidade_pulo-=0.03*proporcao_fps*proporcao_fps
        rotation = velocidade_pulo*-1*25/proporcao_fps
        altura_passaro-=velocidade_pulo
    }
    else if(rotation<45 & altura_passaro/100*window.innerHeight<window.innerHeight-passaro.clientHeight-(document.getElementById("chao1").clientHeight*1.1)){
        rotation += 1
    }
    else if(rotation<0){
        rotation += 1
    }
    else if(rotation>0){
        rotation -= 1
    }
    contador++
    // if (rodada_teste){ 
    //     requestAnimationFrame(update);
    // }
    
}
setInterval(function(){
    
    // if (rodada_teste){
    //     if (media_fps == null){
    //         media_fps=contador
    //     }
    //     if(min>contador){
    //         min=contador
    //     }
    //     media_fps=(contador+media_fps)/2
    // }
    // console.log(contador)
    contador=0
}, 1000);

    // update()
    // setInterval(function(){
    //     if(rodada_teste){
    //         rodada_teste=false
    //         if(media_fps<40){
    //             fps = parseInt(1000/parseInt(media_fps-10))
    //         }
    //         else{
    //             fps = parseInt(1000/parseInt(min))
    //         }
    //         fps = 10
    //         proporcao_fps=(10/fps).toFixed(4)
    //         velocidade *= proporcao_fps
    //         console.log(proporcao_fps)
    //         console.log(fps)
    //         console.log(contador)
    //         console.log(media_fps)
            
    //     }
        
    // }, 10000);
button_start.addEventListener("click",function(){
    iniate()
})
    