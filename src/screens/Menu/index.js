import { View, Text, Pressable } from 'react-native'
import { globalStyles } from '../../styles/global'

export default function Menu() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>MENU</Text>
            
            <Text>Cliente: {}</Text>

            <Pressable style={globalStyles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={globalStyles.buttonText}>Cancel</Text>
            </Pressable>
        </View>
    )
}