import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'

export interface ResultadoProps {
    pontuacao: number
    reiniciar: () => void
}

const { width: screenWidth } = Dimensions.get('window');

export default function Resultado(props: ResultadoProps) {
    const { pontuacao, reiniciar } = props
    return (
        <View style={styles.container}>
            <View style={styles.pontuacao}>
                <Text style={styles.texto}>SUA NOTA FOI...</Text>
                <Text style={styles.destaque}>{pontuacao}</Text>
            </View>
            <View>
                <Pressable style={styles.botao} onPress={reiniciar}>
                        <Text style={styles.textoBotao}>MAIS UMA VEZ</Text>
                </Pressable>
            </View>
        </View>    
    )
}


const styles = StyleSheet.create({
    container: {
        width: screenWidth * 0.9,
        alignItems: 'center',
        marginTop: 70,
    },
    pontuacao: {
        width: screenWidth * 0.9,
        backgroundColor:'#00000070',
        margin: 50,
        borderRadius: 10,
        padding: 30,
        alignItems: 'center',
    },
    texto: {
        color: '#ffffff',
        fontFamily: 'UbuntuMono-Regular',
        fontSize: 40,
    },
    destaque: {
        color: '#ffffff',
        fontFamily:'FrederickatheGreat-Regular',
        fontSize: 100,
    },
    botao: {
        marginTop: 70,
        backgroundColor: '#9BC53D',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    textoBotao: {
        color: '#000000',
        fontFamily: 'FrederickatheGreat-Regular',
        fontSize: 50,
    },
})