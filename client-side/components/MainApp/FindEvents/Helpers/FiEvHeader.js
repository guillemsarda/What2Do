import {Pressable, StyleSheet, Text} from 'react-native';

export const FiEvHeader = ({navigation, section, color}) => {
  return (
    <Pressable
      style={[headerStyles.titleView, {borderBottomColor: color}]}
      onPress={() => navigation.navigate(section)}
    >
      <Text style={[headerStyles.title, {color}]}>{section}</Text>
    </Pressable>
  );
};

const headerStyles = StyleSheet.create({
  titleView: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    marginHorizontal: '4%',
    paddingHorizontal: '5%',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 25,
    textAlign: 'center',
    padding: '2%',
  },
});
