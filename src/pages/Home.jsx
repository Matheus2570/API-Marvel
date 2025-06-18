import React from 'react';
import './Home.css';
import ListaPersonagens from '../components/ListaPersonagens';

function Home() {
  return (
    <div style={{display: 'flex'}}>
      <ListaPersonagens />
    </div>
  );
}

export default Home;
