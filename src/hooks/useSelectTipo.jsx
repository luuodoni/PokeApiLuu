import { useState } from 'react';

const useSelectTipo = (label, opciones) => {
  const [state, setState] = useState([]);

  const handleCheckboxChange = (value) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const SelectTipo = () => (
    <div className='p-3'>
      <label className='mr-4'>
        {label}
      </label>

      {opciones.map(opcion => (
        <div key={opcion.id} className="flex items-center">
          <input
            type="checkbox"
            id={opcion.id}
            value={opcion.id}
            checked={state.includes(opcion.id)}
            onChange={() => handleCheckboxChange(opcion.id)}
          />
          <label htmlFor={opcion.id} className="ml-2">
            {opcion.nombre}
          </label>
        </div>
      ))}
    </div>
  );

  return [state, SelectTipo];
};

export default useSelectTipo;
