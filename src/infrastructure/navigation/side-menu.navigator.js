import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TodayNavigator } from "../navigation/today.navigator";
import { SideMenu } from '../../components/side-menu/side-menu.component';
const SideMenuDrawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  return (
      <SideMenuDrawer.Navigator 
        drawerContent={(props) => <SideMenu {...props} />}
        initialRouteName="Today" 
        screenOptions={{ headerShown: false, swipeEdgeWidth: 0 }}
        useLegacyImplementation
      >
        <SideMenuDrawer.Screen 
          name="Home" 
          component={TodayNavigator}   
          options={{ drawerItemStyle: { height: 0 } }}
        />
      </SideMenuDrawer.Navigator>
  );
};