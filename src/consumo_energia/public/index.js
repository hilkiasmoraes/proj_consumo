document.getElementById('formConsumo').addEventListener('submit', async function(e) {
    e.preventDefault();

    const usuarioId = document.getElementById('usuarioId').value;
    const quantidadeKwh = Number(document.getElementById('quantidadeKwh').value);
    const dataLeitura = document.getElementById('dataLeitura').value;

    const response = await fetch('http://localhost:3000/consumo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuarioId, quantidadeKwh, dataLeitura })
    });

    const mensagem = document.getElementById('mensagem');
    if(response.ok) {
        mensagem.textContent = '✅ Consumo cadastrado com sucesso!';
    } else {
        mensagem.textContent = '❌ Erro ao cadastrar consumo.';
    }
});