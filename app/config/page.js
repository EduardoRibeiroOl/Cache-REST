"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function ProfileSettings() {
    const [username, setUsername] = useState('investidor123');
    const [email, setEmail] = useState('investidor@example.com');
    const [bio, setBio] = useState('Investidor apaixonado por análise técnica e fundamentos.');
    const [themeColor, setThemeColor] = useState('#6366f1');
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);'1'
    const [securityAlertsEnabled, setSecurityAlertsEnabled] = useState(true);

    const colorOptions = [
        { name: 'Roxo', value: '#6366f1' },
        { name: 'Azul', value: '#3b82f6' },
        { name: 'Verde', value: '#10b981' },
        { name: 'Amarelo', value: '#f59e0b' },
        { name: 'Vermelho', value: '#ef4444' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para salvar as configurações
        console.log({
            username,
            email,
            bio,
            themeColor,
            notificationsEnabled,
            securityAlertsEnabled
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Head>
                <title>Configurações do Perfil | Seu Banco</title>
                <meta name="description" content="Gerencie suas configurações de perfil" />
            </Head>

            {/* Navbar */}
            <nav className="bg-indigo-600 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="ml-2 text-xl font-bold text-white">Invest Banco</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Conteúdo Principal */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white shadow rounded-lg overflow-hidden">
                    {/* Cabeçalho */}
                    <div className="px-6 py-5 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-800">Configurações do Perfil</h1>
                        <p className="mt-1 text-sm text-gray-500">Gerencie suas informações pessoais e preferências</p>
                    </div>

                    {/* Corpo */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
                        {/* Sidebar */}
                        <div className="md:col-span-1">
                            <nav className="space-y-1">
                                <button className="w-full text-left px-4 py-3 bg-indigo-50 border border-indigo-100 rounded-md text-sm font-medium text-indigo-700">
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        Perfil
                                    </div>
                                </button>
                                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md text-sm font-medium text-gray-700">
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        Aparência
                                    </div>
                                </button>
                                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md text-sm font-medium text-gray-700">
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        Notificações
                                    </div>
                                </button>
                                <button className="w-full text-left px-4 py-3 hover:bg-gray-50 rounded-md text-sm font-medium text-gray-700">
                                    <div className="flex items-center">
                                        <svg className="h-5 w-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        Segurança
                                    </div>
                                </button>
                            </nav>
                        </div>

                        {/* Área de Conteúdo */}
                        <div className="md:col-span-3">
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-6">
                                    {/* Seção de Foto */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Foto do Perfil</h3>
                                        <div className="flex items-center">
                                            <div className="relative">
                                                <img
                                                    className="h-20 w-20 rounded-full"
                                                    src="https://placehold.co/200x200"
                                                    alt="Foto de perfil do usuário"
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-sm border border-gray-300 hover:bg-gray-50"
                                                >
                                                    <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="ml-4 flex space-x-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                                                >
                                                    Alterar
                                                </button>
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                                                >
                                                    Remover
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Seção de Dados Pessoais */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Informações Pessoais</h3>
                                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                            <div className="sm:col-span-4">
                                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                                    Nome de Usuário
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        id="username"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-6">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-6">
                                                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                                                    Biografia
                                                </label>
                                                <div className="mt-1">
                                                    <textarea
                                                        id="bio"
                                                        name="bio"
                                                        rows={3}
                                                        value={bio}
                                                        onChange={(e) => setBio(e.target.value)}
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">Fale um pouco sobre você.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Seção de Preferências */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Preferências</h3>

                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Cor do Tema</label>
                                            <div className="flex space-x-2">
                                                {colorOptions.map((color) => (
                                                    <label key={color.value} className="flex flex-col items-center">
                                                        <input
                                                            type="radio"
                                                            name="theme-color"
                                                            value={color.value}
                                                            checked={themeColor === color.value}
                                                            onChange={() => setThemeColor(color.value)}
                                                            className="sr-only"
                                                        />
                                                        <div
                                                            className={`w-8 h-8 rounded-full cursor-pointer border-2 ${themeColor === color.value ? 'border-indigo-500 ring-2 ring-offset-2 ring-indigo-300' : 'border-transparent'}`}
                                                            style={{ backgroundColor: color.value }}
                                                        />
                                                        <span className="text-xs text-gray-500 mt-1">{color.name}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="notifications"
                                                    name="notifications"
                                                    type="checkbox"
                                                    checked={notificationsEnabled}
                                                    onChange={(e) => setNotificationsEnabled(e.target.checked)}
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="notifications" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Receber notificações por email
                                                </label>
                                            </div>

                                            <div className="flex items-center">
                                                <input
                                                    id="security-alerts"
                                                    name="security-alerts"
                                                    type="checkbox"
                                                    checked={securityAlertsEnabled}
                                                    onChange={(e) => setSecurityAlertsEnabled(e.target.checked)}
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                                <label htmlFor="security-alerts" className="ml-3 block text-sm font-medium text-gray-700">
                                                    Alertas de segurança
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rodapé do Formulário */}
                                    <div className="flex justify-end space-x-3 pt-6">
                                        <button
                                            type="button"
                                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Salvar Alterações
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
