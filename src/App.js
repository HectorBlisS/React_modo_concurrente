import React, {lazy, Suspense} from 'react'
import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorB'
import CharList from './Charlist';
// const Home = lazy(()=>import('./Home')) // pending | success | error

function App() {
  return (
    <div className="App">

    <ErrorBoundary fallback="Ya valió baby!">
      <Suspense fallback={<h1>Cargando...</h1>}>
        <CharList />
      </Suspense>
    </ErrorBoundary>

    </div>
  );
}

export default App;
