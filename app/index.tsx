import { View } from "react-native";
import Pagina from "@/components/tamplate/Pagina";
import Logo from "@/components/tamplate/Logo";
import Enunciado from "@/components/questionario/Enunciado";
import useQuestionario from "@/data/hooks/useQuestionario";
import Resultado from "@/components/questionario/Resultado";

export default function Index() {
    const { pergunta, concluido, pontuacao, totalPerguntas, responder, reiniciar } = useQuestionario()

    return (
        <Pagina>
            <View>
                <Logo/>
                {concluido ? (
                    <Resultado
                        pontuacao={pontuacao}
                        totalPerguntas={totalPerguntas}
                        reiniciar={reiniciar}/>
                ) : (
                    <Enunciado enunciado={pergunta} opcaoSelecionada={responder} />
                )}
            </View>
        </Pagina>
    )
}