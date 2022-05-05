import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TodayNavigator } from "../navigation/today.navigator";
import { JournalsNavigator } from '../navigation/journals.navigator';

const SideMenu = createDrawerNavigator();

export const SideMenuNavigator = () => {
  return (
      <SideMenu.Navigator initialRouteName="Today" screenOptions={{headerShown: false}}>
        <SideMenu.Screen name="Journals" component={TodayNavigator} />
      </SideMenu.Navigator>
  );
};