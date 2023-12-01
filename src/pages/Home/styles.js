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
  },
  containerHeaderFunc: {
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
  containerSquareMain: {
    paddingStart: '8%',
    paddingEnd: '8%',
  },
  containerMain: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: '#fff',
  },
  titleBlack: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
  },
  titleGrey: {
    fontSize: 15,
    color: '#616167',
    marginLeft: 30,
    marginRight: 190,
    marginTop: 6,
  },
  titleGreySecond: {
    fontSize: 15,
    color: '#616167',
    marginLeft: 30,
    marginRight: 100,
    marginBottom: 10,
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



  borderedView: {
    width: '100%',
  },
  topBorder: {
    width: '100%',
    height: 1,
    flexShrink: 0,
    backgroundColor: '#D9D9D9',
  },
  borderedContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 20,
  },
  borderedTitle: {
    marginLeft: 10,
    color: '#616167',
    fontSize: 12,
  },
  borderedText: {
    marginLeft: 10,
    color: '#616167',
    fontSize: 12,
  },
  borderedAmount: {
    marginLeft: 5,
    color: '#616167',
    fontSize: 12,
  },
});

export default styles;
