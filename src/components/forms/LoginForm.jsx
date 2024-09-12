import React from "react";
import { useState } from "react";
import HandleLoginForm from "../../services/handleFormLogin";


export default function LoginForm(){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <form 
        onSubmit={() => {HandleLoginForm(email, password)}}
        className="flex flex-col items-center place-content-center rounded-lg w-full me-4 ml-4"
        >
            {/* email */}
            <label htmlFor="email" className="w-full px-3 box-border"> Email <br />
                <input 
                type="text"
                name="email" 
                value={email}
                id="email"  
                onChange={(e) => {setEmail(e.target.value)}}
                className="mb-8 h-10 w-ful rounded-sm"/>
            </label>

            {/* password */}
            <label htmlFor="password" className="w-full px-3 box-border"> Contraseña <br />
                <input 
                type="password" 
                name="password" 
                value={password}
                id="password" 
                onChange={(e) => {setPassword(e.target.value)}}
                className="mb-8 h-10 w-full rounded-sm"/>
            </label>

            <input type="submit" value="Ingresar" className="h-8 rounded-md w-full me-2 ml-2"/>
        </form>
    );

}