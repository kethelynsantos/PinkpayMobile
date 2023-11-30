import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    
  },
  containerImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    display: 'flex',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    fontWeight: 'bold',
    display: 'flex',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF007F',
    width: '90%',
    height: 37,
    borderRadius: 20,
    marginTop: 60,
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
