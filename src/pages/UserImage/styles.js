import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF007F',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerInfo: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '8%',
        paddingEnd: '8%',
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginTop: 65,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#FF007F',
        width: '90%',
        height: 37,
        borderRadius: 20,
        marginTop: 33,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRegister: {
        backgroundColor: '#FF007F',
        width: '90%',
        height: 37,
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    register: {
        fontSize: 16,
        color: '#686868',
        marginTop: 34,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        alignItems: 'center',
    },
});

export default styles;
