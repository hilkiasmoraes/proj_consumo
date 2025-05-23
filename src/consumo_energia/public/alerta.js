document.getElementById('formAlerta').addEventListener('submit', async function (e) {
    e.preventDefault();

    const usuarioId = document.getElementById('usuarioId').value;

    const response = await fetch(`http://localhost:3000/consumo/alerta?usuarioId=${usuarioId}`);

    const resultado = document.getElementById('resultado');

    if (response.ok) {
        const mensagem = await response.text();
        resultado.innerHTML = `<p>${mensagem}</p>`;
    } else {
        resultado.textContent = '❌ Erro ao verificar alerta.';
    }
});