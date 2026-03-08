import { MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section id='home' className='relative border-b border-white/10'>
      <div className='mx-auto w-full max-w-410 px-6 py-36 md:px-10 xl:px-16'>
        <div className='max-w-4xl'>
          <h1 className='whitespace-nowrap text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-[5.5rem]'>
            Hi, I&apos;m Stefanija Duracoska
          </h1>

          <div className='mt-10 max-w-2xl text-xl leading-[1.7] text-neutral-200 md:text-2xl'>
            <p>
              Full-Stack Software Engineer building modern web applications with
              TypeScript, React and Node.js.
            </p>

            <p className='mt-4 text-neutral-300'>
              Focused on clean frontend experiences and scalable backend
              systems.
            </p>
          </div>

          <div className='mt-6 flex items-center gap-2 text-sm text-neutral-400'>
            <MapPin size={16} />
            <span>Based in Macedonia</span>
          </div>

          <div className='mt-14 flex flex-wrap gap-5'>
            <a
              href='/Stefanija-Duracoska-CV.pdf'
              download
              className='rounded-full bg-white px-8 py-4 text-base font-medium text-black transition duration-300 hover:scale-[1.03]'
            >
              Download Resume
            </a>

            <a
              href='#contact'
              className='rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white transition duration-300 hover:bg-white/10'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
