//import React from "react";
import {getDataContent} from "../../scrapes/exampleScrape.js";
//import SkeletonContent from "./SkeletonContent.jsx";

//EJECUCIÓN DE LA FUNCIÓN PARA HACER EL SCRAPPING DE LOS DATOS
const Resultados = getDataContent().then(data => {console.log(data);});

// PROBAR LA OBTENCIÓN DE LOS DATOS DEL SCRIPT
console.log(Resultados);


export default function Content(){
    return(
        <div>
            <h1>Results of your Search</h1>

            <ul>
                {Resultados.map((result)=>{ 
                    <SkeletonContent 
                        link = {result.link_article}
                        title = {result.title}
                        summary = {result.summary}
                        author = {result.author}
                    />
                })}
            </ul>
        </div>
    );
}