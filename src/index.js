import React from 'react'
import * as ReactDOM from 'react-dom';
import App from './App'
import { StateProvider } from './contexts/StateProvider'
import reducer, {initialState} from './Reducer'
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
    // it is a wrapper under which we can have excess to all the components of useContext
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
, document.getElementById('root'));
