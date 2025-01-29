"use client";
import * as React from "react";
import { Card, CardContent } from "@/ui_components/card";
import { Button } from "@/ui_components/button";
import Image from "next/image";
import { useState, useEffect } from "react";


const services = [
  {
    id: "01",
    title: "HARMONIZAÇÃO FACIAL",
    description:
      "Procedimentos que equilibram suas expressões faciais, proporcionando beleza natural e harmonia em cada detalhe.",
    fullDescription: `
      <p>
        <strong>O que é</strong>:
      </p>
      <p>
        <br/>A harmonização facial é um conjunto de procedimentos estéticos que têm como objetivo principal promover o alinhamento e correção de ângulos da face, melhorar a harmonia entre os dentes e restantes características da pele, conferir mais beleza ao rosto e realçar as características já existentes, sendo indicada para homens e mulheres que desejam melhorar o equilíbrio do rosto e dentes, promover o rejuvenescimento da pele e melhorar a simetria facial.
      </p>
      <p style="margin-top: 20px;">
        Esta técnica, também conhecida como harmonização orofacial, é feita de acordo com as necessidades da pessoa, de forma individualizada, através de realização de diferentes procedimentos estéticos, como preenchimento com ácido hialurônico nas bochechas, queixo ou lábios, aplicação de toxina botulínica ou bichectomia, por exemplo.
      </p>
      <p style="margin-top: 20px;">
        Dependendo do procedimento realizado, alguns resultados podem ser vistos de imediato, logo a seguir à intervenção estética, mas o resultado final demora cerca de 15 a 30 dias a surgir. É importante que a harmonização facial seja feita por um profissional altamente capacitado, evitando assim qualquer risco de intercorrências.
      </p>
    `,
    image: "/service1.png",
    textWidth: "w-[90%] sm:w-[100%]"
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
    textWidth: "w-[90%] sm:w-[80%]"
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
    textWidth: "w-[90%] sm:w-[115%]"
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
        <li style="margin-top: 20px"><strong>Translucidez:</strong><br /> A porcelana é mais translúcida que a resina, conferindo um aspecto mais natural aos dentes.</li>
        <li style="margin-top: 20px"><strong>Resistência:</strong><br /> A porcelana é mais resistente que a resina, sendo mais indicada para casos de bruxismo ou mordida forte.</li>
        <li style="margin-top: 20px"><strong>Abrasão:</strong><br /> A porcelana é menos abrasiva que a resina, reduzindo o risco de desgaste nos dentes adjacentes.</li>
        <li style="margin-top: 20px"><strong>Riscos de Fratura:</strong><br /> As facetas de porcelana são menos propensas a fraturas em comparação às facetas de resina.</li>
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
    textWidth: "w-[90%] sm:w-[104%]"
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
    image: "/service5.png",
    textWidth: "w-[90%] sm:w-[100%]"
  },
];

export default function ActivityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidthAndItemsPerPage = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        setWindowWidth(width);
        setItemsPerPage(width <= 390 ? 1 : 3);
      }
    };

    updateWindowWidthAndItemsPerPage();
    window.addEventListener("resize", updateWindowWidthAndItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateWindowWidthAndItemsPerPage);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setExpandedIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
    setExpandedIndex(null);
  };

  const handleCardClick = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const startIndex = Math.floor(currentIndex / itemsPerPage) * itemsPerPage;
  const displayedServices = services.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div id="servicos" className="relative w-full md:h-auto bg-gray-100 pt-[300px] md:pt-0 md:-mt-28 md:py-4">
      <div className="relative text-left mx-4 md:ml-[98px] mb-8 md:mb-[75px] z-20 text-black">
        <h2 className="text-3xl sm:text-4xl md:text-[54px] leading-8 md:leading-[62px] font-bold">
          Conheça <br /> nossos serviços
        </h2>
      </div>

      <div className="relative w-full h-[156px] sm:h-[256px] md:h-[380px] mt-6 z-10 ml-4 md:ml-[98px]">
        <Image
          src={services[currentIndex].image}
          alt="Conheça nossos serviços"
          layout="fill"
          style={{ objectFit: "cover" }}
          quality={100}
          unoptimized={true}
          className="w-full h-full"
        />
      </div>

      <div className="w-full mx-auto px-4 md:px-[98px] py-8 bg-gray-100">
        <div className="mt-8 h-[2px] bg-[#D3D3D3] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0C568C] transition-all duration-300 ease-in-out"
            style={{
              width: `${((currentIndex + 1) / services.length) * 100}%`,
            }}
          />
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row overflow-hidden gap-8 mt-8 md:gap-16">
            {displayedServices.map((service, index) => (
              <Card
                key={service.id}
                className={`w-full border-none flex-shrink-0 md:w-auto ${
                  index === currentIndex ? "block" : "hidden"
                } md:block`}
                style={{
                  width:
                    windowWidth <= 500
                      ? "100%"
                      : service.id === "01"
                      ? "25%"
                      : service.id === "02"
                      ? "30%"
                      : service.id === "03"
                      ? "22.2%"
                      : service.id === "04"
                      ? "24.7%"
                      : service.id === "05"
                      ? "25%"
                      : "auto",
                }}
              >
                <CardContent
                  className={`p-4 md:p-0 border-none ${
                    expandedIndex === startIndex + index
                      ? "min-h-screen"
                      : "min-h-auto"
                  } md:h-auto`}
                >
                  <h3
                    className="text-xl md:text-[22px] font-bold mb-2 mt-8 md:mt-[35px] uppercase"
                    style={{
                      color:
                        startIndex + index === currentIndex
                          ? "#000000"
                          : "#D3D3D3",
                    }}
                  >
                    {service.id}
                  </h3>
                  <h3
                    className="text-xl md:text-[22px] font-medium mb-2 uppercase"
                    style={{
                      color:
                        startIndex + index === currentIndex
                          ? "#000000"
                          : "#D3D3D3",
                    }}
                  >
                    {service.title}
                  </h3>
                  <div className="relative">
                    <div
                      className="text-[12px] sm:text-sm text-black w-[100%] mb-4"
                      style={{
                        color:
                          startIndex + index === currentIndex
                            ? "#000000"
                            : "#D3D3D3",
                      }}
                    >
                      {service.description}
                    </div>
                    {expandedIndex === startIndex + index && (
                      <>
                        <div
                          className={`text-[12px] sm:text-sm mb-4 ${service.textWidth}`}
                          style={{ color: "#000000" }}
                          dangerouslySetInnerHTML={{
                            __html: service.fullDescription,
                          }}
                        />
                        <p className="mt-2 text-[12px] sm:text-sm">
                          <a
                            href="https://www.youtube.com"
                            className="font-bold text-black hover:underline"
                          >
                            Saiba mais clicando aqui
                          </a>
                        </p>
                      </>
                    )}
                    <Button
                      variant="link"
                      onClick={() => handleCardClick(startIndex + index)}
                      className="text-[#7D7D7D] hover:no-underline text-[12px] sm:text-sm tracking-[0.2px] uppercase ml-[-16px] pt-2"
                    >
                      {expandedIndex === startIndex + index
                        ? "Ver menos -"
                        : "Ver mais +"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:justify-end md:mr-[96px] pb-[40px] gap-2">
            <div onClick={handlePrev} className="cursor-pointer mr-4 md:mr-0">
              <Image
                src="/Right.svg"
                alt="Left Arrow"
                width={39}
                height={39}
                className="rotate-180"
              />
            </div>
            <div onClick={handleNext} className="cursor-pointer">
              <Image
                src="/Right.svg"
                alt="Right Arrow"
                width={39}
                height={39}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}