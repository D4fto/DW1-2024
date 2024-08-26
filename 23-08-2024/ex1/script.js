function calcularJuros(c, i, n){
    return Number(c)*(1+(Number(i)/100))**Number(n)
}
function calc(){
    let montante = calcularJuros(document.getElementById('capital').value,document.getElementById('taxa').value,document.getElementById('periodo').value)
    document.getElementById('montante').innerText=montante.toFixed(2)
    document.getElementById('capital2').innerText=document.getElementById('capital').value
    document.getElementById('juros').innerText=(montante-Number(document.getElementById('capital').value)).toFixed(2)
}
document.getElementById('calcular').onclick = calc