import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-sm">K</span>
                </div>
              </div>
              <span className="ml-2 text-xl font-bold">KoreArt</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Especialistas em instalação de quadros e decoração com mais de 25 anos de experiência.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Instalação de Quadros</li>
              <li>Instalação de TVs</li>
              <li>Acessórios de Banheiro</li>
              <li>Prateleiras</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-orange-500" />
                <span>(11) 98542-9131</span>
              </div>
              <div className="flex items-center">
                <MessageCircle size={16} className="mr-2 text-orange-500" />
                <span>WhatsApp: wa.me/+551198542931</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-orange-500" />
                <span>São Paulo e Região</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-orange-500" />
                <span>Seg-Sáb: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            KoreArt © - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

