import { Button } from '../../ui_components/button'
import Fundo from '../../../public/naturalsmile.svg'
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="sobre-nos" className="relative w-full h-[870px] bg-gray-100">
        
      {/* Imagem de fundo */}
      <Image
        src={Fundo}
        alt="fundo natural smile"
        className="absolute top-0 left-0 w-full h-full z-10"
      />

      <div className="relative w-full md:max-w-[1086px] lg:grid xl:px-0 lg:px-[60px] md:px-[71px] lg:grid-cols-2 flex flex-col md:items-stretch items-center md:gap-20 pb-0 py-16 md:py-[120px] mx-auto text-black z-40">
        <div className="lg:order-1 order-2">
          <video
            src="/sobre-nos.mp4"
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            playsInline
            className="lg:h-[470px] md:h-[400px] object-cover"
          />
        </div>

        <div className="md:max-w-[465px] max-w-[390px] text-center md:text-left md:px-[0px] px-[37px] lg:order-2 order-1 md:pb-[0px] pb-[65px]">
          <h1 className="text-[32px] md:text-[54px] font-medium mb-2">Sobre nós</h1>
          <p className="text-[14px] leading-[23px] font-normal">
            Somos uma clínica odontológica de excelência, equipada com
            laboratório próprio, o que nos permite controlar cada etapa do
            tratamento e garantir um alto padrão de qualidade e precisão.
          </p>

          <p className="text-[14px] leading-[23px] font-normal mt-3 md:mt-4">
            Especializados em laminados cerâmicos, também conhecidos como lentes
            de contato dental, oferecemos soluções estéticas que vão além da
            aparência, restaurando a confiança e promovendo impacto na vida dos
            nossos pacientes.
          </p>

          <p className="text-[14px] leading-[23px] font-normal mt-3 md:mt-4">
            Nosso principal compromisso é devolver a autoestima e o bem-estar,
            criando sorrisos harmônicos, naturais e personalizados, que refletem
            o que há de mais avançado na odontologia estética e funcional.
          </p>
          <a href="https://wa.me/5548996482808" className="cursor-pointer" target="_blank">
            <Button className="mt-[30px] md:mt-10 w-[190px] md:w-[229px] h-[45px] md:h-[48px] bg-[#0C568C] text-[11px] leading-[13px] font-semibold">
              ENTRE EM CONTATO
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
