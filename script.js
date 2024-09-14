let valores = [];

document.getElementById('adicionar').addEventListener('click', function() {
    const valor = parseFloat(document.getElementById('valor').value);
    if (!isNaN(valor) && valor > 0) {
        valores.push(valor);
        document.getElementById('valoresAdicionados').textContent = valores.reduce((a, b) => a + b, 0).toFixed(2);
        document.getElementById('valor').value = ''; // Limpar o campo de input
    } else {
        alert("Por favor, insira um valor válido.");
    }
});

document.getElementById('calcular').addEventListener('click', function() {
    const pessoas = parseInt(document.getElementById('pessoas').value);
    if (pessoas > 0 && valores.length > 0) {
        const total = valores.reduce((a, b) => a + b, 0);
        const resultado = total / pessoas;
        document.getElementById('resultadoPorPessoa').textContent = resultado.toFixed(2);
    } else {
        alert("Por favor, adicione valores e insira um número válido de pessoas.");
    }
});