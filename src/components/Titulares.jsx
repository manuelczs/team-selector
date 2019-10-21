import React from 'react';
import {connect} from 'react-redux';

const Titulares = ({titulares, quitarTitular}) => (
  <section className="box">
    <h2 className="title">Titulares</h2>
    <div>
      {
        titulares.map(j => (
          <article className="" key={j.id}>
            <div>
              <img src={j.foto} alt={j.nombre}/>
              <button onClick={() => quitarTitular(j)}>X</button>
            </div>
            <p>{j.nombre}</p>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps = state => ({
  titulares: state.titulares
})

const mapDispatchToProps = dispatch => ({
  quitarTitular(jugador) {
    dispatch({
      type: 'QUITAR_TITULAR',
      jugador
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);