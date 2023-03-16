import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home'
import NewTab from './src/screens/NewTab'
import AllTabs from './src/screens/AllTabs'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title: 'OrderApp'}} />
        <Stack.Screen name='NewTab' component={NewTab} options={{title: 'OrderApp'}}/>
        <Stack.Screen name='AllTabs' component={AllTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}