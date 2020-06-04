import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, StyleSheet } from 'react-native'
import Search from '../Search'
import FilmDetail from '../FilmDetail'
import FavoriteFilm from '../FavoriteFilm'


const Stack = createStackNavigator();
const StackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Search" component={Search} />
    <Stack.Screen name="FilmDetail" component={FilmDetail} />
  </Stack.Navigator>
)
const FavoriteScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="FavoriteFilm" component={FavoriteFilm} />
    <Stack.Screen name="FilmDetail" component={FilmDetail} />
  </Stack.Navigator>
)
const Tab = createBottomTabNavigator();
const Navigation = () => (

  <NavigationContainer>
    <Tab.Navigator
      initialRouteName="StackScreen"
      tabBarOptions={{
        activeBackgroundColor: '#DDDDDD',
        inactiveBackgroundColor: '#FFFFFF',
        showLabel: false,
        showIcon: true
      }}
    >
      <Tab.Screen name="StackScreen"
        component={StackScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Image source={require('../../images/ic_search.png')} style={styles.icon} />
            )
          }
        }}

      />
      <Tab.Screen name="FavoriteScreen"
        component={FavoriteScreen}
        options={{
          tabBarIcon: () => {
            return (
              <Image source={require('../../images/ic_favorite.png')} style={styles.icon} />
            )
          }
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>

)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  }
})

export default Navigation