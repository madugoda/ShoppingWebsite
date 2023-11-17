let totalGeral;
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let qntdProduto = document.getElementById('quantidade').value;

    //calcular o preço, o subtotal
    let preco = parseFloat(qntdProduto * valorProduto);
    
    //adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qntdProduto}x </span>${nomeProduto}<span class="texto-azul">R$${preco}</span>
  </section>`;

    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';

}

function limpar (){
    totalGeral = 0;
    document.getElementById('valor-total').innerHTML = 'R$ 0';
    document.getElementById('lista-produtos').innerHTML = 'Carrinho Vazio';
    document.getElementById('quantidade').value = '';
}