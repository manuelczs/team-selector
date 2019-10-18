import React from 'react';
import {connect} from 'react-redux';

const Titulares = ({titulares}) => (
  <section>
    <h2>Titulares</h2>
    <div className="cancha">
      {
        titulares.map(j => (
          <article className="titular">
            <div>
              <img src={j.foto} alt={j.nombre}/>
              <button>X</button>
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

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);