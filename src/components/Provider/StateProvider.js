import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//Provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull info from data layer
export const useStateValue = () => useContext(StateContext);

export default StateProvider;
