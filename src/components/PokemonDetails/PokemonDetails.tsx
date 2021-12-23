import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetails = (props: any) => {
    const { name } = useParams()
    const [details, setDetails] = useState<any>()

    const getPokemonDetails = async () => {
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setDetails(data.data)
    }

    useEffect(() => {
        getPokemonDetails()
    }, [])



    return (
        <>
            {
                details ? (
                    <div className='detail-wrapper'>
                        <img src={details.sprites.other.dream_world.front_default} alt="" />
                        <h1>Species : {details.species.name}</h1>
                        <h1>Name : {details.moves[0].move.name}</h1>
                        <h1>Stats : {details.stats[0].base_stat}</h1>
                        <h1>Type  : {details.types[0].type.name}</h1>
                        <h1>Weight : {details.weight}</h1>
                    </div>
                ) : (
                    null
                )
            }
        </>
    )
}

export default PokemonDetails
