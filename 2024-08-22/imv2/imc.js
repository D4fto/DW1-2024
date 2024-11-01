function getImc(){
    peso = Number(document.getElementById('peso').value)
    altura = Number(document.getElementById('altura').value)
    let imc = peso/(altura**2)
    console.log(imc)
    document.getElementById('imc').innerText = imc
}
document.getElementById("calc").onclick = getImc