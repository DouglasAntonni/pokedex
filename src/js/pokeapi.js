const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then(response => response.json())
        .then(jsonBody => jsonBody.results)
        .then(pokemons => pokemons.map(pokeApi.getPokemonDetail))
        .then(detailRequests => Promise.all(detailRequests))
        .then(pokemonsDetails => pokemonsDetails)
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then(pokeDetail => ({
            name: pokeDetail.name,
            number: pokeDetail.id,
            photo: pokeDetail.sprites.front_default,
            types: pokeDetail.types.map(typeSlot => typeSlot.type.name),
            height: pokeDetail.height,
            weight: pokeDetail.weight,
            stats: pokeDetail.stats
        }))
}
