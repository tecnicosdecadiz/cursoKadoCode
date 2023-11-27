import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  return (
    <div className="container mt-5">
      <header>
        <h1>Programas</h1>
      </header>

      <main className="mt-3">
        <div className="card" style={{ width: '18rem' }}>
          {/* <img src="..." className="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Piedra Papel o Tijeras</h5>
            <p className="card-text">
              Trepidante juego, en el que perderas tu vida y moriras solo
            </p>
            <Link to="juego" className="btn btn-primary">
              Acceder
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
