
import Image from 'next/image'
import { MenuItems } from './data'

const DesktopHeader = () => {
  return (
    <div className="w-full py-7 px-20 justify-between items-center hidden lg:flex fixed top-0 z-50 bg-white text-black">
      <Image
        src="/logo.svg"
        alt="logo"
        width={192}
        height={85}
        unoptimized
      />

      <div className="flex items-center text-[14px] gap-[25px]">
        {MenuItems.map((item) => (
          <a key={item.label} href={`#${item.link}`}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default DesktopHeader
