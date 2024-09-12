export default function handleSubmit(e, name, apellido, email, password){
    //e.preventDefault();
    console.log("hola mundo desde HandleSubmit");
    console.log(`your Data is: name: ${name}, apellidos: ${apellido}, email: ${email}, password: ${password}`)

    fetch("http://localhost:8081/api/estudiantes/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombres: name,
            apellidos: apellido,
            email: email,
            contraseña: password
        })
            
    })
}