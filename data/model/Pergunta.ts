export default interface Pergunta {
    id: number
    enunciado: string // caminho do arquivo SVG
    opcoes: string[] //alternativas da pergunta
    gabarito: number // indice da alternativa correta
    resposta: string
}