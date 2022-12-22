import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './home';
import LoginFirst from './login_first';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const NavTab = () => {
    return (
    <NavigationContainer style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
      <Tab.Navigator initialRouteName="Feed" activeColor="#30F2B3" inactiveColor="black" barStyle={{ backgroundColor: 'white', marginTop:400 }}>
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26}/>
          ),
        }}
        />
        <Tab.Screen 
        name="  " 
        component={LoginFirst} 
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26}/>
          ),
        }}
        color ={'black'}
        />
      <Tab.Screen 
      name=" "
      component={LoginFirst} 
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26}/>
        ),
      }}
      color ={'black'}
      />
    </Tab.Navigator>
    </NavigationContainer>
    );
}

export default NavTab;
