import { useState } from 'react'


const useSelectPokemon = (label, opciones) => {

    const [state, setState] = useState('')
  
      const SelectTipo = () => (
          <div className='p-3'>
            <label className='mr-4'>
              {label}
            </label>

            <select
              value={state}
              onChange={ e => setState( e.target.value ) }
            >
              <option value="">-- Seleccione --</option>
  
              {opciones.map( opcion => (
                <option
                  key={opcion.id}
                  value={opcion.id}
                >
                  {opcion.nombre}
                </option>
              ) )}
            </select>
          </div>
      )
    
      return [state, SelectTipo];
}

export default useSelectPokemon