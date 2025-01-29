import DesktopHeader from './header/desktop';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full">
            <DesktopHeader />
            <div className="h-full w-full pt-[85px]">
                <video
                    src="/banner_desktop.mp4"
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden md:block w-full h-full object-cover z-0"
                />
                <video
                    src="/banner_mobile.mp4"
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block md:hidden w-full h-full object-cover z-0"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 md:transform-none md:left-[90px] bottom-[132px] md:bottom-[120px] space-y-1">
                    <div className="bg-[#0C568C] px-[7px] md:px-[10px]">
                        <h1 className="text-[30px] md:text-[50px] md:leading-[59px] font-medium text-white whitespace-nowrap">
                            Não é sobre dente,
                        </h1>
                    </div>
                    <div className="bg-[#0C568C] px-[7px] md:px-[10px]">
                        <h1 className="text-[30px] md:text-[50px] md:leading-[59px] font-medium text-white whitespace-nowrap">
                            realizamos sonhos!
                        </h1>
                    </div>
                </div>
                <footer className="absolute bottom-0 left-0 w-full h-[55px] bg-[#0C568C] flex items-center justify-center">
                    <div className="flex items-center">
                        <Marquee gradient={false} speed={30} className="w-full">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex items-center">
                                    <Image
                                        src="/relogio_icon.svg"
                                        width={32}
                                        height={32}
                                        alt="Ícone de relógio"
                                        unoptimized
                                        className='ml-4'
                                    />
                                    <span className="text-white text-sm md:text-base ml-2">
                                        Das 9 às 20h, de segunda a sexta-feira.
                                    </span>
                                    <Image
                                        src="/phone_icon.svg"
                                        width={32}
                                        height={32}
                                        alt="Ícone de telefone"
                                        unoptimized
                                        className='ml-4'
                                    />
                                    <span className="text-white text-sm md:text-base ml-2">
                                        +55 (48) 9 9648-2808
                                    </span>
                                    <Image
                                        src="/local_icon.svg"
                                        width={32}
                                        height={32}
                                        alt="Ícone de localização"
                                        unoptimized
                                        className='ml-4'
                                    />
                                    <span className="text-white text-sm md:text-base ml-2">
                                        Avenida Santa Catarina, 1197 Sala 815 / 816 - Estreito, Florianópolis - SC, 88075-500
                                    </span>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Hero;
