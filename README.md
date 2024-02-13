# NLW Expert - Quiz

---

## Sumário

1. [Sobre](#about);
2. [O Projeto](#project);
2.1[Screenshots/Gifs](#screenshot);
3. [Dificuldades e Aprendizados](#challenges-and-learning);
4. [Próximos Passos](#next-steps);

---

<div id = "about">

## Sobre

A NLW, forma abreviada de Next Level Week, é um evento com duração de uma semana com conteúdos gratuitos voltado para o aprendizado da programação através do método *Learning by Doing* promovido pela [Rocketseat](https://app.rocketseat.com.br/) que tem como resultado um projeto completo. Para que o evento possa atender a todos os níveis existe a subdivisão em trilhas, de acordo com as tecnologias utilizadas.

<div id = "project">

## O Projeto

Neste projeto da trilha HTML+CSS+JS, feito com a participação de Diego Fernandes e Mayk Brito, foi construido um quiz feito utilizando a tag `template` do HTML, com o foco no
desenvolvimento de habilidades com estrutura de dados, especialmente na construção e acesso de informações de arrays e objetos.
Para construir o quiz foi necessário agrupar todas as perguntas do quiz usando array composto por um objeto e um outro array dentro. Seguindo a estrutura a seguir:

``` JS
const perguntas = [
    {
        pergunta: 'Pergunta 01',
        respostas: [
            'Resposta A',
            'Resposta B',
            'Resposta C',
        ],
        correta:2
    },
];
```

Sabendo que a estrutura do array é dada por:

```JS
Array ou vetores
const perguntas = [
    "a", 0, 1.3,
]
```

E que a estrutura do objeto é dada por:

```JS
const celular = {
    cor: 'preto',
    modelo: 'samsung'
}
```

A estrutura do objetos nós utilizamos para agrupar as perguntas, enquanto a estrutura do array é usada para guardarmos "uma gaveta de informações em um armário."

Também foi utilizados métodos do DOM para acessar os elementos e clonar as perguntas para que elas fossem trazidas e mostradas no HTML.

<div id = "screenshot">

### Screenshots e Gifs

<div id = "challenges-and-learning">

## Dificuldades e Aprendizados

Meu primeriro contato com arrays e objetos foi através do curso *Javascript Algorithms and Data Structures Certification* fornecido pela [FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) aonde participei da construção de um mini-jogo RPG. Este projeto da NLW serviu como uma excelente revisão de estrutura de dados e reforçou meu aprendizado com o DOM.

<div id = "next-steps">

## Próximos Passos
[Em breve]