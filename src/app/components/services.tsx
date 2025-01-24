
"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "HARMONIZAÇÃO FACIAL",
    description:
      "Procedimentos que equilibram suas expressões faciais, proporcionando beleza natural e harmonia em cada detalhe.",
    fullDescription: `
      <p>
        A harmonização facial é um conjunto de procedimentos estéticos que têm como objetivo principal promover o alinhamento e correção de ângulos da face, melhorar a harmonia entre os dentes e restantes características da pele, conferir mais beleza ao rosto e realçar as características já existentes, sendo indicada para homens e mulheres que desejam melhorar o equilíbrio do rosto e dentes, promover o rejuvenescimento da pele e melhorar a simetria facial.
      </p>
      <p style="margin-top: 20px;">
        Esta técnica, também conhecida como harmonização orofacial, é feita de acordo com as necessidades da pessoa, de forma individualizada, através de realização de diferentes procedimentos estéticos, como preenchimento com ácido hialurônico nas bochechas, queixo ou lábios, aplicação de toxina botulínica ou bichectomia, por exemplo.
      </p>
      <p style="margin-top: 20px;">
        Dependendo do procedimento realizado, alguns resultados podem ser vistos de imediato, logo a seguir à intervenção estética, mas o resultado final demora cerca de 15 a 30 dias a surgir. É importante que a harmonização facial seja feita por um profissional altamente capacitado, evitando assim qualquer risco de intercorrências.
      </p>
    `,
    image: "/service1.png",
  },
  {
    id: "02",
    title: "TRATAMENTOS ODONTOLÓGICOS",
    description:
      "Nossa equipe é formada por profissionais altamente capacitados em diversas áreas:",
    fullDescription: `
      <ul>
        <li style="margin-top: 20px"><strong>Harmonização Facial: <br/> </strong> Procedimento de intervenção estética que reúne várias técnicas de aplicação injetáveis e a laser.</li>
        <li style="margin-top: 20px"><strong>Protesista: <br/></strong> Dentista especializado em próteses dentais.</li>
        <li style="margin-top: 20px"><strong>Oral Design:<br/> </strong> Planejamento e execução do novo sorriso por meio das modernas lentes de contato dentais.</li>
        <li style="margin-top: 20px"><strong>Implantodontista:<br/> </strong> Especialista em reabilitação oral através de cirurgias de implantes, enxertos ósseos e tratamento de pacientes que sofreram a perda dos dentes.</li>
        <li style="margin-top: 20px"><strong>Bucomaxilo:<br/> </strong> Especialista em cirurgias bucais complexas (como traumas) e outros procedimentos avançados.</li>
        <li style="margin-top: 20px"><strong>Endodontista:<br/> </strong> Tratamento de canal, que envolve a remoção da polpa dental.</li>
        <li style="margin-top: 20px"><strong>Periodontista:<br/> </strong> Especialista no tratamento dos tecidos periodontais, ou seja, aqueles que dão sustentação aos dentes.</li>
        <li style="margin-top: 20px"><strong>Clínico Geral: <br/></strong> Profissional que atua em diversas áreas da odontologia, oferecendo uma ampla gama de serviços (profilaxia, restaurações, entre outros) para pacientes de todas as idades.</li>
        <li style="margin-top: 20px"><strong>Ortodontista:<br/></strong> Especialista na correção da posição dos dentes e dos ossos maxilares mal posicionados.</li>
      </ul>
    `,
    image: "/service2.png",
  },
  {
    id: "03",
    title: "LABORATÓRIO PRÓPRIO",
    description:
      "Possuímos um laboratório de prótese dentária próprio, com equipe qualificada e tecnologia digital de ponta.",
    fullDescription: `
      <p style="margin-top: 20px;">
        Unindo inovação e experiência, o laboratório de prótese dentária NATURAL SMILE foi criado em 2005. Somos dedicados exclusivamente à prestação de serviços para nossa clínica, com um compromisso inabalável com a excelência e a modernidade.
      </p>
      <p style="margin-top: 20px;">
        Contamos com equipamentos de última geração e uma equipe de profissionais altamente qualificados. Oferecemos tanto serviços digitais quanto analógicos, sempre buscando atender você da melhor forma possível.
      </p>
    `,
    image: "/service3.png",
  },
  {
    id: "04",
    title: "LENTES DE CONTATO DENTAIS",
    description:
      "Facetas de Resina x Facetas de Porcelana Resumo das vantagens e desvantagens:",
    fullDescription: `
      <strong>Vantagens das Facetas de Resina:</strong>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li style="margin-top: 20px">Custo mais acessível.</li>
        <li>Restauração imediata.</li>
        <li>Não necessita de moldes.</li>
        <li>Indicada para correções e tratamentos mais simples.</li>
      </ul>
  
      <strong><br/>Desvantagens das Facetas de Resina:</strong>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li style="margin-top: 20px">Menor durabilidade.</li>
        <li>Mais suscetível a alterações de cor.</li>
        <li>Resultado estético com menor naturalidade.</li>
        <li>Mais difícil de reparar.</li>
      </ul>
  
      <strong><br/>Vantagens das Facetas de Porcelana:</strong>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li style="margin-top: 20px">Melhor resultado estético e maior naturalidade.</li>
        <li>Maior durabilidade.</li>
        <li>Não altera de cor.</li>
        <li>Mais fácil de reparar.</li>
        <li>Indicada para correções complexas e estéticas.</li>
      </ul>
  
      <strong><br/>Desvantagens das Facetas de Porcelana:</strong>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li style="margin-top: 20px">Custo mais elevado.</li>
      </ul>
  
      <strong><br/>Outras Diferenças entre Facetas de Resina e Porcelana:</strong>
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li style="margin-top: 20px"><strong>Translucidez:</strong> A porcelana é mais translúcida que a resina, conferindo um aspecto mais natural aos dentes.</li>
        <li style="margin-top: 20px"><strong>Resistência:</strong> A porcelana é mais resistente que a resina, sendo mais indicada para casos de bruxismo ou mordida forte.</li>
        <li style="margin-top: 20px"><strong>Abrasão:</strong> A porcelana é menos abrasiva que a resina, reduzindo o risco de desgaste nos dentes adjacentes.</li>
        <li style="margin-top: 20px"><strong>Riscos de Fratura:</strong> As facetas de porcelana são menos propensas a fraturas em comparação às facetas de resina.</li>
      </ul>
  
      <strong><br/>Escolha entre Facetas de Resina e Porcelana:</strong>
      <p style="margin-top: 20px">
        A escolha entre resina e porcelana deve considerar as necessidades e expectativas do paciente. 
        As facetas de resina são mais acessíveis e ideais para correções simples, enquanto as facetas 
        de porcelana oferecem maior durabilidade e resultados estéticos superiores, sendo recomendadas 
        para tratamentos mais complexos.
      </p>
  
      <strong><br/>Qual o Melhor Material para Lentes de Contato Dentais? Resina ou Porcelana?</strong>
      <p style="margin-top: 20px">
        A decisão entre resina e porcelana é importante e depende de fatores como as necessidades do paciente, 
        preferências estéticas e o aconselhamento do dentista. Ambos os materiais têm vantagens e desvantagens, 
        e a melhor escolha varia caso a caso. Consulte um dentista estético para avaliar a melhor opção para suas 
        necessidades e expectativas.
      </p>
    `,
    image: "/service4.png",
  },
  {
    id: "05",
    title: "REMOÇÃO DE FACETAS DE PORCELANA A LASER",
    description: "Possuímos equipamento próprio que torna o procedimento rápido e sem a necessidade de anestesia.",
    fullDescription: `
      <p>
        O laser atua exclusivamente no cimento que fixa a faceta ao dente, sem causar qualquer tipo de agressão aos tecidos dentários ou gengivais.
      <p/>
      <p style="margin-top: 20px">
        O procedimento é minimamente invasivo, indolor e não provoca aumento de sensibilidade nos dentes.
      </p>
    `,
    image:"/service5.png",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const visibleServices = services.slice(activeIndex, activeIndex + 3).concat(
    services.slice(0, Math.max(0, activeIndex + 3 - services.length))
  );


  // Serviço visível para mobile
  const mobileService = services[activeIndex];

  return (
    <section id='servicos' className="relative w-full h-auto md:h-auto bg-gray-100 pt-[305px] md:-mt-28 md:py-4">
      <div className="relative text-left md:ml-[98px] md:mb-[75px] z-20 text-black">
        <h2 className="text-3xl ml-[32px] md:ml-[10px] leading-[40px] md:text-[54px] md:leading-[62px] font-bold">
          Conheça <br /> nossos serviços
        </h2>
      </div>

      <div className="relative w-full h-[256px] md:h-[380px] mt-6 z-10 ml-[32px] md:ml-[98px]">
        <Image
          src={services[activeIndex].image}
          alt="Conheça nossos serviços"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="relative w-full h-[50px] ml-[32px] md:ml-[98px] mt-[36px] mb-9 flex">
        {services.map((_, index) => (
          <div
            key={index}
            className={`flex-1 max-w-[269px] h-[3px] ${index >= activeIndex && index < activeIndex + 3 ? "bg-[#0C568C]" : "bg-gray-300"}`}
          ></div>
        ))}
      </div>

      {/* Renderização para desktop */}
      <div className="hidden md:flex flex-row justify-center ml-[32px] md:ml-[98px] gap-4">
        {visibleServices.map((service, index) => {
          const globalIndex = (activeIndex + index) % services.length;
          const isActive = globalIndex === activeIndex;

          return (
            <div
              key={service.id}
              className={`card flex-1 p-4 transition-all ${isActive ? "active" : ""}`}
            >
              <strong
                className={`text-xl font-semibold ${isActive ? "text-black" : "text-gray-200"
                  }`}
              >
                <span
                  className={`block font-bold text-2xl mb-2 ${isActive ? "text-black" : "text-gray-200"
                    }`}
                >
                  {service.id}
                </span>
                {service.title}
              </strong>
              <p className={`mt-2 text-sm ${isActive ? "text-black" : "text-gray-200"}`}
                style={{
                  width:
                    service.id === "01"
                      ? "326px"
                      : service.id === "02"
                        ? "370px"
                        : service.id === "03"
                          ? "279px"
                          : service.id === "04"
                            ? "300px"
                            : service.id === "05"
                              ? "279.8px"
                              : "auto",
                }}
              >
                {service.description}
              </p>
              {isActive && service.fullDescription && (
                <>
                  {showFullDescription && (
                    <div
                      className="mt-4 text-sm text-black"
                      dangerouslySetInnerHTML={{ __html: service.fullDescription }}
                    />
                  )}
                  {showFullDescription && (
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 text-black font-bold"
                    >
                      <br /> Saiba mais clicando aqui <br />
                    </a>
                  )}
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="mt-4 text-black font-medium"
                  >
                    {showFullDescription ? "LER MENOS -" : "LER MAIS +"}
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Renderização para mobile */}
      <div className="flex md:hidden flex-col justify-center items-center ml-[32px] md:ml-[98px] gap-4">
        <div className="card flex-1 p-4 transition-all bg-white text-black">
          <strong className="text-xl font-semibold">
            <span className="block font-bold text-2xl mb-2 text-black">
              {mobileService.id}
            </span>
            {mobileService.title}
          </strong>
          <p
            className="mt-2 text-sm text-black"
            style={{
              width:
                mobileService.id === "01"
                  ? "326px"
                  : mobileService.id === "02"
                    ? "370px"
                    : mobileService.id === "03"
                      ? "279px"
                      : mobileService.id === "04"
                        ? "300px"
                        : mobileService.id === "05"
                          ? "279.8px"
                          : "auto",
            }}
          >
            {mobileService.description}
          </p>
          {mobileService.fullDescription && (
            <>
              {showFullDescription && (
                <div
                  className="mt-4 text-sm text-black"
                  dangerouslySetInnerHTML={{ __html: mobileService.fullDescription }}
                />
              )}
              {showFullDescription && (
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-black font-bold"
                >
                  <br /> Saiba mais clicando aqui <br />
                </a>
              )}
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="mt-4 text-black font-medium"
              >
                {showFullDescription ? "LER MENOS -" : "LER MAIS +"}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="mt-8 gap-4 flex justify-center md:justify-end md:mr-[96px] pb-[40px]">
        <div onClick={handlePrev} className="cursor-pointer">
          <Image
            src="/right.svg"
            alt="Left Arrow"
            width={39}
            height={39}
            className="rotate-180"
          />
        </div>
        <div onClick={handleNext} className="cursor-pointer">
          <Image
            src="/right.svg"
            alt="Right Arrow"
            width={39}
            height={39}
          />
        </div>
      </div>
    </section>
  );
}