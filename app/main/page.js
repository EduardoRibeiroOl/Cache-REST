"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';


export default function FinancialDashboard() {
  const router = useRouter() 

  const [activeTab, setActiveTab] = useState('portfolio');
  const [sidebarOpen, setSidebarOpen] = useState(false);


  /*  middleware de autenticação  */
  useEffect (() => {
      async function validateroute (){
        const Mycookie = await fetch('/api/token', { credentials: "include" })
        if (Mycookie.status != 200){
          router.push('/login')
        }
      }

      async function getuserinfon() {
        const Myuser = await fetch('/api/me',  { credentials: "include" })
        if(Myuser.ok){
          console.log(await Myuser.json())

        } else{  
          console.log("erro em receber cookie")
          alert("erro em receber cookie") 
        }
      }

      getuserinfon()
      validateroute() 
  })

  

  // Dados mockados
  const portfolio = [
    { symbol: 'PETR4', name: 'Petróleo Brasileiro', quantity: 100, avgPrice: 28.50, currentPrice: 32.75, variation: '+14.91%' },
    { symbol: 'VALE3', name: 'Vale S.A.', quantity: 50, avgPrice: 68.20, currentPrice: 72.10, variation: '+5.72%' },
    { symbol: 'ITUB4', name: 'Itaú Unibanco', quantity: 80, avgPrice: 26.75, currentPrice: 28.90, variation: '+8.04%' }
  ];

  const recommendedStocks = [
    { symbol: 'BBAS3', name: 'Banco do Brasil', price: 52.30, variation: '+3.25%', recommendation: 'Forte Compra' },
    { symbol: 'RENT3', name: 'Localiza', price: 49.85, variation: '+1.89%', recommendation: 'Compra' },
    { symbol: 'WEGE3', name: 'WEG S.A.', price: 36.72, variation: '+2.45%', recommendation: 'Compra' },
    { symbol: 'SUZB3', name: 'Suzano S.A.', price: 58.90, variation: '-1.20%', recommendation: 'Neutra' }
  ];

  const marketIndices = [
    { name: 'IBOVESPA', value: '118.456,12', variation: '+1,25%' },
    { name: 'DÓLAR', value: '5,12', variation: '-0,43%' },
    { name: 'IFIX', value: '3.245,67', variation: '+0,78%' },
    { name: 'CDI', value: '12,65%', variation: '0,00%' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Dashboard Investimentos | Seu Banco</title>
        <meta name="description" content="Painel de investimentos e acompanhamento de ações" />
      </Head>

      {/* Navbar */}
      <nav className="bg-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-2 text-xl font-bold">Invest Banco</span>
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <button 
                  onClick={() => setActiveTab('portfolio')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'portfolio' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Meu Portfólio
                </button>
                <button 
                  onClick={() => setActiveTab('stocks')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'stocks' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Ações Recomendadas
                </button>
                <button 
                  onClick={() => setActiveTab('market')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'market' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Mercado
                </button>
                <button 
                  onClick={() => setActiveTab('news')}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeTab === 'news' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
                >
                  Notícias
                </button>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center">
              <button className="p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none">
                <span className="sr-only">Notificações</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="flex text-sm rounded-full focus:outline-none">
                    <img className="h-8 w-8 rounded-full" src="https://placehold.co/100x100" alt="Foto do perfil do usuário" />
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-600 focus:outline-none"
              >
                <span className="sr-only">Abrir menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {sidebarOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'portfolio' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
              >
                Meu Portfólio
              </button>
              <button 
                onClick={() => setActiveTab('stocks')}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'stocks' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
              >
                Ações Recomendadas
              </button>
              <button 
                onClick={() => setActiveTab('market')}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'market' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
              >
                Mercado
              </button>
              <button 
                onClick={() => setActiveTab('news')}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${activeTab === 'news' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}
              >
                Notícias
              </button>
            </div>
            <div className="pt-4 pb-3 border-t border-indigo-800">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://placehold.co/100x100" alt="Foto do perfil do usuário" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium">João Investidor</div>
                  <div className="text-sm font-medium text-indigo-200">joao@investidor.com</div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600">Seu Perfil</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600">Configurações</a>
                <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600">Sair</a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Conteúdo Principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barra de Índices do Mercado */}
        <div className="bg-white shadow rounded-lg mb-6 p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {marketIndices.map((index, i) => (
              <div key={i} className="border-r last:border-r-0 pr-4 last:pr-0">
                <div className="text-sm text-gray-500">{index.name}</div>
                <div className="flex items-center">
                  <div className="text-lg font-semibold">{index.value}</div>
                  <span className={`ml-2 text-sm ${index.variation.includes('+') ? 'text-green-500' : index.variation.includes('-') ? 'text-red-500' : 'text-gray-500'}`}>
                    {index.variation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Principais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Saldo Total */}
          <div className="bg-indigo-600 text-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Saldo Total</p>
                <p className="text-2xl font-bold mt-1">R$ 89.754,23</p>
                <p className="text-indigo-200 text-xs mt-1">+6,32% no último mês</p>
              </div>
              <div className="bg-indigo-500 p-2 rounded-full">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Recomendação do Dia */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Recomendação do Dia</p>
                <p className="text-xl font-bold mt-1">BBAS3</p>
                <p className="text-gray-500 text-sm mt-1">Banco do Brasil</p>
                <p className="text-green-500 font-medium text-sm mt-1">+3,25% hoje</p>
              </div>
              <div className="bg-green-100 p-2 rounded-full">
                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </div>
          </div>

          {/* Eventos do Dia */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Eventos Hoje</p>
                <p className="text-xl font-bold mt-1">3 Empresas</p>
                <p className="text-gray-500 text-sm mt-1">Divulgando resultados</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-full">
                <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Seções dinâmicas por aba */}
        {activeTab === 'portfolio' && (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Meu Portfólio</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ativo</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço Médio</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preço Atual</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variação</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {portfolio.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-800 font-medium">{item.symbol.substring(0, 2)}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{item.symbol}</div>
                            <div className="text-sm text-gray-500">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ {item.avgPrice.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">R$ {item.currentPrice.toFixed(2)}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${item.variation.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {item.variation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-3">Comprar</button>
                        <button className="text-red-600 hover:text-red-900">Vender</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'stocks' && (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Ações Recomendadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommendedStocks.map((stock, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-lg font-bold">{stock.symbol}</div>
                      <div className="text-sm text-gray-600">{stock.name}</div>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${stock.recommendation === 'Forte Compra' ? 'bg-green-100 text-green-800' : stock.recommendation === 'Compra' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {stock.recommendation}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold">R$ {stock.price.toFixed(2)}</div>
                      <div className={`text-sm ${stock.variation.includes('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {stock.variation}
                      </div>
                    </div>
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700">
                      Analisar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'market' && (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Análise de Mercado</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-md font-medium mb-3">Setores em Alta</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Financeiro</span>
                      <span className="font-medium text-green-500">+3.2%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tecnologia</span>
                      <span className="font-medium text-green-500">+2.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '55%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Consumo</span>
                      <span className="font-medium text-green-500">+1.8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-md font-medium mb-3">Gráfico IBOVESPA</h4>
                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                  <img src="https://placehold.co/600x400" alt="Gráfico de linha mostrando a evolução do IBOVESPA nos últimos 30 dias com tendência de alta" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium mb-4">Notícias do Mercado</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <img className="h-16 w-16 rounded" src="https://placehold.co/100x100" alt="Logotipo da empresa Petrobras" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold">PETR4: Petrobras anuncia novo aumento no preço da gasolina</h4>
                    <p className="text-sm text-gray-600 mt-1">O reajuste será de 7,5% a partir da próxima semana, segundo comunicado enviado à CVM...</p>
                    <p className="text-xs text-gray-400 mt-2">Há 2 horas - Economia</p>
                  </div>
                </div>
              </div>
              <div className="border-b pb-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <img className="h-16 w-16 rounded" src="https://placehold.co/100x100" alt="Logotipo do Banco Central" />
                  </div>
                  <div>
                    <h4 className="text-md font-bold">Copom reduz Selic para 12,25% ao ano, como esperado pelo mercado</h4>
                    <p className="text-sm text-gray-600 mt-1">Decisão foi unânime entre os membros do comitê e indica continuidade do ciclo de cortes...</p>
                    <p className="text-xs text-gray-400 mt-2">Hoje - Banco Central</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rodapé de Links Úteis */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Links Úteis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm">Termos de Investimento</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm">Calculadora de Rentabilidade</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm">Relatórios Anuais</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm">Ajuda e Suporte</a>
          </div>
        </div>
      </main>
    </div>
  );
}
