import React, { useState } from "react";
import { useForms } from "./Hooks";
import Input from "./Input";

const Login = (props) => {

    const [formState,handleInputChange,handleFormChange] = useForms({ email: { value: "" }, pwd: { value: "" } });
    const [isLoginInd, setLoginInd] = useState(true);

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('in login / signup form submit');
    }

    const loginOrRegister =() =>{
        if(!isLoginInd){
            handleFormChange({name:undefined});
        }
        else handleFormChange({...formState.inputs,name:{value:""}});
        setLoginInd(!isLoginInd);
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                {!isLoginInd && 
                (<Input id="name" element="input" type="text" label="Name" onInput={handleInputChange} />)
                }
                <Input id="email" element="input" type="email" label="E-mail" onInput={handleInputChange} />
                <Input id="password" element="input" type="password" label="Password" onInput={handleInputChange} />
                <button type="submit">{isLoginInd ? "Login" : "Register"}</button>
                <button type="button" onClick={loginOrRegister}> Go to {isLoginInd ? "Register" : "Login"} form</button>
            </form>
        </div>
    )
}

export default Login;