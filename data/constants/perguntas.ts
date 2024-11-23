import Pergunta from '@/data/model/Pergunta';

const perguntas: Pergunta[] = [
    {
        id: 1,
        enunciado: require('@/assets/images/enunciado/abelha.svg').default,
        opcoes: ["A", "M", "L", "C"],
        gabarito: 0,
        resposta: "ABELHA"
      },
      {
        id: 2,
        enunciado: require('@/assets/images/enunciado/bebe.svg').default,
        opcoes: ["R", "B", "P", "T"],
        gabarito: 1,
        resposta: "BEBÊ"
      },
      {
        id: 3,
        enunciado: require('@/assets/images/enunciado/cachorro_quente.svg').default,
        opcoes: ["I", "E", "A", "G"],
        gabarito: 2,
        resposta: "CACHORRO-QUENTE"
      },
      {
        id: 4,
        enunciado: require('@/assets/images/enunciado/foguete.svg').default,
        opcoes: ["S", "C", "A", "F"],
        gabarito: 3,
        resposta: "FOGUETE"
      },
      {
        id: 5,
        enunciado: require('@/assets/images/enunciado/hamburguer.svg').default,
        opcoes: ["H", "A", "N", "S"],
        gabarito: 0,
        resposta: "HAMBURGUER"
      },
      {
        id: 6,
        enunciado: require('@/assets/images/enunciado/hipopotamo.svg').default,
        opcoes: ["M", "H", "L", "I"],
        gabarito: 1,
        resposta: "HIPOPOTAMO"
      },
      {
        id: 7,
        enunciado: require('@/assets/images/enunciado/impressora.svg').default,
        opcoes: ["B", "P", "I", "D"],
        gabarito: 2,
        resposta: "IMPRESSORA"
      },
      {
        id: 8,
        enunciado: require('@/assets/images/enunciado/melancia.svg').default,
        opcoes: ["B", "A", "C", "M"],
        gabarito: 3,
        resposta: "MELANCIA"
      },
      {
        id: 9,
        enunciado: require('@/assets/images/enunciado/pinguim.svg').default,
        opcoes: ["P", "B", "R", "F"],
        gabarito: 0,
        resposta: "PINGUIM"
      },
      {
        id: 10,
        enunciado: require('@/assets/images/enunciado/uva.svg').default,
        opcoes: ["B", "U", "G", "P"],
        gabarito: 1,
        resposta: "UVA"
      },
      
];

export default perguntas;
