import React from 'react';
import { connect } from 'react-redux';

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
  <section className="box">
    <h2 className="title">Jugadores</h2>
    <div className="">
      {
        jugadores.map(j => (
          <article className="box" key={j.id}>
            <img src={j.foto} alt={j.nombre}/>
            <h3>{j.nombre}</h3>
            <div>
              <button className="button is-success" onClick={() => agregarTitular(j)}>Titular</button>
              <button className="button is-info" onClick={() => agregarSuplente(j)}>Suplente</button>
            </div>
          </article>
        ))
      }
    </div>
  </section>
);

const mapStateToProps = state => ({
  jugadores: state.jugadores
})

const mapDispatchToProps = dispatch => ({
  agregarTitular(jugador) {
    dispatch({
      type: 'AGREGAR_TITULAR',
      jugador
    })
  },

  agregarSuplente(jugador) {
    dispatch({
      type: 'AGREGAR_SUPLENTE',
      jugador
    })
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
