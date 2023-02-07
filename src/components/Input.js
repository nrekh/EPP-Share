import React, { useReducer, useEffect } from "react";

const fieldReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return { ...state, value: action.value };
        default:
            return state;
    }
}

const Input = (props) => {
    const [fieldValue, setFieldData] = useReducer(fieldReducer, { value: '' });

    const handleFieldChange = (event) => {
        setFieldData({ type: "CHANGE", value: event.target.value });
    }

    useEffect(() => { props.onInput(props.id, fieldValue.value) },
        [props.id, props.onInput, fieldValue.value]); //nt sure wht this does

    const inputField = <input
        id={props.id} type={props.type} onChange={handleFieldChange} value={fieldValue.value} />
    return (<div>
        <label htmlFor={props.id}>{props.label}</label>
        {inputField}
    </div>);
}

export default Input;