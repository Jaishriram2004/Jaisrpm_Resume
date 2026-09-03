import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';

export function HomePage() {
  return (
    <div className="page-wrapper">
      <Hero />
      <About />
    </div>
  );
}
