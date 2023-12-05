import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    input: {
        height: 50,
        color: '#000',
        fontSize: 23,
        marginTop: 45,
        borderBottomWidth: 1,
        borderBottomColor: '#FF007F'
    },
    button: {
        backgroundColor: '#FF007F',
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
    }
})

export default styles;