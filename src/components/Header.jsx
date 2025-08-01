import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Header = ({ currentPage, onPageChange, onSectionScroll }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'inicio', label: 'Início', type: 'page' },
    { id: 'servicos', label: 'Serviços', type: 'section' },
    { id: 'portfolio', label: 'Portfólio', type: 'section' },
    { id: 'contato', label: 'Contato', type: 'page' }
  ];

  const handleMenuClick = (item) => {
    if (item.type === 'page') {
      onPageChange(item.id);
    } else if (item.type === 'section') {
      // Se não estiver na página inicial, navegar para ela primeiro
      if (currentPage !== 'inicio') {
        onPageChange('inicio');
        // Aguardar um pouco para a página carregar antes de fazer scroll
        setTimeout(() => {
          onSectionScroll(item.id);
        }, 100);
      } else {
        onSectionScroll(item.id);
      }
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onPageChange('inicio')}>
            <div className="bg-orange-500 p-2 rounded-lg">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-orange-500 font-bold text-sm">K</span>
              </div>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">KoreArt</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  (currentPage === item.id) || 
                  (currentPage === 'inicio' && item.type === 'section') 
                    ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Sobre Nós Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => onPageChange('sobre')}
              variant={currentPage === 'sobre' ? 'default' : 'outline'}
              className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
            >
              Sobre Nós
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleMenuClick(item);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-orange-500 ${
                    (currentPage === item.id) || 
                    (currentPage === 'inicio' && item.type === 'section') 
                      ? 'text-orange-500' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onPageChange('sobre');
                  setIsMenuOpen(false);
                }}
                variant={currentPage === 'sobre' ? 'default' : 'outline'}
                className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
              >
                Sobre Nós
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

