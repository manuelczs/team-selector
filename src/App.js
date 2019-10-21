import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Jugadores from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';

const App = () => (
  <Provider store={store}>
    <main className="container">
      <h1 className="title box">Team Selector</h1>
      <Jugadores />
      <EquipoSeleccionado />
    </main>
  </Provider>
)

export default App;