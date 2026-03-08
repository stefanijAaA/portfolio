import { navItems } from '../utils';
import { Mail, Linkedin } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl'>
      <div className='flex w-full items-center gap-8 px-7 py-3 md:px-10 2xl:gap-12 2xl:px-24 2xl:py-5'>
        <a
          href='#home'
          className='text-xs font-semibold tracking-[0.08em] text-white transition duration-300 hover:text-neutral-300 2xl:text-lg'
        >
          Stefanija Duracoska
        </a>

        <nav className='flex items-center gap-6 2xl:gap-8'>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='text-sm font-medium text-neutral-400 transition duration-300 hover:text-white 2xl:text-xl'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='ml-auto flex items-center gap-5 2xl:gap-7'>
          <a
            href='mailto:sduracoska+portfolio@gmail.com'
            className='text-neutral-400 transition duration-300 hover:scale-110 hover:text-white'
            aria-label='Send Email'
          >
            <Mail size={16} className='2xl:h-5 2xl:w-5' />
          </a>

          <a
            href='https://www.linkedin.com/in/stefanija-duracoska-0a38bb256/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-400 transition duration-300 hover:scale-110 hover:text-white'
            aria-label='LinkedIn'
          >
            <Linkedin size={16} className='2xl:h-5 2xl:w-5' />
          </a>
        </div>
      </div>
    </header>
  );
};
