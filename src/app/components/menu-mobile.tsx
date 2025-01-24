'use client'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MenuItems } from './header/data'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleOpen = () => {
    setIsOpen((state) => !state)
  }
  return (
    <div className="fixed lg:hidden top-0 z-50 w-full">
      <div
        className={`flex justify-between items-center py-4 px-8 max-w-[100vw] ${
          isOpen ? 'bg-white' : isScrolled ? 'bg-white' : 'bg-white'
        }`}
      >
        {!isOpen ? (
          <>
            <Image
              src="/logo.svg"
              alt="logo"
              width={126}
              height={56}
              className="cursor-pointer"
              unoptimized
            />
            <Image
              src="/burguer.svg"
              alt="menu"
              height={25}
              width={25}
              className="cursor-pointer"
              onClick={toggleOpen}
              unoptimized
            />
          </>
        ) : (
          <div className="flex  items-center justify-between w-full">
            <Image
              src="logo.svg"
              alt="logo"
              width={126}
              height={56}
              className="cursor-pointer"
              unoptimized
            />
            <X onClick={toggleOpen} size={24} className="text-[#0C568C]" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="bg-black w-full px-[40px] pt-[80px] h-screen">
          <div className="w-full flex flex-col gap-6 text-white">
            {MenuItems.map((item) => (
              <a
                href={`#${item.link}`}
                key={item.link}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}