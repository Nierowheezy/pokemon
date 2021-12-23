import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";
import Spinner from './components/utils/Spinner/Spinner';
import Main from './Main';



const App = () => {

  const [allPokemons, setAllPokemons] = useState<any>([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=16")
  const [nextPageUrl, setNextPageUrl] = useState<any>()
  const [prevPageUrl, setPrevPageUrl] = useState<any>()
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState<string>('');


  const getAllPokemons = async () => {
    setLoading(true);
    const res = await axios.get(currentPageUrl)

    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)

    function createPokemonObject(results: any) {
      results.forEach(async (pokemon: any) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        setLoading(false)
        setAllPokemons((currentList: any) => [...currentList, res.data])
        await allPokemons.sort((a: any, b: any) => a.id - b.id)
      })
    }
    createPokemonObject(res.data.results)
  }

  useEffect(() => {
    getAllPokemons();
    //eslint-disable-next-line
  }, [currentPageUrl])



  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }


  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }


  const searchPokemon = async () => {

    console.log(allPokemons)
    const data = allPokemons.filter((poke: any) => poke.name !== searchValue)
    if (data) {
      console.log(data)
    }
    setAllPokemons((currentList: any) => [...currentList, data])

  }

  if (loading) {
    return (
      <Spinner />
    )
  }


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main allPokemons={allPokemons} setSearchValue={setSearchValue} searchPokemon={searchPokemon} gotoPrevPage={prevPageUrl ? gotoPrevPage : null} gotoNextPage={nextPageUrl ? gotoNextPage : null} getAllPokemons={getAllPokemons} />} />
          <Route path="/:name" element={<PokemonDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
