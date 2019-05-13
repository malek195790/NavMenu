import React from 'react';
import './App.css';
import NavMenu from './NavMenu';
const list = [
  {name:'Home'},
  {name:'Services',sub:['For entrepreneurs','For students','For hobbyists']},
  {name:'Contact'}]


function App() {
  return (
    <div className="App">
      <NavMenu  info={list}/>
    </div>
  );
}

export default App;
