export default function handleSubmit(e, name, apellido, email, password){
    e.preventDefault();
    console.log("hola mundo desde HandleSubmit");
    console.log(`your Data is: name: ${name}, apellidos: ${apellido}, email: ${email}, password: ${password}`)
}