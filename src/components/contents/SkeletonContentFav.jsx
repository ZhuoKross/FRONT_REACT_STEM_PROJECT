import React from "react";



export default function SkeletonContentFav(props){

    //VALIDACIÓN OBTENCIÓN DE LOS PROPS
    // console.log("Link: " + props.link);
    // console.log("Title: " + props.title)
    // console.log("Journal: " + props.journal)
    // console.log("summary: " + props.sumary)
    // console.log("Authors: " + props.author )
    

    



    return(
        <div className="w-3/4 h-72 flex flex-row mb-6 mr-8  bg-bg-white-200 rounded-md shadow-xl" id={props.article_id}>

            

            <div className="flex flex-col h-full w-2/3" id="container-content">
                {/* Title card */}
                <a href={props.link} className="text-2xl font-thin hover:underline ml-6 mt-3"> {props.title} </a>

                {/* author card */}
                <p className="mb-2 mt-2 ml-6 text-neutral-500">{props.author}</p>

                {/* journal card */}
                <p className="mb-3 ml-6 text-neutral-500">{props.journal}</p>

                {/* Summary card */}
                <p className="ml-6 mb-3">{props.summary}</p>

            </div>
            <div className="h-full w-1/3 flex items-center place-content-center" id="container-img-card">
                <h1>Img Card</h1>
            </div>
        </div>

    );
}