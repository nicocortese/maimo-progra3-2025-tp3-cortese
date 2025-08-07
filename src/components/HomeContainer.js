"use client";

import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CharacterGrid from "@/components/CharacterGrid";
import Loading from "@/components/Loading";

const HomeContainer = () => {
  //fetch de la data
  const BASE_URL = `https://rickandmortyapi.com/api`;
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [allCharacters, setAllCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const getCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/character`);
      setCharacters(response.data.results);
      setAllCharacters(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const handleSearch = () => {
    const match = allCharacters.find(
      (char) => char.name.toLowerCase() === search.toLowerCase()
    );
    if (match) {
      window.location.href = `/character/${match.id}`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#1d1e26]">
      <h1 className="text-7xl flex justify-center py-8 text-[#a6eee699]">
        Rick and Morty UMAI
      </h1>

      <div className="flex justify-center mb-6 w-full max-w-[1200px]">
        <div className="flex items-center bg-[#b7e4f9ff] rounded-2xl px-4 py-2 h-[50px] w-full">
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
      {!loading && <CharacterGrid characters={characters} />}
      {loading && <Loading />}
    </div>
  );
};

export default HomeContainer;
