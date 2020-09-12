console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')

const readline = require('readline-sync')

console.log(db)
//console.table(db) - Verificar comando para listar os produtos como tabela***

//exercício1

const {produtos}=db
console.table(produtos)

produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos)

//exercício2
const idProdutos = parseInt(readline.question("Informe o ID do produto desejado: "))

const quantidade = parseInt(readline.question("Informe a quantidade do produto desejado: "))

//exercício3
const desconto = parseInt(readline.question("Você possui cupom de desconto? S/N: "))


function procurar(produto){
  return produto.id === idProdutos
}

const produtoEncontrado = produtos.find(procurar)
console.log (produtoEncontrado)

const subTotal = produtoEncontrado.preco * quantidade
console.log (subTotal)


  //exercício3 ou pelo menos, a tentativa dele...
  function calcularsubTotal(){
    this.subtotal = this.produtos.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
  }


/* 
function calcularSubtotal(acumulador, id_item){
  
  return acumulador + id_item
  }
  
  const subTotal = numeros.reduce(calcularSubtotal)
  
  console.log(subTotal) */
