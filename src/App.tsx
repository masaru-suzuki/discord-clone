import React from 'react';
import './App.scss';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
