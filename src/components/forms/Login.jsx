import React from "react";
import LoginForm from "./loginForm";


export default function Login(){
    return(
        <div className="flex w-full h-full flex-row items-center">


            {/* side bar */}
            <div className="w-2/3 h-full bg-red-400">
                    <h1> side bar</h1>
            </div>

            {/* Main Container (FORM) */}
            <div className="w-1/3 bg-zinc-600 h-full box-border flex flex-col items-center">
                <h1 className="text-2xl font-bold pl-3">Login</h1>
                <LoginForm />
            </div>
        </div>
    );
}