import React from 'react';
import '../hojas_estylos/hojas-stylos.css'

export const Testimonio = (props) => {
  return (
    <div className='contenedor-testimonio'>
        <img
          className='imagen-testimonio'
          src={require(`../imagenes/testimonio-${props.imagen}.png`)}
          alt={props.alt}
          
          style={{ height: window.innerWidth <= 700 ? '300px' : '370px'}}

        />
        <div className='contendor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong>
          </p>
          <p className='Cargo-testimonio'>
            {props.cargo}
          </p>
          <p className='Texto-testimonio'>
            {props.Testimonio}
          </p>

      </div>

    </div>
  );
};
