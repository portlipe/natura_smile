import Image from 'next/image'

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/5548996482808"
      className="cursor fixed flex items-center gap-2 right-3 md:right-[67px] bottom-[38px] md:bottom-[64px] z-50 transform transition-transform duration-300 hover:scale-110"
    >
      <div className="py-[10px] px-[12px] md:py-[13px] md:px-[17px] bg-white">
        <p className="text-[10px] md:text-xs font-bold leading-[15px] md:leading-[18px] text-black">
          Olá! Como podemos te ajudar?
        </p>
      </div>

      <Image
        src="/wppbutton.svg"
        alt="whatsapp logo"
        width={53}
        height={53}
        className="h-10 md:h-[53px] w-10 md:w-[53px]"
        unoptimized
      />
    </a>
  )
}

export default Whatsapp