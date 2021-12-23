import PokemonList from './components/PokemonList/PokemonList';

const Main = (props: any) => {

    const { allPokemons, gotoNextPage, gotoPrevPage, searchPokemon, setSearchValue } = props

    return (
        <div className="app-contaner">
            <h1>Pokemon</h1>
            <input type="text" placeholder='search' onChange={(e) => setSearchValue(e.target.value)} className='search-input' />
            <button className='search-pokemon' disabled onClick={() => searchPokemon()}>search</button>
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemonStats: any, index: any) =>
                        <PokemonList
                            key={index}
                            id={pokemonStats.id}
                            image={pokemonStats.sprites.other.dream_world.front_default}
                            name={pokemonStats.name}
                            type={pokemonStats.types[0].type.name}
                        />)}
                </div>
                {gotoPrevPage && <button className="load-more" onClick={() => gotoPrevPage()}>previous</button>}
                {gotoNextPage && <button className="load-more" onClick={() => gotoNextPage()}>Next</button>}


            </div>
        </div>
    );
}

export default Main;