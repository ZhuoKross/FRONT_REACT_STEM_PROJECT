
// FUCNTION FOR FETCH THE CONTENT ASOCIATED WITH EACH USER
export default async function fetchContent(id_estudiante) {
    

    const response = await fetch(`http://localhost:8081/api/estudiantes/fetchContent/${id_estudiante}`)

    const data = await response.json()

    console.log("Los contenidos asociados al usuairo son: ", data);

    return data;

}