import React from 'react';
import Image from 'next/image';

const FacetasSection: React.FC = () => {
    return (
        <section id='facetas' className="bg-white px-4 sm:px-14 py-8 sm:py-12 lg:px-24 text-black md:bg-[#F9F9F9]">
            <div className="max-w-full md:max-w-7xl h-auto md:h-auto md:mt-12 md:mb-12 md:py-12 md:px-24 md:bg-white md:pt-12">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Facetas</h1>
                <h2 className="text-md md:text-xl w-[80%] md:w-[500px] mx-auto font-semibold text-black text-center mb-8">
                    Seleção de Cor para Tratamentos com Lentes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 ">
                    {/* Esquerda */}
                    <div className="md:mx-auto pb-8">
                        <p className="text-black w-[288px] md:w-[97%] text-[12px] md:text-sm mb-8 mx-auto">
                            Para determinar a cor ideal para os tratamentos com lentes (facetas),
                            utilizamos uma escala de cores que varia do branco ao natural,
                            considerando os matizes dentários. No entanto, alguns fatores essenciais
                            influenciam essa escolha:
                        </p>

                        <ul className="space-y-6 w-[279px] md:w-[87%] text-[12px] md:text-sm mx-auto md:mx-0">
                            <li>
                                <strong>Idade do paciente:</strong> A cor escolhida para as facetas deve
                                ser condizente com a idade, mantendo harmonia e evitando discrepâncias.
                            </li>
                            <div className="w-full">
                                <Image src='/Line.svg' alt='linha' width={497} height={1} />
                            </div>
                            <li>
                                <strong>Cor do dente atual (substrato):</strong> A cor subjacente
                                influencia diretamente o resultado final.
                            </li>
                            <div className="w-full">
                                <Image src='/Line.svg' alt='linha' width={497} height={1} />
                            </div>
                            <li>
                                <strong>Grau de translucidez e opacidade:</strong> Esses aspectos impactam
                                a aparência da restauração.
                            </li>
                        </ul>
                    </div>

                    {/* Direita */}
                    <div className="space-y-[28px] md:space-y-[42px] mx-auto">
                        <p className="w-[288px] md:w-[70%] text-black font-semibold text-md md:text-xl">
                            A escolha da cor é feita em conjunto com o paciente, garantindo:
                        </p>
                        <ul className="list-disc list-inside text-black text-[12px] md:text-sm">
                            <li>Satisfação pessoal</li>
                            <li>Resultado natural</li>
                            <li>Harmonia com a estética facial</li>
                        </ul>
                        <p className="text-black text-[12px] md:text-sm w-[288px] md:w-[85%]">
                            Essa abordagem personalizada assegura um resultado estético e funcional
                            de excelência.
                        </p>

                        {/* Escala de cores */}
                        <div className="flex items-center mt-6">
                            {[...Array(13)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-7 h-7 md:w-[40px] md:h-[40px] rounded-full ml-[-10px] transition-transform duration-300 hover:scale-125 ${
                                        [
                                            'bg-[#EFEFED]','bg-[#E0E0DC]','bg-[#EFEFEF]','bg-[#D7CCA4]',
                                            'bg-[#DAD5BF]','bg-[#D6BE7F]','bg-[#D3C7A0]','bg-[#D1BD84]','bg-[#D1BB8E]',
                                            'bg-[#CFC4A3]','bg-[#CCB582]','bg-[#CCBE97]','bg-[#CBAE75]'
                                        ][index]
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacetasSection;
