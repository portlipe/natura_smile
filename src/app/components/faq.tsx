'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const FAQSection = () => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const questions = [
        {
            text: "Algum tipo de desgaste ao dente precisa ser feito para receber a lente de contato dental?",
            textWidth: "sm:w-[412px] w-[290px]"
        },
        {
            text: "A lente de contato dental mancha com café, vinho, chá, etc.?",
            textWidth: "sm:w-[336px] w-[250px]"
        },
        {
            text: "Quanto tempo dura a lente de contato dental?",
            textWidth: "sm:w-[404px] w-[220px]"
        },
        {
            text: "Quantas consultas são necessárias para a colocação da lente de contato dental?",
            textWidth: "sm:w-[429px] w-[315px]"
        },
        {
            text: "Se a lente de contato dental for feita apenas nos dentes superiores, os dentes inferiores ficarão com cores diferentes?",
            textWidth: "sm:w-[510px] w-[297px]"
        },
        {
            text: "Como é a manutenção das facetas de porcelana?",
            textWidth: "sm:w-[426px] w-[224px]"
        },
        {
            text: "O que é o laser LiteTouch?",
            textWidth: "sm:w-[300px] w-[220px]"
        },
        {
            text: "Qual a técnica usada para correção gengival (gengivoplastia)? O que o laser faz na gengiva?",
            textWidth: "sm:w-[475px] w-[296px]"
        },
        {
            text: "Como funciona a remoção de facetas de porcelana com o laser LiteTouch?",
            textWidth: "sm:w-[400px] w-[296px]"
        }
    ];

    const answers = [
        {
            text: "O desgaste do dente deve ser realizado apenas em casos de dentes mal posicionados e com manchas, uma vez que a lente de contato dental necessita de espaço e espessura suficientes, mesmo que mínimos, para corrigir a posição inicial do dente e esconder manchas presentes. Hoje, com o avanço da odontologia, os desgastes, na maioria das vezes, são mínimos e até mesmo imperceptíveis a olho nu.",
            textWidth: "sm:w-[531px] w-[320px]"
        },
        {
            text: "A lente de contato dental é feita de porcelana (dissilicato de lítio); portanto, não mancha.",
            textWidth: "sm:w-[327px] w-[286px]"
        },
        {
            text: "<p>A lente de contato dental possui uma vida útil que não pode ser mensurada. Por ser um material inerte e biologicamente compatível com o esmalte dental, ela pode durar por toda a vida, dependendo dos cuidados de cada paciente.</p><br/>Contudo, os tecidos ao redor, como a superfície do dente sob a porcelana e a gengiva, podem sofrer alterações ao longo do tempo, como cáries e retração gengival. O que garante a longevidade da lente de contato dental é a correta higienização bucal e visitas periódicas ao dentista.",
            textWidth: "sm:w-[454px] w-[320px]"
        },
        {
            text: `
        São necessárias três consultas:<br>
        <strong><br/>1. Avaliação e planejamento:</strong> Na primeira consulta, são feitas fotos e escaneamento intraoral. Com base nisso, nossa equipe laboratorial elabora o planejamento e imprime o mockup do seu novo sorriso.<br/>
        <strong>2. Preparo:</strong> A segunda consulta envolve o preparo dos dentes e a adequação do meio bucal, necessários para iniciar a confecção das lentes de contato dentais.<br/>
        <strong>3. Instalação:</strong> Na terceira e última consulta, é feita a instalação final das lentes.
      `,
            textWidth: "sm:w-[487px] sm:leading-[23.1px] w-[313px]"
        },
        {
            text: "Este é um fator importante que deve ser discutido com o paciente durante a avaliação inicial. Assim, ao final do tratamento, os dentes poderão formar um sorriso ideal e harmônico.",
            textWidth: "sm:w-[448px] w-[320px]"
        },
        {
            text: "A manutenção das facetas dentárias consiste em visitas anuais ao dentista para revisão, incluindo uma profilaxia. Ainda assim, é essencial manter uma rotina de cuidados bucais adequados em casa, garantindo a durabilidade das facetas/lentes.",
            textWidth: "sm:w-[448px] w-[320px]"
        },
        {
            text: "É o laser mais versátil do mundo, projetado para transformar a odontologia com sua tecnologia exclusiva Laser-in-Handpiece™. Ideal para tecidos duros e moles, ele permite tratamentos precisos, menos invasivos e com recuperação acelerada.",
            textWidth: "sm:w-[448px] w-[316px]"
        },
        {
            text: "O laser remove o tecido gengival mole, sendo útil em procedimentos como a criação de uma depressão ao redor da gengiva para melhorar a visibilidade e o acesso dentário, além de remodelar as gengivas para fins estéticos.",
            textWidth: "sm:w-[475px] w-[310px]"
        },
        {
            text: "O procedimento é extremamente rápido e não requer anestesia. O laser atua apenas no cimento que fixa a faceta ao dente, sem causar qualquer tipo de agressão aos tecidos dentários e gengivais. É um processo minimamente invasivo, indolor e sem aumento de sensibilidade nos dentes.",
            textWidth: "sm:w-[475px] w-[307px]"
        }
    ];

    const handleToggle = (index: number) => {
        setActiveIndexes(prevState =>
            prevState.includes(index)
                ? prevState.filter(i => i !== index)
                : [...prevState, index]
        );
    };

    return (
        <section id='faq' className="p-3 bg-[#0C568C] text-white py-[50px]">
            <h1 className="text-[32px] sm:text-[54px] font-medium mb-[40px] sm:mb-[80px] text-center">Perguntas Frequentes</h1>
            <div className="flex flex-col sm:flex-row sm:w-[1220px] mx-auto">
                <div className="flex flex-col sm:w-[600px] sm:pl-4">
                    {questions.slice(0, 4).map((question, index) => (
                        <div
                            key={index}
                            className="mb-4 bg-white text-black p-5 sm:p-[40px] flex flex-col"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className={`text-[12px] sm:text-[18px] font-semibold ${question.textWidth}`}>
                                    {index + 1} - {question.text}
                                </h2>
                                <Image
                                    src="/arrow_cards.svg"
                                    alt="Arrow"
                                    className={`cursor-pointer transform transition-transform duration-300 ${activeIndexes.includes(index) ? 'rotate-0' : 'rotate-180'}`}
                                    width={16}
                                    height={8}
                                    onClick={() => handleToggle(index)}
                                />
                            </div>
                            {activeIndexes.includes(index) && (
                                <div
                                    className={`mt-4 text-black text-[12px] ${answers[index]?.textWidth}`}
                                    dangerouslySetInnerHTML={{ __html: answers[index]?.text || "A resposta será adicionada em breve." }}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col sm:w-[600px] sm:pl-4">
                    {questions.slice(4).map((question, index) => (
                        <div
                            key={index + 4}
                            className="mb-4 bg-white text-black p-5 sm:p-[40px] flex flex-col"
                        >
                            <div className="flex items-center justify-between">
                                <h2 className={`text-[16px] sm:text-[17px] font-semibold ${questions[index + 4].textWidth}`}>
                                    {index + 5} - {questions[index + 4].text}
                                </h2>
                                <Image
                                    src="/arrow_cards.svg"
                                    alt="Arrow"
                                    className={`cursor-pointer transform transition-transform duration-300 ${activeIndexes.includes(index + 4) ? 'rotate-0' : 'rotate-180'}`}
                                    width={16}
                                    height={8}
                                    onClick={() => handleToggle(index + 4)}
                                />
                            </div>
                            {activeIndexes.includes(index + 4) && (
                                <div
                                    className={`mt-4 text-black text-[12px] ${answers[index + 4]?.textWidth}`}
                                    dangerouslySetInnerHTML={{ __html: answers[index + 4]?.text || "A resposta será adicionada em breve." }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
