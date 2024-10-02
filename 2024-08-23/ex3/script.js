function calcular(){
    document.getElementById('gasto').innerText = (document.getElementById('dist').value/document.getElementById('autonomia').value)+Number(document.getElementById('ped').value)
}
document.getElementById('calcular').onclick = calcular