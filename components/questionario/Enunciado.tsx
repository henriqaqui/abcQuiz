import PerguntaModel from '@/data/model/Pergunta'
import { View } from 'react-native'
import EnunciadoImage from './EnunciadoImage';
import Opcao from "@/components/questionario/Opcao";


export interface EnunciadoProps {
    enunciado: PerguntaModel
    opcaoSelecionada: (indice: number) => void
}

export default function Enunciado(props:EnunciadoProps) {
    return (
        <View>
            <EnunciadoImage Imagem={props.enunciado.enunciado}/>;
            <View style={{ gap: 10 }}>
                {props.enunciado.opcoes.map((letra, indice) => (
                    <Opcao
                        key={indice}
                        indice={indice}
                        letra={letra}
                        onPress={() => props.opcaoSelecionada(indice)} />
                )) }
            </View>
        </View>
    )
}
