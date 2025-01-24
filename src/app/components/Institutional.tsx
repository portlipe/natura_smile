import { Button } from "../../ui_components/button";

const Institutional = () => {
  return (
    <section id="video" className="bg-black">
      <div className="lg:grid lg:grid-cols-2 flex flex-col max-w-[1440px] mx-auto items-center md:items-start lg:px-[108px] md:px-[71px] lg:gap-[80px]">
        <div className="md:py-[42px] lg:py-[130px] space-y-5 flex flex-col  justify-center md:items-start items-center md:pt-[40px] pt-[42px]">
          <h1 className="max-w-[332px] md:max-w-[500px] text-center md:text-start text-[30px] md:text-[54px] leading-[33px] md:leading-[65px] font-medium">
            Transformamos seu sorriso em até 48h!
          </h1>
          <p className="max-w-[240px] md:max-w-[425px] text-[11px] md:text-sm leading-[15.81px] md:leading-[23px] text-center md:text-start">
            Com nosso laboratório próprio e uma equipe altamente especializada,
            oferecemos tratamentos rápidos e personalizados, garantindo precisão
            e qualidade em cada detalhe.
          </p>
          <a
            href="https://wa.me/5548996482808"
            className=" cursor-pointer"
            target="_blank"
          >
            <Button className="md:mr-auto md:h-[48px] md:w-[229px] h-[45px] w-[190px] bg-[#0C568C] text-[11px]">
              ENTRE EM CONTATO
            </Button>
          </a>
        </div>

        <div className="pt-[42px] lg:py-[130px]  w-full h-full ">
          <video
            src="/institucional_desktop.mp4"
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            controls
            playsInline
            className="w-full h-full lg:max-w-[648px] lg:max-h-[405px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Institutional;
