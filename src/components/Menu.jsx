import React from "react";
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <header className="bg-black flex flex-row w-full h-24 items-center">
        <h1 className="text-white text-3xl font-bold mt-2 mb-2 ml-3 mr-8 w-1/2">
          First React App!
        </h1>
        <div className="container w-1/2 flex place-content-end">
          <ul className="list-none flex flex-row items-center justify-content-end">
            <Link className="text-white font-bold text-xl mr-10" to="/Create">
              Crear
            </Link>
            <Link className="text-white font-bold text-xl mr-12" to="/View">
              Contenidos
            </Link>
          </ul>
        </div>
      </header>
    );
}