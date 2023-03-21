import { useState } from 'react'
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native'
import { globalStyles } from '../../styles/global'

export default function NewTab({navigation}) {
    
    const [table, setTable] = useState('')
    const [client, setClient] = useState('')

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>NEW TAB</Text>
            <TextInput 
                keyboardType='numeric'
                style={styles.input} 
                placeholder='Table number'
                placeholderTextColor={'#999'}
                onChangeText={(val) => setTable(val)}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Client name'
                placeholderTextColor={'#999'}
                onChangeText={(val) => setClient(val)}
            />
            <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Menu', {tableNumber: table, clientName: client})}>
                <Text style={globalStyles.buttonText}>Confirm</Text>
            </Pressable>
            <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={globalStyles.buttonText}>Cancel</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 20,
        padding: 4,
        width: 200,
        backgroundColor: '#FFF',
        borderColor: '#000',
        borderWidth: 0.1,
        borderRadius: 2,
    }
})