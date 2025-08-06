import { cache, Suspense } from "react"

const URL = 'https://pokeapi.co/api/v2/pokemon/zapdos'


async function Get_API() {
    const response = await fetch(URL, {cache: 'force-cache'})
    const pokemon = await response.json() 

    return (
    <div>
        <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Peso: {pokemon.weight}</p>
    </div>
    )
}

export default function teste() {
    return(
        <div>
            <Suspense fallback = {<div>Loading...</div>}>
                <Get_API/>
            </Suspense>    
        </div>
    )
}