import { useState } from 'react';

import Perfil from './components/Perfil';
// import Formulario from './components/Formulario';
import ReposList from './components/ReposList';

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);

  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <div className = "search">
        <h3>Digite um usuário do github</h3>
        <input type = "text" onBlur = {(evento) => setNomeUsuario(evento.target.value)} />
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario = {nomeUsuario} />
          <ReposList nomeUsuario = {nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick = {() => setFormularioEstaVisivel(!formularioEstaVisivel)} type = "button">toggle form</button> */}
    </>
  )
}

export default App
