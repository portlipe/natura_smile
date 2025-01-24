"use client"
import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 h-[690px] sm:h-[420px] sm:py-[120px] relative">
            <div className="container sm:ml-[96px] grid grid-cols-1 sm:grid-cols-5 gap-[10px] px-6">
                {/* Column 1 */}
                <div className="flex flex-col space-y-4">
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">Home</a>
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">Sobre nós</a>
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">Serviços</a>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-4">
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">Facetas</a>
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">Equipe</a>
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">Resultados</a>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-4">
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">Depoimentos</a>
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">FAQ</a>
                    <a href="#" className="sm:text-[13px] text-sm hover:underline">Localização</a>
                </div>

                {/* Column 4 - Contato */}
                <div className="sm:text-[13px] text-sm space-y-2">
                    <p><strong>Contato</strong></p>
                    <p>+55 (48) 9 9648-2808</p>
                    <p><strong>E-mail</strong>:<br/>naturalsmilelab048@gmail.com</p>
                </div>

                {/* Column 5 - Endereço */}
                <div className="sm:text-[13px] text-sm space-y-2">
                    <p><strong>Endereço</strong></p>
                    <p>Avenida Santa Catarina, 197 Sala 815 / 816 - Estreito, Florianópolis - SC, 88075-500</p>
                </div>
                
            {/* Instagram Icon */}
            <div className="absolute bottom-[90px] sm:right-[70px] sm:bottom-[120px]">
                <a href="https://www.instagram.com/naturalsmile.ns/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="text-white w-6 h-6 hover:text-gray-400" />
                </a>
            </div>
            </div>

            {/* Footer Bottom */}
            <div className="sm:border-t border-gray-800 mt-12 sm:mt-32 mt-[130px] pt-4 text-center sm:text-[13px] text-sm">
                <div className="flex flex-row justify-center items-center">
                    <p>Desenvolvido por </p>
                    <Image
                        src='logo_zion.svg'
                        alt='logo zion'
                        width={38}
                        height={11}
                        className='m-1'
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
