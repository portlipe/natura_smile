"use client";

import Image from "next/image";
import { useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
};

const services: Service[] = [
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
  },
  {
    id: "02",
    title: "TRATAMENTOS ODONTOLÓGICOS",
    description:
      "Nossa equipe é formada por profissionais altamente capacitados.",
  },
  {
    id: "03",
    title: "LABORATÓRIO PRÓPRIO",
    description:
      "Possuímos um laboratório de prótese dentária próprio, com equipe qualificada.",
  },
];

export default function Services() {
  const [activeSection, setActiveSection] = useState<string>("01");
  const [showFullDescription, setShowFullDescription] = useState<boolean>(
    false
  );

  const activeIndex = parseInt(activeSection) - 1;
  const progress = Array(services.length)
    .fill("gray")
    .map((color, index) => (index <= activeIndex ? "blue" : "gray"));

  return (
    <section className="relative bg-gray-100 -mt-28">
      <div className="relative text-left ml-[98px] mb-[75px] z-20 text-black">
        <h2 className="text-[54px] leading-[62px] font-bold">
          Conheça <br /> nossos serviços
        </h2>
      </div>

      <div className="relative w-full h-[380px] mt-6 z-10 ml-[98px]">
        <Image
          src="/harmonizacao.png"
          alt="Conheça nossos serviços"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative w-full h-[50px] ml-[98px] mt-[36px] mb-9 flex">
        {progress.map((color, index) => (
          <div
            key={index}
            className={`flex-1 w-[269px] h-[3px] ${
              color === "blue" ? "bg-[#0C568C]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center ml-[98px]">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex-1 p-6 transition-all ${
              activeSection === service.id
                ? "text-black"
                : "bg-gray-100 text-gray-200"
            }`}
          >
            <h3 className="text-xl font-semibold">
              <span
                className={`block font-bold text-2xl mb-2 ${
                  activeSection === service.id ? "text-black" : "text-gray-200"
                }`}
              >
                {service.id}
              </span>
              {service.title}
            </h3>
            <p
              className="mt-2"
              style={{ width: service.id === "01" ? "350px" : "auto" }}
            >
              {service.description}
            </p>
            {activeSection === service.id && service.fullDescription && (
              <>
                {showFullDescription && (
                  <div
                    className="mt-4 text-sm"
                    style={{ width: service.id === "01" ? "319px" : "auto" }}
                    dangerouslySetInnerHTML={{
                      __html: service.fullDescription,
                    }}
                  />
                )}
                {showFullDescription && (
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-black font-bold"
                  >
                    <br/> Saiba mais clicando aqui <br/> 
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
        ))}
      </div>

      <div className="mt-8 gap-4 flex justify-end">
        {/* Imagem Left */}
        <div
          onClick={() =>
            setActiveSection((prev) =>
              parseInt(prev) > 1
                ? String(parseInt(prev) - 1).padStart(2, "0")
                : String(services.length).padStart(2, "0")
            )
          }
          className="cursor-pointer"
        >
          <Image
            src="/left.svg"
            alt="Left Arrow"
            width={39}
            height={39}
          />
        </div>

        {/* Imagem Right */}
        <div
          onClick={() =>
            setActiveSection((prev) =>
              parseInt(prev) < services.length
                ? String(parseInt(prev) + 1).padStart(2, "0")
                : "01"
            )
          }
          className="cursor-pointer"
        >
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
