import React from 'react';
import Calculator from './components/Calculator/Calculator';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Simple Calculator</h1>
      </header>
      <main className="app-main">
        <Calculator />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Simple Calculator App</p>
      </footer>
    </div>
  );
};

export default App;