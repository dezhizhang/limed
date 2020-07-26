import React from 'react';
import Button,{ ButtonType } from './components/Button/button'

function App() {
  return (
    <div className="App" style={{padding:10}}>
      <Button onClick={() => alert("hello")} btnType={ButtonType.Primary} className="custom">hello</Button>
    </div>
  );
}

export default App;
