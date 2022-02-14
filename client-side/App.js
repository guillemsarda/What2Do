import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as Font from 'expo-font';

import {Welcome} from './components/Welcome';
import {SignIn} from './components/SignIn';
import {SignUp} from './components/SignUpForm/SignUp';
import {useState} from 'react';
import {MainApp} from './components/MainApp/MainApp';

const Root = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      'Inter-Black': require('./assets/static/Inter-Black.ttf'),
      'Inter-Bold': require('./assets/static/Inter-Bold.ttf'),
      'Inter-ExtraBold': require('./assets/static/Inter-ExtraBold.ttf'),
      'Inter-ExtraLight': require('./assets/static/Inter-ExtraLight.ttf'),
      'Inter-Light': require('./assets/static/Inter-Light.ttf'),
      'Inter-Medium': require('./assets/static/Inter-Medium.ttf'),
      'Inter-Regular': require('./assets/static/Inter-Regular.ttf'),
      'Inter-SemiBold': require('./assets/static/Inter-SemiBold.ttf'),
      'Inter-Thin': require('./assets/static/Inter-Thin.ttf'),
    });
    setLoaded(true);
  }
  loadFonts();
  if (!loaded) return null;

  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen name="Welcome" component={Welcome} />
        <Root.Screen name="SignIn" component={SignIn} />
        <Root.Screen name="SignUp" component={SignUp} />
        <Root.Screen name="MainApp" component={MainApp} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
