import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat';
import Login from './login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './utils/ErrorFallBack';
// collection() の第一引数が CollectionReference、DocumentReference または FirebaseFirestore であることを期待する。

function App() {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      // ここで場合わけ忘れていた
      if (loginUser) {
        const { displayName, email, photoURL, uid } = loginUser;
        dispatch(login({ displayName, email, photoURL, uid }));
      } else {
        // ここでdispatchを呼ぶのが参考になる
        dispatch(logout());
      }
    });
  }, [dispatch]);
  // }, [user]);//userにしていたが、これだとログイン時に無限ループになる

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
