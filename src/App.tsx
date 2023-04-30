import React from 'react';
import './App.scss';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';
import Login from './login/Login';
import { useAppSelector } from './app/hooks';

function App() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="App">
      {user ? (
        <>
          {' '}
          {/* sidebar */}
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Sidebar />
          </ErrorBoundary>
          {/* chat */}
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
