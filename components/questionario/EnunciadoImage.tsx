import PerguntaModel from '@/data/model/Pergunta'
import { StyleSheet, View, Dimensions} from 'react-native'

export interface EnunciadoImageProps {
    Imagem: any;
}

const { width: screenWidth } = Dimensions.get('window');
const sizeImage = screenWidth * 0.4;

export default function EnunciadoImage(props:EnunciadoImageProps) {
    return (
        <View style={styles.container}>
            <props.Imagem width={sizeImage} height={sizeImage} />;
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth * 0.9,
        alignItems: 'center',
        backgroundColor:'#00000070',
        margin: 20,
        borderRadius: 10,
        textAlign: 'center',
    },
});
