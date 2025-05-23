document.getElementById('formHistorico').addEventListener('submit', async function (e) {
    e.preventDefault();

    const usuarioId = document.getElementById('usuarioId').value;
    const inicio = document.getElementById('inicio').value;
    const fim = document.getElementById('fim').value;

    const response = await fetch(`http://localhost:3000/consumo?usuarioId=${usuarioId}&inicio=${inicio}&fim=${fim}`);

    const resultado = document.getElementById('resultado');

    if (response.ok) {
        const dados = await response.json();

        if (dados.length === 0) {
            resultado.innerHTML = '<p>⚠️ Nenhum registro encontrado nesse período.</p>';
        } else {
            resultado.innerHTML = '<h3>Resultados:</h3><ul>' +
                dados.map(item => {
                    const dataISO = item.dataLeitura;
                    const dataFormatada = `${dataISO.substring(8, 10)}/${dataISO.substring(5, 7)}/${dataISO.substring(0, 4)}`;
                    return `<li>${dataFormatada}: ${item.quantidadeKwh} kWh</li>`;
                }).join('') +
                '</ul>';
        }

    } else {
        resultado.textContent = '❌ Erro ao consultar histórico.';
    }
});