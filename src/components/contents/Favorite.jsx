import React, {useEffect} from "react";
import SkeletonContentFav from "./SkeletonContentFav";
import { useSelector, useDispatch } from "react-redux";
import { createContent } from "../../redux/contentSlice";

export default function (){


    const content = useSelector((state) => state.content);
    const dispatch = useDispatch(); 
    
    
    
      useEffect(() => {
        async function fetcDataContents() {
            await fetch("http://localhost:8081/api/contents/all")
            .then(response => response.json())
            .then(data => {
                
                console.log("Data del fetch: ", data);
                dispatch(createContent(data))
                
            })
    
            console.log("Los datos de los contenidos son: ", content);
         
        }
    
        fetcDataContents();
    
      }, [dispatch]);



    return(

        <div className="w-full h-dvh">
            <h1 className="text-3xl mt-5 ml-10">Favorites Page</h1>
            
            <div className=" w-full mb-6 flex flex-col items-end">
                <h2 className="text-3xl">Lista de contenidos</h2>

                {/* {content.map ((contenido) => {
                    return(
                        <SkeletonContentFav 
                            article_id = {contenido.id}
                            link = {contenido.link}
                            title = {contenido.title}
                            author = {contenido.author}
                            journal = {contenido.journal}
                            summary = {contenido.summary}
                        />
                    );
                })} */}
            </div>
        </div>
    );
}