import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column"
  },

  logo: {
      color: '#F9004D',
      fontSize: 27,
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      position: 'absolute',
      width: 114,
      height: 35,
      left: 15,
      top: 14,
  },

  imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
  },

  rectangle: {
      backgroundColor: 'rgba(0, 0, 0, 0.48)',
      position: 'absolute',
      width: '100%',
      height: '37%',
      left: 0,
      top: '65%',
  },

  text: {
      color: '#FFFFFF',
      fontSize: 23,
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      paddingStart: '5%',
      paddingEnd: '5%',
      top: '10%',
  },

  button: {
      position: 'absolute',
      backgroundColor: '#FF007F',
      borderRadius: 20,
      paddingVertical: 8,
      width: '70%',
      alignSelf: 'center',
      bottom: '43%',
      alignItems: 'center',
      justifyContent: 'center',
  },


  buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      paddingStart: '5%',
      paddingEnd: '5%',
  },

  buttonRegister: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      paddingStart: '5%',
      paddingEnd: '5%',
      top: '50%',
  },

  registerText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
  }
});

export default styles;
