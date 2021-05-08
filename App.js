import React from 'react'
import MainStackNavigator from './navigation/MainNavigator'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer','VirtualizedLists']);
const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MainStackNavigator />
            </Provider>
        )
    }
}