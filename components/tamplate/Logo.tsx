import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
    return (
        <View>
            <Text style={styles.primario}>
                <Text style={{ color: '#EC0B43' }}>a</Text>
                <Text style={{ color: '#5BC0EB' }}>b</Text>
                <Text style={{ color: '#FDE74C' }}>c</Text>
                <Text>Quiz</Text>
            </Text>
            <Text style={styles.secundario}>Com qual letra começa...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    primario: {
        fontFamily: 'FrederickatheGreat-Regular',
        fontSize: 100,
        textAlign: 'center',
        color: '#9BC53D',
    },
    secundario: {
        fontFamily: 'UbuntuMono-Regular',
        fontSize: 30,
        color: '#ffffff90',
        textAlign: 'center',
    },
});
