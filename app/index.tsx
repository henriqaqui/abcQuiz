import { Text, View, Image } from "react-native";
import perguntas from "@/data/constants/perguntas";
import Pagina from "@/components/tamplate/Pagina";
import Logo from "@/components/tamplate/Logo";
import Enunciado from "@/components/questionario/Enunciado";

export default function Index() {
    return (
        <Pagina>
            <View>
                <Logo/>
                <Enunciado enunciado={perguntas[1]}/>
            </View>
        </Pagina>
    )
}