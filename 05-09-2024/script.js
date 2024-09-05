function calcular(vmax,vcar){
    vmax=Number(vmax)
    vcar=Number(vcar)
    if(vmax>=vcar){
        return false
    }else{
        return (vcar-vmax)/vmax
    }
}
const botao = document.getElementById('calcular')
const vmaxInput = document.getElementById('vmax')
const vcarInput = document.getElementById('vcar')
const percent = document.getElementById('percent')
const multaOut = document.getElementById('multaOut')
botao.addEventListener('click',()=>{
    const result = calcular(vmaxInput.value,vcarInput.value)
    console.log(result)
    if(result!==false){
        percent.innerHTML=(result*100).toFixed(2)
        if(result<0.2){
            multaOut.innerHTML='130,16'
            return
        }
        if(result<=0.5){
            multaOut.innerHTML='195,23'
            return
        }
        multaOut.innerHTML='880,41'
        return
    }
    percent.innerHTML='...'
    multaOut.innerHTML='...'
    return
})