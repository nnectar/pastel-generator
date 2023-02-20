import React, { useState, useEffect } from 'react';

function getRandomPastelColor() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = 'hsl(' + hue + ', 100%, 85%)';
  return pastel;
}

function App() {
  const [color, setColor] = useState(getRandomPastelColor());
  const [name, setName] = useState('nneoma');

  const handleColorChange = () => {
    setColor(getRandomPastelColor());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleColorChange();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <><div style={{ backgroundColor: color, height: window.innerHeight, width: window.innerWidth }}></div><div style={{ backgroundColor: color }}>
      <h1 style={{ color: color }}>Random Pastel Colors</h1>
      <div id="name" style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginTop: '50px' }}>
        {name}
      </div>
      <button
        style={{
          backgroundColor: '#e6e6fa',
          color: '#333',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          fontSize: '24px',
          marginTop: '50px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        onClick={handleColorChange}
      >
        Generate Color
      </button>
    </div></>
  );
}

export default App;