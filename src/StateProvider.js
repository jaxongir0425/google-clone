import React, {createContext, useContext, useReducer} from "react";


// Malumotlarni yaratish paneli
export const StateContext = createContext();

export const StateProvider = ({
                                  reducer, initialState, children
                              }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Ma'lumotlar qatlamidan ma'lumotlarni olishimizga imkon beradigan Hook
export const useStateValue = () => useContext(StateContext);