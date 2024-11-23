import { Pressable, Text, StyleSheet} from "react-native"

export interface OpcaoProps {
    indice: number
    letra: string
    onPress: () => void
}

export default function Opcao(props: OpcaoProps) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>{props.letra}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff90',
        padding: 15,
        marginHorizontal: 40,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 70,
        borderLeftWidth: 30,
        borderLeftColor: '#5BC0EB',
        borderRightWidth: 30,
        borderRightColor: '#5BC0EB'
    },
    texto: {
        color: '#131112',
        fontSize: 50,
        fontFamily: 'FrederickatheGreat-Regular',
        textAlign: 'center'
    }
})