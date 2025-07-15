import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InicioConsolidado from './pages/InicioConsolidado';
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

  const handleSectionScroll = (sectionId) => {
    // Usar a função global exposta pelo componente InicioConsolidado
    if (window.scrollToSection) {
      window.scrollToSection(sectionId);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <InicioConsolidado onPageChange={handlePageChange} />;
      case 'contato':
        return <Contato onPageChange={handlePageChange} />;
      case 'sobre':
        return <Sobre onPageChange={handlePageChange} />;
      default:
        return <InicioConsolidado onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
        onSectionScroll={handleSectionScroll}
      />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;

