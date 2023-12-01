import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF007F',
  },
  containerHeader: {
    marginBottom: '18%',
    paddingStart: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIconContainer: {
    marginLeft: 20,
    marginRight: 140,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingStart: '8%',
    paddingEnd: '8%',
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  titleSquare: {
    fontSize: 12,
    color: '#000',
  },
  containerSquare: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
  },
  square: {
    width: 98,
    height: 91,
    backgroundColor: 'white', 
    position: 'relative',
    bottom: 40,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 9,
    elevation: 5,
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
});

export default styles;
