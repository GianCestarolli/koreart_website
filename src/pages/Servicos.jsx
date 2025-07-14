import React from 'react';
import { CheckCircle, Hammer, Tv, Home, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Servicos = ({ onPageChange }) => {
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
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Serviços Especializados
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços de instalação com qualidade profissional 
            e atenção aos detalhes.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Como Trabalhamos
            </h2>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Precisa de Nossos Serviços?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Entre em contato conosco e solicite seu orçamento gratuito!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onPageChange('contato')}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium"
            >
              Solicitar Orçamento
            </Button>
            <Button
              onClick={() => onPageChange('portfolio')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-full text-lg font-medium"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;

