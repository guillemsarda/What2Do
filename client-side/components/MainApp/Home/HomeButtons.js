import {Pressable, Text, View} from 'react-native';
import {homeStyles} from './HomeStyleSheet';

export const HomeButtons = ({title, color, next, navigation}) => {
  return (
    <View style={[homeStyles.button, {backgroundColor: color}]}>
      <Pressable onPress={() => navigation.navigate(next)}>
        <Text style={homeStyles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};
