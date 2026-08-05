import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <FeaturesGrid />
  </StrictMode>
);