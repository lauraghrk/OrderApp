import { StyleSheet, View, Text, Pressable } from 'react-native'
import { globalStyles } from '../../styles/global'

export default function Home({navigation}) {
    return (
        <View style={globalStyles.container}>
            <View style={styles.buttonBox}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('NewTab')}>
                    <Text style={styles.buttonText}>NEW TAB</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('AllTabs')}>
                    <Text style={styles.buttonText}>ALL TABS</Text>
                </Pressable>
            </View>
            <Text style={styles.footer}>Developed by Laura Gehrke</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonBox: {
        flex: 0.98,
        justifyContent: 'space-even'
    },
    button: {
        width: 250,
        height: 40,
        backgroundColor: '#425264',
        borderRadius: 4,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF'
    },
    footer: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#425264'
    }
})