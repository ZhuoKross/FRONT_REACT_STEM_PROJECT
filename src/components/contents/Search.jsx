import React from "react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import { useState } from "react";
import handleSearch from "../../services/handleSearchBtn";



export default function Search({onSearch}){

    const [searchTerm, setSearchTerm] = useState("");

    const  handleClickEvent =  () =>{
        onSearch(searchTerm)
    }

    console.log("Desde search component: ", searchTerm)
    
    return (
        
        <div className="flex flex-col w-full items-center place-content-center mb-5 mt-5">
            <h1 className="text-6xl mb-32 mt-7">What you want to learn?</h1>
            
            <div className="flex">
                <input 
                    type="text" 
                    name="search-input" 
                    id="search-input" 
                    className="border border-r-0 border-slate-700 h-10"
                    onChange={(e) =>{setSearchTerm(e.target.value)}}
                    value={searchTerm}  
                    style={{width: "500px"}}
                    />


                
                <button className="border border-l-0 border-slate-700" onClick={handleClickEvent}>
                    <MagnifyingGlassIcon 
                        className="w-8 text-zinc-500 hover:text-zinc-950"
                        style={{height: "2.4rem"}}
                        />
                </button>
            </div> 
        </div>

    );
}