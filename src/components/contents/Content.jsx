import React from "react";
import { useState } from "react";
import SkeletonContent from "./SkeletonContent.jsx";
import Search from "./Search.jsx";
import handleSearch from "../../services/handleSearchBtn.js";

export default function Content() {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  //console.log("1: ", resultados)

  const handleSearchResults = async (searchTerm) => {
    
    setLoading(true);
    

    
    try {
      
      const response = await handleSearch(searchTerm)

      //console.log("los articulos buscados son: ", response);
      setResultados(response);


    } catch (error) {
      console.log("Error al cargar data", error)
    }finally{

      setLoading(false)

    }
  }

  
  return (
    <div className="w-full mb-6 flex flex-col items-end">

      <Search onSearch={handleSearchResults}/>
      <h1 className="text-3xl mt-6 mb-12 text-center self-center ">Results of your Search</h1>

        {resultados.map((article, i) => {
          return(
            <SkeletonContent
                link={article.link}
                title={article.title}
                journal = {article.journal}
                summary={article.summary}
                author={article.author}
                key={article.id}
                article_id={article.id}
            />
          );
        })}
    </div>
  );
}
