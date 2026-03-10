'use client';

import { useEffect, useRef, useState } from 'react';
import { navItems } from '../utils';
import { Mail, Linkedin, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className='sticky top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl'
    >
      <div className='flex w-full items-center px-5 py-3 md:px-10 2xl:gap-12 2xl:px-24 2xl:py-5'>
        <a
          href='#home'
          onClick={() => setIsOpen(false)}
          className='text-xs font-semibold tracking-[0.08em] text-white transition duration-300 hover:text-neutral-300 2xl:text-xl'
        >
          Stefanija Duracoska
        </a>

        <nav className='ml-8 hidden items-center gap-6 md:flex 2xl:gap-8'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-neutral-400 transition duration-300 hover:text-white 2xl:text-2xl'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='ml-auto hidden items-center gap-5 md:flex 2xl:gap-7'>
          <a
            href='mailto:sduracoska+portfolio@gmail.com'
            className='text-neutral-400 transition duration-300 hover:scale-110 hover:text-white'
            aria-label='Send Email'
          >
            <Mail size={16} className='2xl:h-7 2xl:w-7' />
          </a>

          <a
            href='https://www.linkedin.com/in/stefanija-duracoska-0a38bb256/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-400 transition duration-300 hover:scale-110 hover:text-white'
            aria-label='LinkedIn'
          >
            <Linkedin size={16} className='2xl:h-7 2xl:w-7' />
          </a>
        </div>

        <button
          type='button'
          onClick={() => setIsOpen((prev) => !prev)}
          className='ml-auto rounded-full border border-white/10 bg-white/5 p-2 text-neutral-300 transition duration-300 hover:bg-white/10 hover:text-white md:hidden'
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className='absolute left-0 top-full w-full border-t border-white/10 bg-[#020617]/95 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden'>
          <nav className='flex flex-col gap-4'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className='text-sm font-medium text-neutral-300 transition duration-300 hover:text-white'
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className='mt-5 flex items-center gap-4'>
            <a
              href='mailto:sduracoska+portfolio@gmail.com'
              className='text-neutral-400 transition duration-300 hover:text-white'
              aria-label='Send Email'
            >
              <Mail size={18} />
            </a>

            <a
              href='https://www.linkedin.com/in/stefanija-duracoska-0a38bb256/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-400 transition duration-300 hover:text-white'
              aria-label='LinkedIn'
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
