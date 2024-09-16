import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <aside className="bg-black flex flex-col w-80 h-dvh place-content-center">
        <h1 className="text-white text-2xl font-bold mt-2 mb-2 ml-3 mr-8 w-1/2">
          First React App!
        </h1>
        <div className="container w-full flex place-content-start">
          <ul className="list-none w-full flex flex-col justify-content-start">
            <Link 
              className="text-white font-bold text-xl p-6 hover:bg-zinc-800 block w-full" 
              to="/View">
                Contenidos
            </Link>
            <Link 
              className="text-white font-bold text-xl p-6 hover:bg-zinc-800 w-full" 
              to="/Create">
              Crear
            </Link>
          </ul>
        </div>
      </aside>
    );
}