import React, { useState } from 'react';

// import Header from './Header';

// Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade: informações que um componente PAI passa para o componente FILHO.
// Estado: informações mantidas pelo componente (Lembrar: imutabilidade).

function App() {

  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
