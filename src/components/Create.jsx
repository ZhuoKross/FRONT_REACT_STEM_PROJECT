import React from "react";
import { useState } from "react";
import handleSubmit from "../services/handleFormCreate";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apellido, setApellido] = useState("");

  return (
    <div className="flex flex-col items-center place-content-center w-full">
      <h1 className="text-3xl text-zinc-800 font-bold text-center mt-20 mb-2">
        Create Form Student
      </h1>
      <form
        onSubmit={(e) => {handleSubmit(e, name, apellido, email, password)}}
        className="bg-zinc-800 flex flex-col w-1/2 place-content-center p-8 rounded-md"
      >
        <label htmlFor="name" className="block text-white font-semibold">
          Nombre <br />
          {/* name */}
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="name"
            className="mb-4 rounded-lg w-full h-10 text-black"
          />
        </label>

        {/* Apellidos */}
        <label htmlFor="email" className="text-white font-semibold">
          Apellidos <br />
          <input
            type="text"
            value={apellido}
            onChange={(e) => {
              setApellido(e.target.value);
            }}
            id="apellido "
            className="mb-4 rounded-lg w-full h-10 text-black"
          />
        </label>

        {/* email */}
        <label htmlFor="email" className="text-white font-semibold">
          Email <br />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            className="mb-4 rounded-lg w-full h-10 text-black"
          />
        </label>

        {/* Password */}
        <label htmlFor="email" className="text-white font-semibold">
          Contraseña <br />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            className="mb-4 rounded-lg w-full h-10 text-black"
          />
        </label>
        
        


        {/* button submit */}
        <div className="flex place-content-center">
          <input
            type="submit"
            className="mt-7 bg-slate-100 w-48 rounded-md h-8"
          />
        </div>
      </form>
    </div>
  );
}
