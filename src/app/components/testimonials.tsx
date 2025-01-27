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
import { EmblaCarouselType } from 'embla-carousel'

const testimonials = [
  {
    image: '/author.svg',
    author: 'Paciente',
    rating: '/stars.svg',
    text: `“Melhor atendimento, melhor profissional. Há mais de um ano tive um sonho realizado com essa clínica maravilhosa e desde então não paro mais de sorrir [...]”`,
    textWidth: 'w-[275px]',
  },
  {
    image: '/author.svg',
    author: 'Paciente',
    rating: '/stars.svg',
    text: `“Agradeço a equipe da Natural Smile que desde o início me atenderam muito bem e conseguiram elevar a minha auto-estima com um sorriso impecável!”`,
  },
  {
    image: '/author.svg',
    author: 'Paciente',
    rating: '/stars.svg',
    text: `“Seu profissionalismo e habilidades técnicas são inestimáveis. Obrigada por superar minhas expectativas [...] trabalho digno de elogios.”`,
    textWidth: '290px',
  },
  {
    image: '/author.svg',
    author: 'Paciente',
    rating: '/stars.svg',
    text: `“Estamos super felizes e realizadas, não só pela estética e também pela nossa saúde bucal que é o mais importante, e precisamos muito [...]”`,
  },
  {
    image: '/author.svg',
    author: 'Paciente',
    rating: '/stars.svg',
    text: `”Não tenho palavras para agradecer o quanto me sinto bem a cada vez que olho no espelho”`,
  },
  {
    image: '/author.svg',
    author: 'Paciente',
    rating: '/stars.svg',
    text: `”Tô aqui chorando de emoção e felicidade Tati... Vocês não tem noção do bem que me fizeram. Não só pela estética, mas por traumas e vergonha que carreguei a vida toda. Gratidão eterna ao Danilo, você e toda equipe.”`,
  },
]

const Testimonials = () => {
  const [api, setApi] = useState<EmblaCarouselType | undefined>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section
      id="depoimentos"
      className="w-full py-16 md:py-[106px] px-4 md:px-[61px] bg-[#F9F9F9] text-black"
    >
      <h1 className="font-medium text-[30px] md:text-[54px] leading-[33px] md:leading-[64px] text-black text-center">
        Depoimentos
      </h1>

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
        className="w-full max-w-[95vw] lg:max-w-[1110px] mx-auto mt-10 md:mt-12"
      >
        <CarouselContent className="gap-[16px]">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-8 sm:p-4">
                <Card className="bg-white w-[336px] h-[270px] border-none">
                  <CardContent className="flex flex-col p-[21.7px] items-start">
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={item.image}
                        alt="Author"
                        width={50}
                        height={50}
                        className="rounded-full"
                        unoptimized
                      />
                      <div className="flex flex-col">
                        <span className="font-bold text-md">{item.author}</span>
                        <Image
                          src={item.rating}
                          alt="Stars"
                          width={100}
                          height={20}
                          unoptimized
                        />
                      </div>
                    </div>
                    <p 
                      className="text-sm font-medium text-gray-600 italic mt-4"
                    >
                      {item.text}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 p-0 cursor-pointer border-none" />
        <CarouselNext className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 p-0 cursor-pointer border-none" />
        <div className="flex justify-center gap-2 mt-5 md:mt-10">
          {testimonials.map((_, index) => (
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

export default Testimonials
