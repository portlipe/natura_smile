'use client';

import { Card, CardContent } from '@/ui_components/card';
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

const images = [
  '/result2.png',
  '/result3.png',
  '/result4.png',
  '/result5.png',
  '/result6.png',
  '/result7.png',
  '/result1.png',
];

const Results = () => {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', updateCurrent);

    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <section
      id="resultados"
      className="bg-white py-16 px-8 md:px-[156px] text-black"
    >
      <h1 className="text-[30px] max-w-[277px] md:max-w-[1000px] mx-auto leading-[33px] text-center md:text-[54px] md:leading-[70px] font-medium">
        Veja alguns dos nossos resultados
      </h1>
      <Carousel
        opts={{
          align: 'end',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        setApi={(instance) => setApi(instance || null)} // Tratamento para null
        className="w-full max-w-[100vw] lg:max-w-[1110px] mx-auto mt-[30px] md:mt-12"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 flex-shrink-0"
            >
              <div className="p-0">
                <Card className="rounded-none border-none pl-2 shadow-none">
                  <CardContent className="p-0">
                    <Image
                      src={image}
                      alt="imagem de antes e depois"
                      width={540}
                      height={470}
                      className="border-none flex md:w-[540px] md:h-[470px] rounded-none mb-[20px]"
                      unoptimized
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 p-0 cursor-pointer border-none" />
        <CarouselNext className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 p-0 cursor-pointer border-none" />
        {/* Dots de paginação */}
        <div className="flex justify-center gap-2 mt-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                current === index ? 'bg-[#0C568C] w-2' : 'bg-gray-300'
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default Results;
