const url = "https://pokeapi.co/api/v2/pokemon/"

const button = document.querySelector('#buscar')
const imagen = document.querySelector('#imagenPokemon')
const carta = document.querySelector('.card')


button.addEventListener('click',()=>{
    const pokemon = document.querySelector('#pokemonABuscar').value.toLowerCase()
    fetch(url+pokemon)
    .then(response => response.json())
    .then(data => {
        imagen.src = data.sprites.front_default
        document.querySelector('.card-title').innerHTML = data.types[0].type.name.toUpperCase()
        document.querySelector('#pokemonCry').src = data.cries.latest
        document.querySelector('#pokemonCrympeg').src = data.cries.latest
        document.querySelector('.card-text').style.display = 'block'
        carta.style.display = 'block'
    })
    .catch(error => console.error("HA ocurrido un error"+error))
})