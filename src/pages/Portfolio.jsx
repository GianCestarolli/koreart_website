import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';

const Portfolio = ({ onPageChange }) => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'quadros', label: 'Quadros' },
    { id: 'banheiro', label: 'Banheiro' },
    { id: 'esculturas', label: 'Esculturas' }
  ];

  const portfolioItems = [
    {
      id: 1,
      category: 'quadros',
      title: 'Instalação de Quadros Modernos',
      description: 'Conjunto de quadros geométricos instalados em sala de estar',
      image: '/src/assets/Capturadetela2025-07-10170302.png'
    },
    {
      id: 2,
      category: 'banheiro',
      title: 'Acessórios de Banheiro',
      description: 'Instalação completa de acessórios em banheiro moderno',
      image: '/src/assets/Capturadetela2025-07-10170302.png'
    },
    {
      id: 3,
      category: 'esculturas',
      title: 'Escultura Decorativa',
      description: 'Instalação de escultura moderna em parede',
      image: '/src/assets/Capturadetela2025-07-10170302.png'
    }
  ];

  const filteredItems = activeCategory === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nosso Portfólio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos realizados com excelência e atenção aos detalhes.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                className={`px-6 py-2 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {/* Placeholder para imagem */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">K</span>
                        </div>
                        <p className="text-gray-500 text-sm">Projeto KoreArt</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Showcase Section com imagens reais */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Trabalhos
            </h2>
            <p className="text-lg text-gray-600">
              Exemplos reais dos nossos serviços de instalação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">quadros</h3>
                    <p className="text-sm">Instalação profissional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">BANHEIRO</h3>
                    <p className="text-sm">Acessórios completos</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">esculturas</h3>
                    <p className="text-sm">Arte moderna</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gostou do Nosso Trabalho?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Entre em contato e vamos transformar seu ambiente também!
          </p>
          <Button
            onClick={() => onPageChange('contato')}
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium"
          >
            Solicitar Orçamento
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

