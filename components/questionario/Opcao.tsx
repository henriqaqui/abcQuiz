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
        backgroundColor: '#00000070',
        marginHorizontal: 40,
        marginVertical: 5,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 70,
        borderLeftWidth: 30,
        borderLeftColor: '#ffffff90',
        borderRightWidth: 30,
        borderRightColor: '#ffffff90'
    },
    texto: {
        color: '#ffffff',
        fontSize: 80,
        fontFamily: 'FrederickatheGreat-Regular',
        textAlign: 'center'
    }
})