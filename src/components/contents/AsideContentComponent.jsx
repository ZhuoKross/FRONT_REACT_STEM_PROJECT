import React from "react";
import {BookmarkIcon} from "@heroicons/react/24/outline";


export default function({onAssociate}){

    const handleAssociateContent = (e) =>{

        const articleContainer = e.target.parentNode.parentNode.parentNode;
        const idArticle = articleContainer.id;
        const titleArticle =  articleContainer.children[1].children[0].textContent;
        const linkArticle =  articleContainer.children[1].children[0].getAttribute("href");
        const authorsArticle = articleContainer.children[1].children[1].textContent;
        const journalArticle = articleContainer.children[1].children[2].textContent;
        const summaryArticle = articleContainer.children[1].children[3].textContent;
        const idEstudiante = 1;

        //VALIDACIÓN DE LA OBTENCIÓN DE LOS ELEMENTOS DEL OBJETO DEL EVENTO
        //console.log("El elemento del evento es: ", articleContainer);
        // console.log("El id del elemento del evento es: ", idArticle);
        // console.log("El link del elemento del evento es: ", linkArticle);
        // console.log("El title del elemento del evento es: ", titleArticle);
        // console.log("El author del elemento del evento es: ", authorsArticle);
        // console.log("El journal del elemento del evento es: ", journalArticle);
        // console.log("El summary del elemento del evento es: ", summaryArticle);
        

        //CREACIÓN DEL OBJETO PARA TRANSFERIRLO AL FETCH    
        const article = {
            idArticle,
            linkArticle,
            titleArticle,
            authorsArticle,
            journalArticle,
            summaryArticle,
            idEstudiante
        }
        

        onAssociate(article);
    }


    return(

        <div className="flex flex-col h-full">

            <button onClick={(e) => {handleAssociateContent(e)}}>
                <BookmarkIcon className="h-7 w-7 mt-8 ml-2 text-blue-600"/>
            </button>
            
        </div>

    );
}