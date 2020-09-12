console.log('Datas 🗓')

// Outro exemplo de um objeto JavaScript é o Date.

// Vamos criar a variável chamada hoje que irá receber a data de hoje.

const hoje = new Date()

console.log(hoje)





// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date

const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()

console.log(dia, mes, ano)



// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️
const nascimento = new Date(1989, 9, 20)

console.log(`Nasci em ${nascimento}`)


// Podemos usar o método toLocaleString para formatar a data

const dataFormatada = hoje.toLocaleDateString('pt-br')
console.log(dataFormatada)




// Temos mais opções para formatar a data
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }


const dataLonga = hoje.toLocaleDateString('pt-br', options)
console.log(dataLonga)