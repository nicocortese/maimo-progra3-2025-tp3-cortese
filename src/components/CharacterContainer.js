"use client";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import CharacterSingle from "./CharacterSingle";

const CharacterContainer = ({ id }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCharacter = useCallback(async () => {
    const BASE_URL = `https://rickandmortyapi.com/api/`;

    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}character/${id}`);
      setCharacter(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Hubo un error", );
    }
  }, []);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  return <div>{!loading && <CharacterSingle character={character} />}</div>;
};

export default CharacterContainer;
