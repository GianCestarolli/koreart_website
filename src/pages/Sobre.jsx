import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { CheckCircle, Award, Users, Clock, Target, Heart } from 'lucide-react';

const Sobre = ({ onPageChange }) => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a KoreArt
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa história, valores e o que nos torna referência em instalações profissionais.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A KoreArt nasceu da paixão por transformar ambientes através da arte e decoração. 
                  Com mais de 25 anos de experiência no mercado, nos especializamos em instalações 
                  profissionais que valorizam cada detalhe.
                </p>
                <p>
                  Começamos como uma pequena empresa familiar e hoje somos referência em São Paulo 
                  e região metropolitana, tendo atendido mais de 10 mil clientes satisfeitos.
                </p>
                <p>
                  Nossa missão é transformar espaços residenciais, corporativos e galerias em 
                  ambientes sofisticados, sempre com precisão técnica e atenção aos detalhes.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">10k+</div>
                  <div className="text-sm text-gray-600">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500 mb-2">SP+</div>
                  <div className="text-sm text-gray-600">Região Metropolitana</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600">
              Os princípios que guiam nosso trabalho e relacionamento com os clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="text-orange-500" size={32} />,
                title: 'Excelência',
                description: 'Buscamos sempre a perfeição em cada instalação, garantindo qualidade superior em todos os projetos.'
              },
              {
                icon: <Heart className="text-orange-500" size={32} />,
                title: 'Paixão',
                description: 'Amamos o que fazemos e isso se reflete no cuidado e dedicação em cada detalhe do nosso trabalho.'
              },
              {
                icon: <Users className="text-orange-500" size={32} />,
                title: 'Confiança',
                description: 'Construímos relacionamentos duradouros baseados na transparência e confiabilidade.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="bg-orange-100 p-4 rounded-xl w-fit mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por Que Escolher a KoreArt?
            </h2>
            <p className="text-lg text-gray-600">
              Os diferenciais que nos tornam únicos no mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Target className="text-orange-500" size={24} />,
                title: 'Precisão Técnica',
                description: 'Utilizamos ferramentas profissionais e técnicas especializadas para garantir instalações perfeitas.'
              },
              {
                icon: <Clock className="text-orange-500" size={24} />,
                title: 'Pontualidade',
                description: 'Respeitamos prazos e horários combinados, valorizando o tempo dos nossos clientes.'
              },
              {
                icon: <Award className="text-orange-500" size={24} />,
                title: 'Qualidade Garantida',
                description: 'Oferecemos garantia em todos os nossos serviços e utilizamos materiais de primeira qualidade.'
              },
              {
                icon: <Users className="text-orange-500" size={24} />,
                title: 'Atendimento Personalizado',
                description: 'Cada projeto é único e recebe atenção especial para atender às necessidades específicas.'
              }
            ].map((differential, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  {differential.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {differential.title}
                  </h3>
                  <p className="text-gray-600">
                    {differential.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Nosso Compromisso
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Estamos comprometidos em transformar seu ambiente com a máxima qualidade e atenção aos detalhes. 
            Cada projeto é uma oportunidade de superar expectativas e criar espaços únicos que refletem 
            sua personalidade e estilo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onPageChange('contato')}
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium"
            >
              Entre em Contato
            </Button>
            <Button
              onClick={() => onPageChange('portfolio')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-full text-lg font-medium"
            >
              Ver Nossos Trabalhos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;

