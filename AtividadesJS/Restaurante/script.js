const btnCalcular = document.getElementById('btnCalcular')


btnCalcular.addEventListener('click', () => {
    let inBuffet = document.getElementById('inBuffet');
    let inConsumo = document.getElementById('inConsumo');
    let outValor = document.getElementById('outValor');


    let consumo = inConsumo.value;
    let buffet = inBuffet.value;
    let result = (consumo * buffet)/1000


    outValor.textContent = `Valor a pagar R$ ${result.toFixed(2)}`
})
