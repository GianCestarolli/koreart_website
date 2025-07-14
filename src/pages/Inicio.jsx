import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, CheckCircle, Hammer, Image, Home, Wrench } from 'lucide-react';

const Inicio = ({ onPageChange }) => {
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
                onClick={() => onPageChange('portfolio')}
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

      {/* Seção de Serviços Rápida */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Serviços Especializados
            </h2>
            <p className="text-lg text-gray-600">
              Oferecemos uma gama completa de serviços de instalação com qualidade profissional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Instalação de Quadros',
                description: 'Instalação profissional de quadros de todos os tamanhos',
                features: ['Medição precisa', 'Fixação segura', 'Nivelamento perfeito']
              },
              {
                title: 'Instalação de TVs',
                description: 'Montagem e instalação de televisores em paredes',
                features: ['Suporte resistente', 'Organização de cabos', 'Posicionamento ideal']
              },
              {
                title: 'Acessórios de Banheiro',
                description: 'Instalação de acessórios de banheiro',
                features: ['Fixação em azulejos', 'Resistente à umidade', 'Acabamento perfeito']
              },
              {
                title: 'Acessórios de Decoração',
                description: 'Instalação de prateleiras decorativas',
                features: ['Fixação em azulejos', 'Resistente à umidade', 'Acabamento perfeito']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                  <Hammer className="text-orange-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onPageChange('servicos')}
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Ver Todos os Serviços
            </Button>
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

export default Inicio;

