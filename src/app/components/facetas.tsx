import React from 'react';
import Image from 'next/image';

const FacetasSection: React.FC = () => {
    return (
        <section id='facetas' className="bg-white px-14 py-12 lg:px-24 text-black md:bg-gray-100">
            <div className="max-w-full md:max-w-full h-[960px] md:h-[700px] md:mt-[70px] md:mb-[70px] md:px-auto md:bg-white md:pt-[70px] pb-[100px]">
                <h1 className="text-[32px] md:text-[54px] font-bold black text-center mb-4">Facetas</h1>
                <h2 className="text-[18px] w-[269px] md:w-[500px] md:text-2xl mx-auto font-medium text-black text-center mb-8">
                    Seleção de Cor para Tratamentos com Lentes
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:space-x-12 md:ml-[100px]">
                    {/* Esquerda */}
                    <div className='md:mx-auto lg:mx-auto pb-8'>
                        <p className="text-black w-[334px] md:w-[497.46px] text-sm mb-8">
                            Para determinar a cor ideal para os tratamentos com lentes (facetas),
                            utilizamos uma escala de cores que varia do branco ao natural,
                            considerando os matizes dentários. No entanto, alguns fatores essenciais
                            influenciam essa escolha:
                        </p>

                        <ul className="space-y-8 w-[326px] md:w-[454.61px] text-sm">
                            <li>
                                <strong>Idade do paciente:</strong> A cor escolhida para as facetas deve
                                ser condizente com a idade, mantendo harmonia e evitando discrepâncias.
                            </li>

                            <div>
                                <Image
                                    src='/Line.svg'
                                    alt='linha'
                                    width={497}
                                    height={1}
                                />
                            </div>
                            <li className='w-[326px] md:w-[400.61px] text-sm'>
                                <strong>Cor do dente atual (substrato):</strong> A cor subjacente
                                influencia diretamente o resultado final.
                            </li>
                            <div>
                                <Image
                                    src='/Line.svg'
                                    alt='linha'
                                    width={497}
                                    height={1}
                                />
                            </div>
                            <li>
                                <strong>Grau de translucidez e opacidade:</strong> Esses aspectos impactam
                                a aparência da restauração.
                            </li>
                        </ul>
                    </div>

                    {/* Direita */}
                    <div className='space-y-[42px]'>
                        <p className="w-[304px] text-[18px] md:w-[401.8px] text-black font-medium md:text-2xl mb-4">
                            A escolha da cor é feita em conjunto com o paciente, garantindo:
                        </p>
                        <ul className="list-disc list-inside text-black mb-6 text-sm">
                            <li>Satisfação pessoal</li>
                            <li>Resultado natural</li>
                            <li>Harmonia com a estética facial</li>
                        </ul>
                        <p className="text-black text-sm w-[326px] md:w-[340px]">
                            Essa abordagem personalizada assegura um resultado estético e funcional
                            de excelência.
                        </p>

                        {/* Escala de cores */}
                        <div className="flex items-center mt-8 space-x-[-10px]">
                            {[...Array(10)].map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-[40px] w-[40px] rounded-full transition-transform duration-300 hover:scale-125 ${index === 0
                                            ? 'bg-[#EFEFED]'
                                            : index === 1
                                                ? 'bg-[#E0E0DC]'
                                                : index === 2
                                                    ? 'bg-[#EFEFEF]'
                                                    : index === 3
                                                        ? 'bg-[#D7CCA4]'
                                                        : index === 4
                                                            ? 'bg-[#DAD5BF]'
                                                            : index === 5
                                                                ? 'bg-[#D6BE7F]'
                                                                : index === 6
                                                                    ? 'bg-[#D1BD84]'
                                                                    : index === 7
                                                                        ? 'bg-[#D1BB8E]'
                                                                        : index === 8
                                                                            ? 'bg-[#CFC4A3]'
                                                                            : index === 9
                                                                                ? 'bg-[#CCB582]'
                                                                                : 'bg-[#CBAE75]'
                                        }`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FacetasSection;
