import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    marginTop: '35%',
    marginBottom: '8%',
    paddingStart: '8%',
    paddingEnd: '8%',
    
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF007F',
    display: 'block',
    textAlign: 'center',
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '8%',
    paddingEnd: '8%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'center',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#FF007F',
    width: '90%',
    height: 37,
    borderRadius: 20,
    marginTop: 33,
    justifyContent: 'center',
    alignItems: 'center',
    left: '5%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#686868',
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  register: {
    fontSize: 15,
    color: '#686868',
    marginTop: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 15,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    marginRight: 10,
  },

});

export default styles;
