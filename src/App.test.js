import React, { useState, useEffect } from 'react';

function getRandomPastelColor() {
  var hue = Math.floor(Math.random() * 360);
  var pastel = 'hsl(' + hue + ', 100%, 85%)';
  return pastel;
}

function App() {
  const [color, setColor] = useState(getRandomPastelColor());
  const [name, setName] = useState('nneoma');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomPastelColor());
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: color }}>
      <h1 style={{ color: color }}>Random Pastel Colors</h1>
      <div id="name" style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginTop: '50px' }}>
        {name}
      </div>
    </div>
  );
}

export default App;
