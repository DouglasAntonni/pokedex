# Pokedex Web App

Este é um projeto de uma Pokedex Web interativa, onde é possível visualizar informações detalhadas sobre Pokémons, como seus tipos, habilidades, estatísticas e mais. A aplicação permite carregar mais Pokémons por meio de paginação, e exibe uma "lightbox" com os detalhes do Pokémon ao clicar em um deles.

## Funcionalidades

- **Exibição de Pokémons**: Lista de Pokémons com seus tipos e imagens.
- **Carregamento dinâmico**: Botão "Load More" que permite carregar mais Pokémons sem recarregar a página.
- **Lightbox interativo**: Ao clicar em um Pokémon, uma janela sobreposta exibe detalhes adicionais como tipo, altura, peso e estatísticas.
- **Responsividade**: O layout é responsivo e se adapta a diferentes tamanhos de tela.
- **Estatísticas gráficas**: Exibição visual das estatísticas dos Pokémons com barras de preenchimento.

## Tecnologias Utilizadas

### Frontend

- **HTML5**: Estrutura básica da aplicação e organização de conteúdo.
- **CSS3**: Estilização da página com uso de Flexbox, grid e design responsivo.
  - **Normalize.css**: Utilizado para normalizar estilos entre diferentes navegadores.
  - **Font Roboto**: Fonte personalizada importada do Google Fonts para melhorar a tipografia.
- **JavaScript (ES6+)**: Lógica da aplicação, manipulação de DOM, requisições à API e interação do usuário.
  - **Lightbox**: Criado dinamicamente para exibir detalhes dos Pokémons.
  - **Paginação**: Botão "Load More" para carregar mais resultados de Pokémons.
- **PokeAPI**: API utilizada para obter os dados de Pokémons, como nome, tipos, imagem, altura, peso, e estatísticas.

### Backend

Este projeto é puramente Frontend. Não há uso de um backend para gerenciar os dados dos Pokémons. Todos os dados são consumidos diretamente da PokeAPI.

### Estrutura do Projeto

pokedex/ │ ├── src/ │ ├── styles/ │ │ ├── global.css │ │ ├── pokedex.css │ │ ├── reset.css │ ├── js/ │ │ ├── pokemonModel.js │ │ ├── pokeapi.js │ │ └── script.js ├── index.html └── README.md


### Próximos Passos

**1**Implementar busca por nome ou número do Pokémon.
**1**Adicionar filtros por tipo de Pokémon.
**1**Melhorar a responsividade para telas menores.
**1**Implementar um backend para armazenamento offline dos Pokémons.

#### Contribuições

Sinta-se à vontade para enviar Pull Requests para melhorias ou novos recursos. Qualquer ajuda é bem-vinda!

Desenvolvido por Douglas Antonni



