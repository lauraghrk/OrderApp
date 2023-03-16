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
                style={styles.input} 
                placeholder='Table number'
            />
            <TextInput 
                style={styles.input} 
                placeholder='Client name'
            />
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>Confirm</Text>
            </Pressable>
            <Pressable style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>Cancel</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
        backgroundColor: '#FFF'
    }
})