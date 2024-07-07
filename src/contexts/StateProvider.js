import React, {createContext, useContext, useReducer} from 'react'

// prepares the data layer  
export const StateContext = createContext()

// wrap our app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (

    // value are the things that we have access to inside out context
    // useReducer takes in 2 things - reducer function and initial state
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}  
    </StateContext.Provider>
)

// useContext is used to access all the components of statecontext
export const useStateValue = () => useContext(StateContext)