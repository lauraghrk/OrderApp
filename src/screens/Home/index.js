import { View, Text, Button } from 'react-native'

export default function Home({navigation}) {
    return (
        <View>
            <Button title='New Tab' onPress={() => navigation.navigate('NewTab')} />
            <Button title='All Tabs' onPress={() => navigation.navigate('AllTabs')} />
            <Text>Developed by Laura Gehrke</Text>
        </View>
    )
}

