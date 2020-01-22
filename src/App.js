import React from 'react';
import Clock from './views/index'

function App () {
  function hello () {
    console.log('helloWrod')
  };
  return (
    <div id="App">
      <span onClick={hello}>
        hello word!
      </span>
      <Clock></Clock>
    </div>
  );
}

export default App;
