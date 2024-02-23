import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'




function App() {

  const [pokemones, setPokemones] = useState({})  
  
  return (
    <div>
      <Header />
      
      <div className='grid grid-cols-2'>
        
        <Formulario 
          setPokemones={setPokemones}
        />
        
        {pokemones && <Resultado pokemones={pokemones} />}
      </div>
      
    </div>
    
  )
}

export default App
