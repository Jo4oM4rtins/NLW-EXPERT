const perguntas = [
  {
    pergunta: "Qual é o maior oceano do mundo?",
    respostas: [
      "Oceano Atlântico",
      "Oceano Pacífico",
      "Oceano Índico"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a montanha mais alta do mundo?",
    respostas: [
      "Monte Everest",
      "Monte Kilimanjaro",
      "Monte Fuji"
    ],
    correta: 0
  },
  {
    pergunta: "Quem escreveu 'Romeu e Julieta'?",
    respostas: [
      "William Shakespeare",
      "Jane Austen",
      "Charles Dickens"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: [
      "Rio de Janeiro",
      "São Paulo",
      "Brasília"
    ],
    correta: 2
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o país com a maior área territorial do mundo?",
    respostas: [
      "China",
      "Rússia",
      "Estados Unidos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o maior animal terrestre?",
    respostas: [
      "Elefante africano",
      "Baleia azul",
      "Girafa"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o primeiro ser humano a pisar na Lua?",
    respostas: [
      "Neil Armstrong",
      "Buzz Aldrin",
      "Yuri Gagarin"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o maior deserto do mundo?",
    respostas: [
      "Deserto do Saara",
      "Deserto de Atacama",
      "Deserto da Arábia"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
    respostas: [
      "Thomas Jefferson",
      "George Washington",
      "Abraham Lincoln"
    ],
    correta: 1
  },
];


  
  const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}