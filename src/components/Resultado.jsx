
import React from 'react'




function Resultado({pokemones}) {

  const nombre = pokemones.nombre;
  const altura = pokemones.altura;
  const ancho = pokemones.ancho;
  const tipo = pokemones.tipo;
  const experienciaBase = pokemones.experienciaBase;
  const imagen = pokemones.imagen;

  return (
    <div>

        <img src={imagen} alt={nombre} className="w-40 h-auto"/>

        <div className='font-pokemon'>

          <h1 className='p-5 font-bold text-2xl'>
            Resultado
          </h1>

            <p className='p-4'>
              Nombre: {' '}
              <span>
                {nombre}
              </span>
            </p>
            <p className='p-4'>
              Tipo: {' '}
              <span>
                {tipo}
              </span>
            </p>
            <p className='p-4'>
              Altura: {' '}
              <span>
                {altura}cm
              </span>
            </p>
            <p className='p-4'>
              Ancho: {' '}
              <span>
                {ancho}cm
              </span>
            </p>
            <p className='p-4'>
              Exp Base: {' '}
              <span>
                {experienciaBase}exp
              </span>
            </p>
            <img src={imagen} alt={nombre} className="w-40 h-auto"/>
            
        </div>
    </div>
  )
}

export default Resultado