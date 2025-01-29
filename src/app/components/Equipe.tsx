/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Card, CardContent } from '../../ui_components/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui_components/carousel-secondary"
import { cn } from '../../../libs/utils'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const image = [
  '/team1.png',
  '/team2.png',
  '/team3.png',
  '/team4.png',
  '/team5.png',
  '/team6.png',
]

const team = [
  'Dra Gabriela kerschbaumer',
  'Danilo Bernardes',
  'Dr Marcel Machado',
  'Dra Gabriela kerschbaumer',
  'Danilo Bernardes',
  'Dr Marcel Machado',
]

const description = [
  'Harmonização facial | CRO 22156 ',
  'Ceramista, Oral Design | CRO 1062 ',
  'Implantodontista ',
  'Harmonização facial | CRO 22156 ',
  'Ceramista, Oral Design | CRO 1062 ',
  'Implantodontista ',
]

const items = image.map((img, index) => ({
  image: img,
  description: description[index] || '',
  team: team[index] || '',
}))

const Team = () => {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section
      id="equipe"
      className="w-full py-12 sm:py-16 md:py-[106px] px-4 sm:px-6 md:px-[61px] max-h-auto bg-[#F9F9F9] text-black"
    >
      <h1 className="font-medium text-2xl sm:text-[30px] md:text-[54px] leading-[28px] sm:leading-[33px] md:leading-[64px] text-black text-center max-w-xs sm:max-w-[309px] md:max-w-full mx-auto">
        Conheça nossa equipe
      </h1>

      <p className="max-w-[280px] sm:max-w-[327px] md:max-w-[799px] text-[12px] sm:text-sm md:text-sm text-center mx-auto mt-5 sm:mt-7 md:mt-10 text-black leading-5 sm:leading-[15.81px] md:leading-[23px]">
        Nossa equipe é formada por profissionais altamente capacitados em todas
        as áreas da odontologia, com especializações que abrangem desde a
        estética dental e harmonização facial até tratamentos odontológicos
        complexos e reabilitações estéticas.
      </p>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        setApi={setApi}
        className="w-full max-w-xs sm:max-w-[95vw] lg:max-w-[1110px] mx-auto mt-5 sm:mt-8 md:mt-12"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-3/4 md:basis-1/2 lg:basis-1/3 border-none"
            >
              <div className="p-2 sm:p-4 md:px-[28px]">
                <Card className="rounded-none border-none p-0 shadow-none">
                  <CardContent className="p-0 flex flex-col items-center sm:items-start">
                    <Image
                      src={item.image}
                      alt="Imagem"
                      width={320}
                      height={420}
                      className="border-none flex max-w-[300px] sm:max-w-[320px] md:max-w-[400px] max-h-[400px] sm:max-h-[470px] rounded-none mb-4 sm:mb-[20px]"
                      unoptimized
                    />
                    <strong className="uppercase text-base sm:text-lg font-bold text-center sm:text-left">
                      {item.team}
                    </strong>
                    <p className="text-xs sm:text-sm text-center sm:text-left">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Ajuste nos botões de navegação para telas pequenas */}
        <CarouselPrevious className="absolute left-0 sm:left-[-30px] top-1/2 transform -translate-y-1/2 p-0 cursor-pointer border-none hidden sm:flex" />
        <CarouselNext className="absolute right-0 sm:right-[-30px] top-1/2 transform -translate-y-1/2 p-0 cursor-pointer border-none hidden sm:flex" />

        {/* Dots de paginação */}
        <div className="flex justify-center gap-2 mt-5 sm:mt-8 md:mt-10">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                current === index ? 'bg-[#0C568C] w-2' : 'bg-gray-300',
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}

export default Team
