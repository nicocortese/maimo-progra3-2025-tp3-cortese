"use client"

import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import CharacterGrid from "@/components/CharacterGrid"

const HomeContainer = () => {

    //fetch de la data
  const BASE_URL = `https://rickandmortyapi.com/api`
  const {characters, setCharacters} = useState([])
  const {loading, setLoading} = useState(true)
  const {error, setError} = useState(false)

  useEffect(()=> {
    getCharacters()
  }, [])

  const getCharacters = useCallback(async ()=> {
    try {
      setLoading(true);
      const response =  await axios.get(`${BASE_URL}/characters`)
      setCharacters(response.data.results)
      setLoading(false);
    } catch (error) {
      setError(true)
    }

  }, [])


  return (
    <div>
      <h1 className="text-5xl flex justify-center py-8">Rick and Morty UMAI</h1>
        {!loading && <CharacterGrid characters={characters} />}
        {loading && <div className="flex justify-center items-center min-h-[300px]">Loading...</div>}
    </div>
  )
}

export default HomeContainer