import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, CheckCircle, Hammer, Image, Home, Wrench, Tv, Grid3X3 } from 'lucide-react';

const InicioConsolidado = ({ onPageChange }) => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const servicosRef = useRef(null);
  const portfolioRef = useRef(null);

  // Função para scroll suave para seções
  const scrollToSection = (sectionId) => {
    const refs = {
      'servicos': servicosRef,
      'portfolio': portfolioRef
    };
    
    const targetRef = refs[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Expor função para o componente pai
  useEffect(() => {
    window.scrollToSection = scrollToSection;
  }, []);

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
      description: 'Conjunto de quadros geométricos instalados em sala de estar'
    },
    {
      id: 2,
      category: 'banheiro',
      title: 'Acessórios de Banheiro',
      description: 'Instalação completa de acessórios em banheiro moderno'
    },
    {
      id: 3,
      category: 'esculturas',
      title: 'Escultura Decorativa',
      description: 'Instalação de escultura moderna em parede'
    }
  ];

  const filteredItems = activeCategory === 'todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const services = [
    {
      icon: <Hammer className="text-orange-500" size={32} />,
      title: 'Instalação de Quadros',
      description: 'Instalação profissional de quadros de todos os tamanhos com técnicas especializadas e ferramentas adequadas.',
      features: [
        'Medição precisa',
        'Fixação segura',
        'Nivelamento perfeito'
      ]
    },
    {
      icon: <Tv className="text-orange-500" size={32} />,
      title: 'Instalação de TVs',
      description: 'Montagem e instalação de televisores em paredes com suporte adequado e organização de cabos.',
      features: [
        'Suporte resistente',
        'Organização de cabos',
        'Posicionamento ideal'
      ]
    },
    {
      icon: <Home className="text-orange-500" size={32} />,
      title: 'Acessórios de Banheiro',
      description: 'Instalação de acessórios de banheiro como toalheiros, saboneteiras e outros itens de decoração.',
      features: [
        'Fixação em azulejos',
        'Resistente à umidade',
        'Acabamento perfeito'
      ]
    },
    {
      icon: <Grid3X3 className="text-orange-500" size={32} />,
      title: 'Acessórios de Decoração',
      description: 'Instalação de prateleiras decorativas e funcionais em diversos tipos de parede.',
      features: [
        'Fixação em azulejos',
        'Resistente à umidade',
        'Acabamento perfeito'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo Principal */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  KoreArt
                </h1>
                <p className="text-xl text-orange-500 font-medium mb-6">
                  Instalações de Quadros
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  A KoreArt é referência em instalação profissional de quadros, espelhos e 
                  peças decorativas.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Com anos de experiência e precisão técnica, transformamos ambientes 
                  residenciais, corporativos e galerias em espaços sofisticados, valorizando 
                  cada detalhe.
                </p>
              </div>

              {/* Estatísticas */}
              <div className="flex space-x-8">
                <div>
                  <div className="text-3xl font-bold text-orange-500">10mil+</div>
                  <div className="text-sm text-gray-600">clientes atendidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">25+</div>
                  <div className="text-sm text-gray-600">anos no mercado</div>
                </div>
              </div>

              {/* Botão Portfólio */}
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium"
              >
                Portfólio
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Área da Imagem/Personagem */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8 relative overflow-hidden">
                {/* Ícones decorativos */}
                <div className="absolute top-8 right-8">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Image className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-20 right-12">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Hammer className="text-white" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8">
                  <div className="bg-orange-500 p-3 rounded-lg">
                    <Wrench className="text-white" size={24} />
                  </div>
                </div>

                {/* Placeholder para personagem 3D */}
                <div className="h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Home className="text-white" size={48} />
                    </div>
                    <p className="text-gray-600 font-medium">Profissional KoreArt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section ref={servicosRef} className="py-16 bg-gray-50" id="servicos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviços Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de instalação com qualidade profissional 
              e atenção aos detalhes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-orange-100 p-4 rounded-xl w-fit mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Como Trabalhamos
              </h3>
              <p className="text-lg text-gray-600">
                Nosso processo garante qualidade e satisfação em cada projeto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Avaliação',
                  description: 'Analisamos o local e suas necessidades específicas para o projeto.'
                },
                {
                  step: '02',
                  title: 'Planejamento',
                  description: 'Desenvolvemos a melhor estratégia de instalação para seu espaço.'
                },
                {
                  step: '03',
                  title: 'Execução',
                  description: 'Realizamos a instalação com precisão técnica e acabamento perfeito.'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    {process.title}
                  </h4>
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Portfólio */}
      <section ref={portfolioRef} className="py-16" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nosso Portfólio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira alguns dos nossos trabalhos realizados com excelência e atenção aos detalhes.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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

          {/* Portfolio Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
            <div className="text-center py-12 mb-16">
              <p className="text-gray-500 text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}

          {/* Showcase Section com imagens reais */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Nossos Trabalhos
              </h3>
              <p className="text-lg text-gray-600">
                Exemplos reais dos nossos serviços de instalação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">quadros</h4>
                      <p className="text-sm">Instalação profissional</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">BANHEIRO</h4>
                      <p className="text-sm">Acessórios completos</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-xl font-bold">esculturas</h4>
                      <p className="text-sm">Arte moderna</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Transformar Seu Ambiente?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Solicite seu orçamento gratuito e tire suas dúvidas!
          </p>
          <Button
            onClick={() => onPageChange('contato')}
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium"
          >
            Entre em Contato
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InicioConsolidado;

