//Aula Objetos
const estudante = {
    nome:'marcus',
    sobrenome:'rodrigues',
    labenumero:123456,
    notasDoSemestre:[8,5,5,10]
};
console.log(estudante);
//adicionando ou mudando propriedades:
estudante.modulo = 'git e terminal'
console.log(estudante);

console.log("nome", estudante.nome) // 1 forma de acessar propri
console.log("nota", estudante.notasDoSemestre[1]);
console.log('modulo', estudante["modulo"]); // 2 frma de acessar propri

const novoEstudante = {...estudante}
novoEstudante.nome = "AstroDev";
//forma com spred de adicionar na array
novoEstudante.notasDoSemestre=[...estudante.notasDoSemestre,9]
//forma com slice() e push()
novoEstudante.notasDoSemestre = estudante.notasDoSemestre.slice()
novoEstudante.notasDoSemestre.push(9);
console.log(novoEstudante);

const estudantesLabenu = [];
estudantesLabenu.push(estudante, novoEstudante)
console.log(estudantesLabenu);

// EXER FIXAÇÃO
const carrinho = {
    nome:'marcus',
    formDePag:'credito',
    endereco:'avenida brasil'
};
console.log(carrinho)

carrinho.compras=[{produto:"Miojo",preco:2.2,quant:5},
 {produto:"leite",preco:8,quant:2}]
console.log(carrinho)
console.log(carrinho.compras)
console.log(carrinho.compras.length)
const carrinhoPresente = {...carrinho}
carrinhoPresente.nome = "Karol"
carrinhoPresente.formDePag = 'Cartao Presente'
console.log(carrinhoPresente)

/* codigos da fe-alfonsi
//AULA OBJETOS
​
//criando um objeto
const estudante = {
    nome:"Fernanda",
    sobrenome:"Garcia Alfonsi",
    numeroMatricula:123456,
    notasDoSemestre:[8, 5.5,10]
}
​
console.log(estudante);
estudante.modulo = " git e terminal"
console.log(estudante);
//notação do ponto para acessar a propriedade do objeto
​
console.log("NOME", estudante.nome)
//acessat um indice do array dentro do objeto
console.log("SEGUNDA NOTA", estudante.notasDoSemestre[1])
//notação dos colchetes para acessar a propriedade do objeto
console.log("MODULO",estudante["modulo"])
​
// criando uma cópia
const novoEstudante={...estudante, nome:"Astrodev"
}
//novoEstudante.nome="Astrodev"
//forma com spread 
novoEstudante.notasDoSemestre=[...estudante.notasDoSemestre, 9]
// forma com slice() e push()
// novoEstudante.notasDoSemestre = estudante.notasDoSemestre.slice()
// novoEstudante.notasDoSemestre.push(9)
novoEstudante["modulo"]= "introdução à web"
​
console.log("NOVO ESTUDANTE:", novoEstudante)
​
//criando array de objetos
​
const estudantesLabenu=[]
​
estudantesLabenu.push(estudante, novoEstudante)
​
​
​
console.log("ARRAY INTEIRO",estudantesLabenu);
//primeira posição do array de estudantes, propriedade notasDoSemestre que é um array e terceira posição do array de notas 
console.log("PRIMEIRA POSIÇÂO", estudantesLabenu[0].notasDoSemestre[2]);
//segunda posição do array de estudantes, propriedade módulo
console.log("SEGUNDA POSIÇÂO",estudantesLabenu[1].modulo);
Recolher*/








