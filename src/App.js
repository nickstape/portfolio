import React from 'react';
import './css/App.css';
import Navigation from './components/Navbar';
import Routes from './Routes';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;