import { useEffect, useState } from 'react'
import useSelectPokemon from '../hooks/useSelectPokemon'
import useSelectTipo from '../hooks/useSelectTipo';
import Resultado from './Resultado';



const Formulario = ({setPokemones}) => {

    
    const [pokemons, setPokemons] = useState([]);
    
    
    useEffect(() => {
      const consultarAPI = async () => {
        const arrayPokemons = [];
        const existingIds = new Set();
  
        for (let i = 1; i <= 20; i++) {
          const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
  
          const pokemon = {
            id: resultado.id,
            nombre: resultado.name.charAt(0).toUpperCase() + resultado.name.slice(1),
            tipos: resultado.types.map(tipo => tipo.type.name),
            altura: resultado.height,
            ancho: resultado.weight,
            experienciaBase: resultado.base_experience,
            imagen: resultado.sprites.front_default
          };
  
          // Verifica si el ID ya está en el conjunto antes de agregar el Pokémon
          if (!existingIds.has(pokemon.id)) {
            arrayPokemons.push(pokemon);
            existingIds.add(pokemon.id);
          }
        }
  
        setPokemons(arrayPokemons);
      };
  
      consultarAPI();
    }, []);


    const [nombre, SelectNombre] = useSelectPokemon('Nombre', pokemons.map(pokemon => ({
      id: pokemon.nombre,
      nombre: pokemon.nombre
    })));
    
    const [tipo, SelectTipo] = useSelectTipo('Tipo', pokemons.map(pokemon => ({
      id: pokemon.tipos,
      nombre: pokemon.tipos.join(', ')
    })));
    
    const [altura, SelectAltura] = useSelectPokemon('Altura', pokemons.map(pokemon => ({
      id: pokemon.altura,
      nombre: `${pokemon.altura} cm`
    })));
    
    const [ancho, SelectAncho] = useSelectPokemon('Ancho', pokemons.map(pokemon => ({
      id: pokemon.ancho,
      nombre: `${pokemon.ancho} cm`
    })));
    
    const [experienciaBase, SelectExperienciaBase] = useSelectPokemon('Exp Base', pokemons.map(pokemon => ({
      id: pokemon.experienciaBase,
      nombre: `${pokemon.experienciaBase} exp`
    })));

    const [imagen, SelectImagen] = useSelectPokemon('Imagen', pokemons.map(pokemon => ({
      id: pokemon.imagen,
      nombre: pokemon.imagen
    })));
    

    const handleSubmit = e => {
      e.preventDefault()
      
      console.log({ nombre, tipo, altura, ancho, experienciaBase, imagen });
      setPokemones({ nombre, tipo, altura, ancho, experienciaBase, imagen });
      
    }

  return (
    <div className="font-pokemon block ">
        <form 
          className='flex flex-col shadow-sm bg-gray-300'
          onSubmit={handleSubmit}
        >
            <SelectNombre />
            <SelectTipo />
            <SelectAltura />
            <SelectAncho />
            <SelectExperienciaBase />
            <SelectImagen />

            <input
              type="submit" 
              value="Buscar"
              className='text-center p-5 bg-yellow-500  rounded-md mt-5 mb-5 ml-10 mr-10'  
            />
        </form>

    </div>
  )
}

export default Formulario