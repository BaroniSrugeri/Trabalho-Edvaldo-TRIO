document.getElementById('adicionar').addEventListener('click',
    function () {

        const itemSelecionado = document.getElementById('item').value;

        if (itemSelecionado) {
            const listaCompras = document.getElementById('lista-compras');
            const novoItem = document.createElement('li');
            novoItem.textContent = itemSelecionado;
            listaCompras.appendChild(novoItem);
        }
    });

document.getElementById('adicionar-prod').addEventListener('click', function () {
    var novoTexto = document.getElementById('texto').value;
    if (novoTexto) {
        var select = document.getElementById('item');
        var novaOpcao = document.createElement('option');
        novaOpcao.text = novoTexto;
        novaOpcao.value = novoTexto.toLowerCase().replace(/\s+/g, '-');
        select.appendChild(novaOpcao);
        document.getElementById('texto').value = ''; // Limpa o campo de entrada
    } else {
        alert('Por favor, digite um valor.');
    }
});
