const btnConverter = document.getElementById('btnConverter');


btnConverter.addEventListener('click', () => {
    let inName = document.getElementById('inName');
    let inPreco = document.getElementById('inPreco');
    let outName = document.getElementById('outName');
    let outPreco = document.getElementById('outPreco');
    let outDivisao = document.getElementById('outDivisao');


    let name = inName.value;
    let preco = inPreco.value;


    outName.textContent = name;
    outPreco.textContent = `Entrada de R$ ${Math.floor(preco/2)}`
    outDivisao.textContent = `12x de R$ ${Math.floor(preco/12)}`
})