import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: '#C6CFDA',
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    screenTitle: {
        alignSelf: 'center',
        margin: 30,
        fontWeight: 'bold',
        fontSize: 20
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
    }
})