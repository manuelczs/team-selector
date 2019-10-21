import React from 'react';
import {connect} from 'react-redux';

const Suplentes = ({suplentes, quitarSuplente}) => (
  <section className="box">
    <h2 className="title">Suplentes</h2>
    <div className="container">
      {
        suplentes.map(j => (
          <article className="box jugador" key={j.id}>
            <div>
              <img className="img-jugador" src={j.foto} alt={j.nombre}/>
              <button onClick={() => quitarSuplente(j)}>X</button>
            </div>
            <p>{j.nombre}</p>
          </article>
        ))
      }
    </div>
  </section>
)

const mapStateToProps = state => ({
  suplentes: state.suplentes
})

const mapDispatchToProps = dispatch => ({
  quitarSuplente(jugador) {
    dispatch({
      type: 'QUITAR_SUPLENTE',
      jugador
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);