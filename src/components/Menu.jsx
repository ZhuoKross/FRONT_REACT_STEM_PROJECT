import React from "react";
import { Link } from "react-router-dom";
import profile_img from "../assets/profile_img_03.jpg"
//import fetchContent from "../services/fetchFavoriteContent";
//import { useState } from "react";
import { CalendarDaysIcon, BookOpenIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import FavoriteLink from "./contents/links/FavoriteLink";

export default function Menu(){


    // const id_estudiante = 1;

    // const handleClickEventFavorite = async ()=>{
    //     try{
          
    //       const res = await fetchContent(id_estudiante);

    //       console.log("Los datos del fetch (Menu) son: ", res);


    //     }catch(e){
    //       throw new Error("Error al traer contenido (Menu)", e);
    //     }
    // }



    const imgProfileStyle = {
      backgroundImage: `url(${profile_img})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }


    return(
        <aside className="bg-zinc-100 flex flex-col w-80 h-dvh place-content-center">
        <h1 className="text-zinc-700 text-2xl font-bold mt-2 mb-2 ml-4">
          First React App!
        </h1>
        
        {/* profile IMG */}
        <div className="flex flex-col items-center w-full mb-auto mt-5">
          <div className="h-32 w-32 rounded-full" style={imgProfileStyle}></div>
          <div>
            <Link className="text-zinc-700 hover:text-zinc-950 text-lg m-4 block" to={"/Profile"}>Albert Wisdom</Link>
          </div>
        </div>

        {/* Navbar */}
        <div className="container w-full flex place-content-start mb-14">
          <ul className="list-none w-full flex flex-col justify-content-start">
            
            {/* Link Contents */}
            <div className="flex w-full items-center hover:bg-zinc-200">
              <BookOpenIcon  className="h-8 w-8 ml-2"/>
              <Link 
                className="text-zinc-700 font-bold text-xl p-6 block w-full" 
                to="/Content">
                  Contenidos
              </Link>
            </div>


            {/* Link Favoritos */}
            {/* onfetchContet={handleClickEventFavorite} */}
            <FavoriteLink />

            {/* Link Actividades */}
            <div className="flex w-full items-center hover:bg-zinc-200">
              <CalendarDaysIcon  className=" h-8 w-8 ml-2"/>
              <Link 
                className="text-zinc-700 font-bold text-xl p-6 w-full" 
                to="/Works">
                  Actividades
              </Link>
            </div>
          </ul>
        </div>

        {/* Footer Nabvar */}
        <div className="w-full flex items-center hover:bg-zinc-200 p-6">
          <ArrowRightEndOnRectangleIcon className="h-8 w-8 mr-2"/>
          <a className="text-xl" href="#">Cerrar sesión</a>
        </div>
      </aside>
    );
}