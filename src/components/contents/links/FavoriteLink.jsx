import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/outline";

export default function ({onfetchContet}){

    const handleClickfavorite = ()=>{

        onfetchContet();

    }


    return(

        <div className="flex w-full items-center hover:bg-zinc-200">
            <StarIcon className="h-8 w-8 ml-2"/>
            <Link 
                className="text-zinc-700 font-bold text-xl p-6 w-full" 
                to="/Favorite"
                onClick = {handleClickfavorite}
                >
                  Favoritos
            </Link>
          </div>
    );

}