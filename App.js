import React from 'react'

import 'react-native-gesture-handler';
import { Provider } from 'react-redux'
import  store  from './Store/configureStore'
import Navigation from './Components/Navigation/Navigation'



export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  
  
  
    )
  }
 
}


