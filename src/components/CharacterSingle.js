"use client"

import { useState, useEffect, useCallback, use } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const BASE_URL = `https://rickandmortyapi.com/api`;


const CharacterSingle = ({ character }) => {
const [allCharacters, setAllCharacters] = useState([]);
const [search, setSearch] = useState("");

const getCharacters = useCallback(async () => {
  try {
    const response = await axios.get(`${BASE_URL}/character`);
    setAllCharacters(response.data.results);
  } catch (error) {
    console.log("Error", error);
  }
}, []);

useEffect (() => {
  getCharacters();
}, [getCharacters]);

const handleSearch = () => {
  const match = allCharacters.find(
    (char) => char.name.toLowerCase() === search.toLowerCase()
  );
  if (match) {
    window.location.href = `/character/${match.id}`
  }
};

const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    handleSearch();
  }
}

  return (
    <section className="bg-[#24325fff] text-[#b7e4f9ff] flex flex-col items-center py-8 min-h-screen">
      <div className="w-full max-w-5xl mb-4 flex justify-between items-center">
        <Link
          href="/"
          className="bg-[#1d1e26] text-[#b7e4f9ff] py-2 px-4 rounded-full hover:bg-[#d9d9d9] hover:text-[#1d1e26]"
        >
          Volver a la home
        </Link>
        <h1 className="text-7xl text-shadow-lg text-shadow-[#1d1e26] font-bold text-center mb-3 text-[#fb646799]">
          {character.name}
        </h1>
        <div className="w-32" />
      </div>
      
      <div className="flex justify-center mb-6 w-full max-w-[1020px]">
        <div className="flex items-center bg-[#b7e4f9ff]/80 rounded-2xl px-4 py-2 h-[50px] w-full">
          <input
            type="text"
            placeholder="Buscar personaje"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow  text-[#1d1e26] outline-none"
          />
          <button onClick={handleSearch} className="ml-2 w-8 h-8 cursor-pointer">
            <svg
              className=" text-[#1d1e26]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="m20.71,19.29l-4.39-4.39c1.05-1.35,1.69-3.05,1.69-4.9,0-4.42-3.58-8-8-8S2,5.58,2,10s3.58,8,8,8c1.85,0,3.55-.63,4.9-1.69l4.39,4.39c.39.39,1 .39,1.41,0s.39-1,0-1.41ZM4,10c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z"
              ></path>
              <path
                d="m21.41 18.59-4.53-4.53a8 8 0 1 0-2.82 2.83l4.53 4.53a2 2 0 0 0 2.83-2.83ZM6 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>


      <div className="bg-[#1d1e26] text-[#b7e4f9ff] p-6 rounded-xl shadow-2xl w-full max-w-5xl">
        <div className="flex gap-8">
          <div className="flex-shrink-0">
          <Image
            src={character.image}
            width={400}
            height={450}
            alt={character.name}
            className="rounded-md drop-shadow-[0_2px_10px_rgba(217,217,217,0.15)]"
          />
        </div>

        

        
        <div className="flex flex-col gap-y-8">
          <h2 className="text-3xl font-semibold text-[#fb646799] flex items-center gap-2 mb-2">
            <span className="text-2xl">ℹ️</span> Data</h2>
          <p className="text-xl">
            <span className="font-bold text-2xl">Status: </span>
            {character.status}
          </p>
          <p className="text-xl">
            <span className="font-bold text-2xl">Species: </span>
            {character.species}
          </p>
          <p className="text-xl">
            <span className="font-bold text-2xl">Gender: </span>
            {character.gender}
          </p>
          <p className="text-xl">
            <span className="font-bold text-2xl">Origin: </span>
            {character.origin.name}
          </p>
          <p className="text-xl">
            <span className="font-bold text-2xl">Location: </span>
            {character.location.name}
          </p>
        </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#a6eee699]">
            📺 Episodes - {character.episode.length}
          </h3>
          <ul className="list-disc list-inside text-[#b7e4f9ff]">
            {character.episode.map((ep, index) => {
              return (
                <li key={index} className="mb-3">
                  <Link
                    href={ep}
                    target="_blank"
                    className="text-[#69c8ec99] hover:text-[#d9d9d9] hover:underline"
                  >
                    Episode {ep.split(`/`).pop()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      
    </section>
  );
};
export default CharacterSingle;
