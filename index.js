const perguntas = [
  {
    pergunta: "Quem é Jesus na fé cristã?",
    respostas: [
      "Um profeta",
      "O Filho de Deus",
      "Um líder político"
    ],
    correta: 1
  },
  {
    pergunta: "Onde Jesus nasceu?",
    respostas: [
      "Nazareth",
      "Jerusalém",
      "Belém"
    ],
    correta: 2
  },
  {
    pergunta: "Qual dos seguintes não é um dos doze apóstolos de Jesus?",
    respostas: [
      "Pedro",
      "João",
      "Judas Iscariotes"
    ],
    correta: 0
  },
  {
    pergunta: "Quantos anos Jesus tinha quando começou seu ministério público?",
    respostas: [
      "25",
      "30",
      "35"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o significado do nome 'Jesus'?",
    respostas: [
      "Salvador",
      "Curador",
      "Profeta"
    ],
    correta: 0
  },
  {
    pergunta: "O que Jesus fez em seu ministério?",
    respostas: [
      "Curou os doentes e ensinou sobre o amor de Deus",
      "Lutou contra os governantes romanos",
      "Viajou pelo mundo pregando sobre filosofia"
    ],
    correta: 0
  },
  {
    pergunta: "Como Jesus morreu?",
    respostas: [
      "Afogado",
      "De velhice",
      "Crucificado"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a mensagem principal do ensinamento de Jesus?",
    respostas: [
      "Amar a Deus sobre todas as coisas",
      "Amar o próximo como a si mesmo",
      "A busca pelo poder e riqueza"
    ],
    correta: 1
  },
  {
    pergunta: "O que aconteceu três dias após a morte de Jesus, de acordo com a Bíblia?",
    respostas: [
      "Ele ressuscitou dos mortos",
      "Ele foi esquecido",
      "Ele apareceu em um sonho para seus discípulos"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a última ordem de Jesus antes de ascender aos céus?",
    respostas: [
      "Distribuir riquezas",
      "Pregar o Evangelho a todas as nações",
      "Organizar um exército"
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