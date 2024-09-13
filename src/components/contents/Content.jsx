import React from "react";
import { useState, useEffect } from "react";
import SkeletonContent from "./SkeletonContent.jsx";
import Search from "./Search.jsx";

export default function Content() {
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/api/scrapes/search",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              searchTerm: "Hack Squat",
            }),
          }
        );

        if (!response.ok) {
          console.log("ERROR AL OBTENER LOS DATOS");
        }

        const data = await response.json();

        setResultados(data);
        setLoading(false);

        
      } catch (error) {
        console.log("ERROR AL RENDERIZAR COMPONENTES", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(()=>{
     console.log("Datos actualizados: ", resultados);
  }, [resultados])


  if (loading) {
    return <p> Cargando...</p>;
  }

  return (
    <div className="w-full mb-6 flex flex-col items-end">

      <Search />
      <h1 className="text-3xl mt-6 mb-12 text-center self-center ">Results of your Search</h1>

        {resultados.map((article) => {
          return(
            <SkeletonContent
                link={article.link}
                title={article.title}
                journal = {article.journal}
                summary={article.summary}
                author={article.author}
            />
          );
        })}
    </div>
  );
}
