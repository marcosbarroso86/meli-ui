import React from 'react'
import { Provider } from "react-redux";
import generateStore from './redux/store/store'
import { AppRoutes } from './routes/AppRoutes';
import './App.css'

export const App = () => {

    const store = generateStore();

    return (
        <Provider store={store}>
            <AppRoutes /> 
        </Provider>
    )
}
