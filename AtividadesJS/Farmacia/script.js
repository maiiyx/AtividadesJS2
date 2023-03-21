const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click' , () => {
    let inName = document.getElementById('inName');
    let inPreco = document.getElementById('inPreco');
    let outName = document.getElementById('outName');
    let outPromocao = document.getElementById('outPromocao');

    let name = inName.value;
    let preco = inPreco.value;

    outName.textContent = `Pomoção de ${name}`;
    outPromocao.textContent = `Leve 2 por ${Math.floor(preco*2)}`
})