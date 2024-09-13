import React from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";



export default function Search(){
    return (
        
        <div className="flex flex-row w-full items-center place-content-center mb-5 mt-5">
            <input type="text" name="search-input" id="search-input" className="border-2 border-slate-700 w-100 h-10" />
            <MagnifyingGlassIcon className="w-8 h-10 text-blue-500"/>
        </div>

    );
}