const linhas = document.querySelectorAll('.linha')
for (const item of linhas) {
    item.addEventListener('mouseover',(event)=>{

        const grupos = event.currentTarget.querySelectorAll('.grupo')
        for (const element of grupos) {
            element.classList.add('paused')
        }
    })
    item.addEventListener('mouseout',(event)=>{
        const grupos = event.currentTarget.querySelectorAll('.grupo')
        for (const element of grupos) {
            element.classList.remove('paused')
        }
    })
}
const itens = document.querySelectorAll('.item')
for (const item of itens) {
    item.addEventListener('click',(event)=>{
        for (const item of itens) {
            if(event.currentTarget===item){
                continue
            }
            item.classList.remove('grande')
        }
        if(event.currentTarget.classList.contains('grande')){
            event.currentTarget.classList.remove('grande')
            return
        }
        event.currentTarget.classList.add('grande')
    })
    item.addEventListener('mouseout',(event)=>{
        event.currentTarget.classList.remove('grande')
    })
}
window.addEventListener('load', ()=>{
    window.scrollTo(window.scrollX, 0);
    const frase = 'Ainda é importante realizar uma graduação?'
    const titulo1 = document.getElementById('inicio').querySelector('h1')
    const titulo2 = document.getElementById('inicio').querySelector('h2')
    let x = 0
    
    let intervalo = setInterval(()=>{
        if(x>=frase.length-1){
            clearInterval(intervalo)
            // setInterval(()=>{
            //     if(titulo1.innerHTML[titulo1.innerHTML.length-1]==='_'){
            //         titulo1.innerHTML = titulo1.innerHTML.substring(0,titulo1.innerHTML.length-1)
            //         return
            //     }
            //     titulo1.innerHTML+='_'
            // },500)
        }
        titulo1.innerHTML+=frase[x]
        x+=1
    },125)
    setTimeout(()=>{
        const frase2 = 'E o porquê de a resposta ser sim.'
        let y = 0
        let intervalo2 = setInterval(()=>{
            if(y>=frase2.length-1){
                clearInterval(intervalo2)
            }
            titulo2.innerHTML+=frase2[y]
            y+=1
        },125)
    },125*frase.length+1000)
})