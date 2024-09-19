const pokemonImage = document.getElementById('pokemonImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPokemonId = 1;

const fetchPokemonData = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        if (!response.ok) throw new Error('Pokémon não encontrado');
        
        const data = await response.json();
        pokemonImage.src = data.sprites.front_default;
        document.body.style.backgroundColor = getBackgroundColor(data.types[0].type.name);
        currentPokemonId = id;
    } catch (error) {
        alert(error.message);
    }
};

const getBackgroundColor = (type) => {
    const colors = {
        fire: '#f5a623',       
        water: '#4a90e2',      
        grass: '#7ed321',      
        electric: '#f8e71c',   
        ice: '#50e3c2',        
        fighting: '#d0021b',   
        poison: '#8b5a9c',     
        ground: '#d9a620',     
        flying: '#4a90e2',     
        psychic: '#e94e77',   
        bug: '#b4c327',        
        rock: '#9b9b9b',      
        ghost: '#9b59b6',     
        dragon: '#f39c12',     
        dark: '#2c3e50',     
        steel: '#95a5a6',     
        fairy: '#f5a6b4'      
    };
    return colors[type] || '#ffffff'; 
};

prevBtn.addEventListener('click', () => {
    if (currentPokemonId > 1) {
        fetchPokemonData(currentPokemonId - 1);
    }
});

nextBtn.addEventListener('click', () => {
    fetchPokemonData(currentPokemonId + 1);
});

fetchPokemonData(currentPokemonId);
