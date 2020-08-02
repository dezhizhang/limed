import React from 'react';
import Button,{ ButtonType } from './components/Button/button'
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import Icon from './components/Icon/icon';
function App() {
  return (
    <div className="App" style={{padding:10}}>
      <Icon icon="coffee" theme="danger"/>
      <Button onClick={() => alert("hello")} btnType={ButtonType.Primary} className="custom">hello</Button>
      <Menu mode="vertical">
        <MenuItem>click1</MenuItem>
        <MenuItem>click2</MenuItem>
        <MenuItem>click3</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
