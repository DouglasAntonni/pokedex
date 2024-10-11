const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const lightbox = document.getElementById('pokemonLightbox');
const lightboxContent = document.getElementById('pokemonDetails');
const closeButton = document.querySelector('.close');

// Armazenar dados dos Pokémon
let pokemonsData = {};

// Variáveis de paginação
let offset = 0;
const limit = 10; // Quantidade de Pokémons por página
const maxRecords = 1311; // Número máximo de Pokémons disponíveis

// Função para converter Pokémon para HTML
function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.types[0]}" onclick="openLightbox(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types ">
                    ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

// Função para abrir o lightbox com os detalhes do Pokémon
function openLightbox(pokemonNumber) {
    const pokemon = pokemonsData[pokemonNumber];
    if (pokemon) {
        const pokemonDetailsHTML = `
            <h2>${pokemon.name} (#${pokemon.number})</h2>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
            <p><strong>Type:</strong> ${pokemon.types.join(', ')}</p>
            <p><strong>Height:</strong> ${(pokemon.height / 10)} m</p>
            <p><strong>Weight:</strong> ${(pokemon.weight / 10)} kg</p>
            <div class="stats">
                ${pokemon.stats.map(stat => `
                    <div class="stat">
                        <span>${stat.stat.name}:</span>
                        <div class="bar">
                            <div class="fill" style="width: ${stat.base_stat}%;">${stat.base_stat}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    
        // Inserir os detalhes no lightbox
        lightboxContent.innerHTML = pokemonDetailsHTML;
    
        // Mostrar o lightbox
        lightbox.classList.remove('hidden');
    }
}

// Função para fechar o lightbox
function closeLightbox() {
    lightbox.classList.add('hidden');
}

// Evento para fechar o lightbox
closeButton.addEventListener('click', closeLightbox);

// Fechar o lightbox ao clicar fora dele
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Função para carregar os Pokémons e adicionar na lista
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemons.forEach(pokemon => {
            pokemonsData[pokemon.number] = pokemon; // Salvar detalhes do Pokémon
        });

        const newHtml = pokemons.map(convertPokemonToLi).join('');
        pokemonList.innerHTML += newHtml; // Adicionar novos Pokémons à lista
    });
}

// Carregar os primeiros 10 Pokémons na inicialização
loadPokemonItens(offset, limit);

// Evento para o botão de "Load More"
loadMoreButton.addEventListener('click', () => {
    offset += limit; // Incrementar o offset

    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        // Remover o botão se atingirmos o limite máximo de Pokémons
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});
