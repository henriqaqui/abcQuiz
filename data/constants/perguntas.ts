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
        opcoes: ["I", "E", "C", "G"],
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
      {
        id: 11,
        enunciado: require('@/assets/images/enunciado/aviao.svg').default,
        opcoes: ["E", "Z", "A", "X"],
        gabarito: 2,
        resposta: "AVIÃO"
      },
      {
        id: 12,
        enunciado: require('@/assets/images/enunciado/batata_frita.svg').default,
        opcoes: ["M", "L", "P", "B"],
        gabarito: 3,
        resposta: "BATATA FRITA"
      },
      {
        id: 13,
        enunciado: require('@/assets/images/enunciado/carne.svg').default,
        opcoes: ["C", "K", "A", "N"],
        gabarito: 0,
        resposta: "CARNE"
      },
      {
        id: 14,
        enunciado: require('@/assets/images/enunciado/chocolate.svg').default,
        opcoes: ["X", "C", "H", "Q"],
        gabarito: 1,
        resposta: "CHOCOLATE"
      },
      {
        id: 15,
        enunciado: require('@/assets/images/enunciado/cofre.svg').default,
        opcoes: ["H", "O", "C", "Z"],
        gabarito: 2,
        resposta: "COFRE"
      },
      {
        id: 16,
        enunciado: require('@/assets/images/enunciado/coroa.svg').default,
        opcoes: ["D", "I", "K", "C"],
        gabarito: 3,
        resposta: "COROA"
      },
      {
        id: 17,
        enunciado: require('@/assets/images/enunciado/crocodilo.svg').default,
        opcoes: ["C", "R", "I", "L"],
        gabarito: 0,
        resposta: "CROCODILO"
      },
      {
        id: 18,
        enunciado: require('@/assets/images/enunciado/elefante.svg').default,
        opcoes: ["F", "E", "J", "O"],
        gabarito: 1,
        resposta: "ELEFANTE"
      },
      {
        id: 19,
        enunciado: require('@/assets/images/enunciado/osso.svg').default,
        opcoes: ["S", "H", "O", "I"],
        gabarito: 2,
        resposta: "OSSO"
      },
      {
        id: 20,
        enunciado: require('@/assets/images/enunciado/sorvete.svg').default,
        opcoes: ["J", "A", "K", "S"],
        gabarito: 3,
        resposta: "SORVETE"
      },
      {
        id: 21,
        enunciado: require('@/assets/images/enunciado/abacaxi.svg').default,
        opcoes: ["A", "H", "E", "P"],
        gabarito: 0,
        resposta: "ABACAXI"
      },
      {
        id: 22,
        enunciado: require('@/assets/images/enunciado/aranha.svg').default,
        opcoes: ["C", "A", "B", "O"],
        gabarito: 1,
        resposta: "ARANHA"
      },
      {
        id: 23,
        enunciado: require('@/assets/images/enunciado/baleia.svg').default,
        opcoes: ["P", "H", "B", "W"],
        gabarito: 2,
        resposta: "BALEIA"
      },
      {
        id: 24,
        enunciado: require('@/assets/images/enunciado/bicho_preguica.svg').default,
        opcoes: ["T", "X", "I", "B"],
        gabarito: 3,
        resposta: "BICHO-PREGUIÇA"
      },
      {
        id: 25,
        enunciado: require('@/assets/images/enunciado/bicicleta.svg').default,
        opcoes: ["B", "S", "Q", "Z"],
        gabarito: 0,
        resposta: "BICICLETA"
      },
      {
        id: 26,
        enunciado: require('@/assets/images/enunciado/brocolis.svg').default,
        opcoes: ["R", "B", "T", "L"],
        gabarito: 1,
        resposta: "BROCOLIS"
      },
      {
        id: 27,
        enunciado: require('@/assets/images/enunciado/castelo.svg').default,
        opcoes: ["E", "T", "C", "V"],
        gabarito: 2,
        resposta: "CASTELO"
      },
      {
        id: 28,
        enunciado: require('@/assets/images/enunciado/dente.svg').default,
        opcoes: ["M", "G", "Y", "D"],
        gabarito: 3,
        resposta: "DENTE"
      },
      {
        id: 29,
        enunciado: require('@/assets/images/enunciado/dinheiro.svg').default,
        opcoes: ["D", "G", "O", "X"],
        gabarito: 0,
        resposta: "DINHEIRO"
      },
      {
        id: 30,
        enunciado: require('@/assets/images/enunciado/dragao.svg').default,
        opcoes: ["G", "D", "N", "R"],
        gabarito: 1,
        resposta: "DRAGÃO"
      },
      {
        id: 31,
        enunciado: require('@/assets/images/enunciado/espada.svg').default,
        opcoes: ["F", "T", "E", "J"],
        gabarito: 2,
        resposta: "ESPADA"
      },
      {
        id: 32,
        enunciado: require('@/assets/images/enunciado/faca.svg').default,
        opcoes: ["G", "A", "Y", "F"],
        gabarito: 3,
        resposta: "FACA"
      },
      {
        id: 33,
        enunciado: require('@/assets/images/enunciado/fantasma.svg').default,
        opcoes: ["F", "R", "O", "S"],
        gabarito: 0,
        resposta: "FANTASMA"
      },
      {
        id: 34,
        enunciado: require('@/assets/images/enunciado/girafa.svg').default,
        opcoes: ["T", "G", "E", "Z"],
        gabarito: 1,
        resposta: "GIRAFA"
      },
      {
        id: 35,
        enunciado: require('@/assets/images/enunciado/giz_de_cera.svg').default,
        opcoes: ["C", "I", "G", "J"],
        gabarito: 2,
        resposta: "GIZ DE CERA"
      },
      {
        id: 36,
        enunciado: require('@/assets/images/enunciado/gorila.svg').default,
        opcoes: ["T", "A", "J", "G"],
        gabarito: 3,
        resposta: "GORILA"
      },
      {
        id: 37,
        enunciado: require('@/assets/images/enunciado/helicoptero.svg').default,
        opcoes: ["H", "R", "A", "E"],
        gabarito: 0,
        resposta: "HELICÓPTERO"
      },
      {
        id: 38,
        enunciado: require('@/assets/images/enunciado/joaninha.svg').default,
        opcoes: ["M", "J", "C", "V"],
        gabarito: 1,
        resposta: "JOANINHA"
      },
      {
        id: 39,
        enunciado: require('@/assets/images/enunciado/kiwi.svg').default,
        opcoes: ["D", "U", "K", "B"],
        gabarito: 2,
        resposta: "KIWI"
      },
      {
        id: 40,
        enunciado: require('@/assets/images/enunciado/lapis.svg').default,
        opcoes: ["C", "I", "J", "L"],
        gabarito: 3,
        resposta: "LÁPIS"
      },
      {
        id: 41,
        enunciado: require('@/assets/images/enunciado/leao.svg').default,
        opcoes: ["L", "S", "P", "T"],
        gabarito: 0,
        resposta: "LEÃO"
      },
      {
        id: 42,
        enunciado: require('@/assets/images/enunciado/lhama.svg').default,
        opcoes: ["U", "L", "F", "X"],
        gabarito: 1,
        resposta: "LHAMA"
      },
      {
        id: 43,
        enunciado: require('@/assets/images/enunciado/maca.svg').default,
        opcoes: ["D", "J", "M", "K"],
        gabarito: 2,
        resposta: "MAÇÃ"
      },
      {
        id: 44,
        enunciado: require('@/assets/images/enunciado/macaco.svg').default,
        opcoes: ["U", "B", "K", "M"],
        gabarito: 3,
        resposta: "MACACO"
      },
      {
        id: 45,
        enunciado: require('@/assets/images/enunciado/maquiagem.svg').default,
        opcoes: ["M", "T", "Q", "U"],
        gabarito: 0,
        resposta: "MAQUIAGEM"
      },
      {
        id: 46,
        enunciado: require('@/assets/images/enunciado/milho.svg').default,
        opcoes: ["V", "M", "G", "B"],
        gabarito: 1,
        resposta: "MILHO"
      },
      {
        id: 47,
        enunciado: require('@/assets/images/enunciado/mosquito.svg').default,
        opcoes: ["E", "K", "M", "L"],
        gabarito: 2,
        resposta: "MOSQUITO"
      },
      {
        id: 48,
        enunciado: require('@/assets/images/enunciado/mumia.svg').default,
        opcoes: ["S", "C", "L", "M"],
        gabarito: 3,
        resposta: "MÚMIA"
      },
      {
        id: 49,
        enunciado: require('@/assets/images/enunciado/ninja.svg').default,
        opcoes: ["N", "Q", "M", "R"],
        gabarito: 0,
        resposta: "NINJA"
      },
      {
        id: 50,
        enunciado: require('@/assets/images/enunciado/onibus.svg').default,
        opcoes: ["S", "O", "D", "Y"],
        gabarito: 1,
        resposta: "ÔNIBUS"
      },
      {
        id: 51,
        enunciado: require('@/assets/images/enunciado/ovelha.svg').default,
        opcoes: ["F", "L", "O", "M"],
        gabarito: 2,
        resposta: "OVELHA"
      },
      {
        id: 52,
        enunciado: require('@/assets/images/enunciado/ovo.svg').default,
        opcoes: ["X", "D", "N", "O"],
        gabarito: 3,
        resposta: "OVO"
      },
      {
        id: 53,
        enunciado: require('@/assets/images/enunciado/pavao.svg').default,
        opcoes: ["P", "U", "T", "B"],
        gabarito: 0,
        resposta: "PAVÃO"
      },
      {
        id: 54,
        enunciado: require('@/assets/images/enunciado/peixe.svg').default,
        opcoes: ["F", "P", "O", "X"],
        gabarito: 1,
        resposta: "PEIXE"
      },
      {
        id: 55,
        enunciado: require('@/assets/images/enunciado/peru.svg').default,
        opcoes: ["G", "I", "P", "J"],
        gabarito: 2,
        resposta: "PERÚ"
      },
      {
        id: 56,
        enunciado: require('@/assets/images/enunciado/pimenta.svg').default,
        opcoes: ["C", "I", "U", "P"],
        gabarito: 3,
        resposta: "PIMENTA"
      },
      {
        id: 57,
        enunciado: require('@/assets/images/enunciado/pipa.svg').default,
        opcoes: ["P", "S", "Q", "W"],
        gabarito: 0,
        resposta: "PIPA"
      },
      {
        id: 58,
        enunciado: require('@/assets/images/enunciado/pizza.svg').default,
        opcoes: ["I", "P", "F", "Z"],
        gabarito: 1,
        resposta: "PIZZA"
      },
      {
        id: 59,
        enunciado: require('@/assets/images/enunciado/policial.svg').default,
        opcoes: ["H", "E", "P", "G"],
        gabarito: 2,
        resposta: "POLICIAL"
      },
      {
        id: 60,
        enunciado: require('@/assets/images/enunciado/polvo.svg').default,
        opcoes: ["V", "O", "J", "P"],
        gabarito: 3,
        resposta: "POLVO"
      },
      {
        id: 61,
        enunciado: require('@/assets/images/enunciado/queijo.svg').default,
        opcoes: ["Q", "N", "J", "U"],
        gabarito: 0,
        resposta: "QUEIJO"
      },
      {
        id: 62,
        enunciado: require('@/assets/images/enunciado/relogio.svg').default,
        opcoes: ["M", "R", "I", "D"],
        gabarito: 1,
        resposta: "RELÓGIO"
      },
      {
        id: 63,
        enunciado: require('@/assets/images/enunciado/robo.svg').default,
        opcoes: ["C", "I", "R", "O"],
        gabarito: 2,
        resposta: "ROBÔ"
      },
      {
        id: 64,
        enunciado: require('@/assets/images/enunciado/sol.svg').default,
        opcoes: ["R", "B", "K", "S"],
        gabarito: 3,
        resposta: "SOL"
      },
      {
        id: 65,
        enunciado: require('@/assets/images/enunciado/tartaruga.svg').default,
        opcoes: ["T", "R", "Y", "D"],
        gabarito: 0,
        resposta: "TARTARUGA"
      },
      {
        id: 66,
        enunciado: require('@/assets/images/enunciado/tigre.svg').default,
        opcoes: ["R", "T", "I", "K"],
        gabarito: 1,
        resposta: "TIGRE"
      },
      {
        id: 67,
        enunciado: require('@/assets/images/enunciado/tomate.svg').default,
        opcoes: ["E", "B", "T", "I"],
        gabarito: 2,
        resposta: "TOMATE"
      },
      {
        id: 68,
        enunciado: require('@/assets/images/enunciado/trator.svg').default,
        opcoes: ["B", "I", "O", "T"],
        gabarito: 3,
        resposta: "TRATOR"
      },
      {
        id: 69,
        enunciado: require('@/assets/images/enunciado/tubarao.svg').default,
        opcoes: ["T", "G", "D", "U"],
        gabarito: 0,
        resposta: "TUBARÃO"
      },
      {
        id: 70,
        enunciado: require('@/assets/images/enunciado/unicornio.svg').default,
        opcoes: ["I", "U", "H", "F"],
        gabarito: 1,
        resposta: "UNICÓRNIO"
      },
      {
        id: 71,
        enunciado: require('@/assets/images/enunciado/vaca.svg').default,
        opcoes: ["W", "A", "V", "N"],
        gabarito: 2,
        resposta: "VACA"
      },
      {
        id: 72,
        enunciado: require('@/assets/images/enunciado/violao.svg').default,
        opcoes: ["O", "L", "R", "V"],
        gabarito: 3,
        resposta: "VIOLÃO"
      },
      {
        id: 73,
        enunciado: require('@/assets/images/enunciado/xicara.svg').default,
        opcoes: ["X", "E", "S", "C"],
        gabarito: 0,
        resposta: "XÍCARA"
      },
      {
        id: 74,
        enunciado: require('@/assets/images/enunciado/zebra.svg').default,
        opcoes: ["E", "Z", "J", "Q"],
        gabarito: 1,
        resposta: "ZEBRA"
      },

];

export default perguntas;
