

export default async function handleAssociateContent (author, journal, link, summary, title, id, id_estudiante){


    //VALIDACIÓN DE LA OBTENCIÓN DE LOS DATOS:
    // console.log("author: ", author);
    // console.log("journal: ", journal);
    // console.log("link: ", link);
    // console.log("summary: ", summary);
    // console.log("title: ", title);
    // console.log("ID_content: ", id);
    // console.log("ID_Estudiante: ", id_estudiante);



    const mainResponse = await fetch("http://localhost:8081/api/contents/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id,
            author,
            journal,
            link,
            summary,
            title
        })
    })

    if(!mainResponse.ok){
        throw new Error("Error al crear Contenido (front)")
    }

    const response = await fetch("http://localhost:8081/api/estudiantes/saveContent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id_estudiante": id_estudiante,
            "id_content": id
        })
    })

    if(!response.ok){
        throw new Error("Error al asociar contenido (front)")   
    }

}
