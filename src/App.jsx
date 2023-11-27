import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RockPaperScissorsScreen from '../templates/beforeReact/RockPaperScissorsScreen';
import HomeScreen from '../templates/beforeReact/HomeScreen';
import Layout from '../templates/Layout';

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<HomeScreen />} />
        <Route path="juego" element={<RockPaperScissorsScreen />} />
      </Route>
    </Routes>
  );
}
export default App;