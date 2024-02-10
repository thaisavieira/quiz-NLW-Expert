const perguntas = [
    {
        pergunta: 'Qual é o título da obra em que um detetive investiga atividades estranhas em uma cidade costeira?',
        respostas: [
            'A Sombra sobre Innsmouth',
            'O Chamado de Cthulhu',
            'Os Ratos nas Paredes',
        ],
        correta: 0
    },
    {
        pergunta: 'O que é Cthulhu?',
        respostas: [
            'Um livro mágico',
            'Uma cidade subterrânea',
            'Uma entidade cósmica adormecida',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é a cidade fictícia frequentemente mencionada nas histórias de Lovecraft, onde a Universidade Miskatonic está localizada?',
        respostas: [
            'Kingsport',
            'Arkham',
            'Dunwich',
        ],
        correta: 1
    },
    {
        pergunta: 'Em "O Chamado de Cthulhu", como é descrito o culto que adora Cthulhu?',
        respostas: [
            'Culto de louvação',
            'Culto de adoração a monstros marinhos',
            'Culto de invocação de entidades cósmicas',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o elemento recorrente nas histórias de Lovecraft que desafia a compreensão humana?',
        respostas: [
            'O Necronomicon',
            'O Monstro de Dunwich',
            'Os Mitos de Cthulhu',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o título da obra em que uma cidade é atingida por uma cor alienígena vinda do espaço?',
        respostas: [
            'À Sombra de Innsmouth',
            'A Cor que Caiu do Espaço',
            'O Horror em Red Hook',
        ],
        correta: 1
    },
    {
        pergunta: 'O que é Nyarlathotep nas obras de Lovecraft?',
        respostas: [
            'Uma cidade perdida',
            'Um deus do caos',
            'Um ser cósmico mensageiro',
        ],
        correta: 2
    },
    {
        pergunta: 'Em "O Caso de Charles Dexter Ward", o que leva Ward a investigar seus ancestrais?',
        respostas: [
            'Um livro antigo',
            'Um retrato misterioso',
            'Sonhos e visões sobrenaturais',
        ],
        correta: 2
    },
    {
        pergunta: 'O que caracteriza a cidade de Dunwich nas histórias de Lovecraft?',
        respostas: [
            'Uma cidade submersa',
            'Uma cidade abandonada',
            'Atividades místicas e criaturas sobrenaturais',
        ],
        correta: 2
    },
    {
        pergunta: 'Em "O Chamado de Cthulhu", qual é a forma física de Cthulhu?',
        respostas: [
            'Polvo gigante',
            'Dragão alado',
            'Monstro com tentáculos',
        ],
        correta: 0
    },

];

//pegando elemento pelo id
const quiz = document.querySelector('#quiz')
//pesquisando seletor template
const template = document.querySelector('template')


for (const item of perguntas) {
    //função para clonar todos os nós do conteúdo do template
    const quizItem = template.content.cloneNode(true);
    //Queremos que pegue as respostas:
    quizItem.querySelector('h2').textContent = item.pergunta;

    //queremos pegar as respostas, lembrando que são 3 de cada pergunta -> repetição 

    for (const resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true);
        dt.querySelector('span').textContent = resposta;
        //mostra na tela:
        quizItem.querySelector('dl').appendChild(dt);

    }

    quizItem.querySelector('dl dt').remove();

    quiz.appendChild(quizItem); //mostra perguntas na tela,
    }