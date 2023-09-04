// Agora que já conhecemos as principais estruturas do JavaScript, vamos praticar um pouco?
// Com JavaScript, é claro!!! 🤓

// Para a próxima semana, faça o seguinte exercício:
// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
let dia = true;

if(dia == true){
    console.log('O dia esta claro!');
}
else{
    console.log('Está de noite!')
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for(let i = 0; i<=20; i+=2){
    console.log(i);
}

// 03 - crie uma função que exiba uma mensagem no console

function exibirMensagem(){
    console.log('O Vai na Web é TOP!');
}
exibirMensagem();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome(nome){
    console.log(`O nome do indivíduo é: ${nome}`);
}

exibirNome('Gustavo');

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function exibirDados(nome, idade, estiloMusic){
    console.log(`O nome do indivíduo é: ${nome}, sua idade é de ${idade} anos e seu gosto musical preferido é ${estiloMusic}`);
}

exibirDados('Raiane', 28, 'Gospel');

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function exibirDadosTwo(filme, musica){
    console.log(`O filme escolhido foi: ${filme} e a musica foi: ${musica}`);
}

exibirDadosTwo('Velozes e Furiosos', 'Favela Vive 5');

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triploValor(valor){
    let valorF = valor *3;
    console.log(`O triplo do valor é ${valorF}`);
}
triploValor(3);

// 08 - crie uma função que  verifique se uma  variável é true ou false

function verificador(){
    let variavel = true;

    if(variavel == true){
        console.log('Verdadeiro')
    }else{
        console.log('Falso!')
    }
}
verificador();


// 09 - Crie um array que receba 5 itens e exiba no console.

let frutas = ['banana', 'maça', 'pera', 'abacaxi', 'uva'];
console.log(frutas);

// 10 - Utilize um método para adicionar um nome ao inicio do array.

let nomes = ['Carol', 'Kleber', 'Gustavo']
nomes.unshift('Grazy');
console.log(nomes);

// 11 - Utilize um método para remover o último nome do array.
nomes.pop();
console.log(nomes)

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
nomes.splice(1,2);
console.log(nomes);


// 13 - Utilize um método para remover o primeiro nome do array.
nomes.shift();
console.log(nomes);


// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
//  let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();
console.log(numbers);

// 15 - Crie um objeto que receba ao menos três propriedades sobre você.

let eu = {
    nome: 'Gustavo',
    idade: 22,
    nacionalidade: 'Brasileiro'
}
// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
eu.gostoMusical = 'Gospel';
// 17 - Remova uma propriedade desse objeto.
delete eu.idade;


// 18 - Mostre no console todas as propriedades desse objeto.
console.log(eu);

// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
let cadastro =[{
    nome: 'Gustavo',
    idade: 19,
    telefone: 2140028922,
    amigos:['Danilo', 'Neymar', 'Cristiano Ronaldo', 'Messi']
    },
    {
    nome: 'Raiane',
    idade: 28,
    telefone: 2140038933,
    amigos:['Maísa', 'Regina Casé', 'Camila Barros', 'Francisca']
    },
    {
    nome: 'Neymar',
    idade: 31,
    telefone: 2150507171,
    amigos:['Mbappe', 'Galvão Bueno', 'Bruna Marquezine', 'Zuniga']
    },
    {
    nome: 'Icardi',
    idade: 28,
    telefone: 5590909229,
    amigos:['Maxi Lopes', 'Jhon Terry', 'Lukaku', 'Maradona']
    },
    {
    nome: 'Gerson',
    idade: 28,
    telefone: 5590903000,
    amigos:['Varela', 'Filipe Luis', 'Dudu', 'Pelé']
    },
]

// Na propriedade amigos, adicione ao menos 4 amigos.


// 20 - Mostre no console o nome de um amigo de cada lista.
for(let i = 0; i<(cadastro.length); i++){
    console.log(`Usando for normal ${cadastro[i].amigos}`);
}
// outra forma
for(let i in cadastro){
    console.log(`For in ${cadastro[i].amigos}`);
}

