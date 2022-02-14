import {StyleSheet} from 'react-native';

export const homeStyles = StyleSheet.create({
  titleView: {alignItems: 'center'},
  buttonsView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: '8%',
  },
  button: {
    padding: '5%',
    marginBottom: '5%',
    marginHorizontal: '15%',
    borderRadius: 15,
    width: '60%',
    height: '17%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    textAlign: 'center',
  },
  logout: {
    alignItems: 'flex-end',
    marginRight: '5%',
    paddingVertical: '2%',
  },
});
