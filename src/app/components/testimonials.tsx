'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/ui_components/carousel-secondary';
import { cn } from '../../../libs/utils';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { EmblaCarouselType } from 'embla-carousel';

const testimonials = [
  `Melhor atendimento, melhor profissional. Há mais de um ano tive um sonho realizado com essa clínica maravilhosa e desde então não paro mais de sorrir [...]`,
  `Agradeço a equipe da Natural Smile que desde o início me atenderam muito bem e conseguiram elevar a minha auto-estima com um sorriso impecável!`,
  `Seu profissionalismo e habilidades técnicas são inestimáveis. Obrigada por superar minhas expectativas [...] trabalho digno de elogios.`,
  `Estamos super felizes e realizadas, não só pela estética e também pela nossa saúde bucal que é o mais importante, e precisamos muito [...]`,
  `Não tenho palavras para agradecer o quanto me sinto bem a cada vez que olho no espelho`,
  `Tô aqui chorando de emoção e felicidade Tati... Vocês não têm noção do bem que me fizeram. Não só pela estética, mas por traumas e vergonha que carreguei a vida toda. Gratidão eterna ao Danilo, você e toda equipe.`,
];

const Testimonials = () => {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState<number>(0);

  const handleSetApi = (api: EmblaCarouselType | undefined) => {
    setEmblaApi(api || null); // Garante que o estado receba `null` ao invés de `undefined`.
  };

  useEffect(() => {
    if (emblaApi) {
      const updateCurrent = () => setCurrent(emblaApi.selectedScrollSnap());
      emblaApi.on('select', updateCurrent);

      // Cleanup function
      return () => {
        emblaApi.off('select', updateCurrent);
      };
    }
  }, [emblaApi]);

  return (
    <section
      id="depoimentos"
      className="py-16 px-4 lg:px-[156px] bg-gray-100 text-black"
    >
      <h1 className="text-[30px] md:text-[54px] leading-[33px] md:leading-[70px] font-medium text-center mx-auto max-w-[1000px]">
        Depoimentos
      </h1>
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[Autoplay({ delay: 4000 })]}
        setApi={handleSetApi}
        className="w-full mx-auto mt-5 md:mt-12"
      >
        <CarouselContent className="gap-3">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/3 flex-shrink-0"
            >
              <div className="p-1">
                <div className="w-[376px] h-[300px] p-4 bg-white rounded-lg shadow-lg">
                  <div className="flex flex-col justify-start">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/author.svg"
                        alt="author"
                        width={70}
                        height={70}
                        className="rounded-full"
                        unoptimized
                      />
                      <div>
                        <p className="text-[17px] font-bold leading-[25px]">
                          Paciente
                        </p>
                        <Image
                          src="/stars.svg"
                          alt="stars"
                          width={112}
                          height={16}
                          className="mt-2"
                          unoptimized
                        />
                      </div>
                    </div>
                    <p className="mt-6 text-[14px] md:text-[15px] leading-[23px] md:leading-[25px] italic">
                      {`“${testimonial}”`}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer" />
        <CarouselNext className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer" />
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                current === index ? 'bg-[#0C568C] w-2' : 'bg-gray-300'
              )}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
