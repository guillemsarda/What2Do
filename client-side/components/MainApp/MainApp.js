import {createStackNavigator} from '@react-navigation/stack';
import {useState} from 'react';

import {Home} from './Home/Home';
import {MyProfile} from './MyProfile';
import {FindEvents} from './FindEvents/FindEvents';
import {LaunchEvent} from './LaunchEvent/LaunchEvent';

const MainAppRoot = createStackNavigator();

export const MainApp = ({route}) => {
  const [credentials] = useState(route.params.credentials[0]);

  return (
    <MainAppRoot.Navigator screenOptions={{headerShown: false}}>
      <MainAppRoot.Screen
        name="Home"
        component={Home}
        initialParams={credentials}
      />
      <MainAppRoot.Screen
        name="MyProfile"
        component={MyProfile}
        initialParams={credentials}
      />
      <MainAppRoot.Screen
        name="FindEvents"
        component={FindEvents}
        initialParams={credentials}
      />
      <MainAppRoot.Screen
        name="LaunchEvent"
        component={LaunchEvent}
        initialParams={credentials}
      />
    </MainAppRoot.Navigator>
  );
};
