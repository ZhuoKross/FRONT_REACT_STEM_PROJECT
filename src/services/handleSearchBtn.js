

export default async function handleSearch(searchTerm){
    // VERIFICACIÓN DE LA OBTENCIÓN DEL TÉRMINO DE BÚSQUEDA
    //console.log("El término de búsqueda es: ", searchTerm)

    //CREACIÓN DEL FETCH PARA MANDAR EL TÉRMINO DE BÚSQUEDA AL SCRIPT
    const response = await fetch(
        "http://localhost:8081/api/scrapes/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            searchTerm: `${searchTerm}`,
          }),
        }
      );

      if (!response.ok) {
        console.log("ERROR AL OBTENER LOS DATOS");
      }

      const data = await response.json();
      console.log("Los datos de la búsqueda son: ",data)

    return data;
}