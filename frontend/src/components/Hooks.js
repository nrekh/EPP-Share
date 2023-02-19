import React, { useReducer, useEffect,useCallback } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value
                    }
                }
            };
        default:
            return state;
    }
}

export const useForms = (initialInputData) =>{
    const [formState,setFormData] = useReducer(formReducer,{inputs:initialInputData});

    const handleInputChange =useCallback((id,value)=>{
        setFormData({type:"CHANGE_INPUT",inputId:id,value})
    },[])

    const handleFormChange =useCallback((inputData)=>{
        setFormData({type:"SET_FORM_DATA",inputs:inputData})
    },[])

    return [formState,handleInputChange,handleFormChange];
}