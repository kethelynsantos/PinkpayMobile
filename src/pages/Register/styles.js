import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF007F',
  },
  containerHeader: {
    marginTop: '20%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
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
    fontSize: 16,
    marginTop: 18,
    fontWeight: 'bold',
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

});

export default styles;
