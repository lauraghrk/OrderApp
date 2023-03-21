import { View, Text, Pressable, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'

export default function Menu({route, navigation}) {
    /*const {tableNumber, clientName} = route.params*/
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>MENU</Text>

            <Text>Table </Text>
            <Text>a</Text>

            <View style={styles.menuBox}>
                <Pressable style={styles.menuOption} onPress={() => navigation.navigate('')}>
                    <Text style={styles.optionText}>Entradas</Text>
                </Pressable>
                <Pressable style={styles.menuOption} onPress={() => navigation.navigate('')}>
                    <Text style={styles.optionText}>Sanduíches</Text>
                </Pressable>
                <Pressable style={styles.menuOption} onPress={() => navigation.navigate('')}>
                    <Text style={styles.optionText}>Sobremesas</Text>
                </Pressable>
                <Pressable style={styles.menuOption} onPress={() => navigation.navigate('')}>
                    <Text style={styles.optionText}>Bebidas</Text>
                </Pressable>
            </View>

            <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={globalStyles.buttonText}>Cancel</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    menuBox: {
        flexDirection: 'row',
        alignContent: 'space-around',
        flexWrap: 'wrap',
        margin: 30,
        justifyContent: 'center'
    },
    menuOption: {
        backgroundColor: '#999',
        padding: 3,
        margin: 6,
        height: 100,
        width: 100
    },
    optionText: {
        color: '#fff'
    }
})