import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio onPageChange={handlePageChange} />;
      case 'servicos':
        return <Servicos onPageChange={handlePageChange} />;
      case 'portfolio':
        return <Portfolio onPageChange={handlePageChange} />;
      case 'contato':
        return <Contato onPageChange={handlePageChange} />;
      case 'sobre':
        return <Sobre onPageChange={handlePageChange} />;
      default:
        return <Inicio onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

