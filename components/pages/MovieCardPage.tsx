// src/components/pages/MovieCardPage.tsx
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import MovieCard from '../../MovieCard';

const MovieCardPage: React.FC = () => {
  return (
    
    
    <div className="app-container">
        
      <Navbar activePage="moviecard" onNavigate={() => {}} />

      <div className="main-content" style={{ padding: '2rem' }}>

        <MovieCard />
      </div>

      <Footer />
    </div>
  );
};

export default MovieCardPage;