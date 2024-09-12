import React from "react";



export default function SkeletonContent(props){
    return(
        <div className="w-1/3 h-64 bg-slate-700" id="main-container-card">
            <div className="flex flex-row h-full w-2/3" id="container-content">
                {/* Title card */}
                <a href={props.link} className="text-3xl font-bold font-mono"> {props.title} </a>

                {/* Summary card */}
                <p>{props.summary}</p>

                {/* Title card */}
                <p>{props.author}</p>
            </div>
            <div className="h-full w-1/3 flex items-center place-content-center" id="container-img-card">
                <h1>Img Card</h1>
            </div>
        </div>

    );
}