import { Mail, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='scroll-mt-20 border-t border-white/10 py-10 sm:py-18 md:py-20 2xl:scroll-mt-24 2xl:py-24'
    >
      <div className='mx-auto w-full max-w-6xl 2xl:max-w-410 px-7 md:px-10 2xl:px-16'>
        <p className='mb-3 text-xs uppercase tracking-[0.28em] text-neutral-400 2xl:mb-4 2xl:text-sm 2xl:tracking-[0.3em]'>
          Contact
        </p>

        <div className='grid gap-12 md:grid-cols-[1fr_1fr] md:items-start 2xl:gap-16'>
          <div>
            <h2 className='text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl 2xl:text-5xl'>
              Let&apos;s work together
            </h2>

            <p className='mt-5 max-w-md text-sm leading-6 text-neutral-300 sm:text-sm 2xl:mt-6 2xl:max-w-lg 2xl:text-lg 2xl:leading-8'>
              If you&apos;re hiring, building something interesting, or just
              want to talk about tech, I&apos;d love to hear from you.
            </p>

            <p className='mt-3 text-xs font-medium text-violet-300 2xl:mt-4 2xl:text-sm'>
              Currently open to full-time opportunities.
            </p>
          </div>

          <div className='grid gap-3 2xl:gap-4'>
            <a
              href='mailto:sduracoska+portfolio@gmail.com'
              className='group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/10 2xl:rounded-2xl 2xl:p-5'
            >
              <div className='flex items-center gap-3'>
                <Mail className='text-violet-300' size={18} />
                <div>
                  <p className='text-xs uppercase tracking-[0.18em] text-neutral-500 2xl:text-sm 2xl:tracking-[0.2em]'>
                    Email
                  </p>
                  <p className='text-sm text-white group-hover:text-violet-200 2xl:text-base'>
                    sduracoska+portfolio@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href='https://www.linkedin.com/in/stefanija-duracoska-0a38bb256/'
              target='_blank'
              rel='noreferrer'
              className='group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/10 2xl:rounded-2xl 2xl:p-5'
            >
              <div className='flex items-center gap-3'>
                <Linkedin className='text-violet-300' size={18} />
                <div>
                  <p className='text-xs uppercase tracking-[0.18em] text-neutral-500 2xl:text-sm 2xl:tracking-[0.2em]'>
                    LinkedIn
                  </p>
                  <p className='text-sm text-white group-hover:text-violet-200 2xl:text-base'>
                    linkedin.com/in/stefanija-duracoska
                  </p>
                </div>
              </div>
            </a>

            <a
              href='https://github.com/stefanijAaA'
              target='_blank'
              rel='noreferrer'
              className='group cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/10 2xl:rounded-2xl 2xl:p-5'
            >
              <div className='flex items-center gap-3'>
                <Github className='text-violet-300' size={18} />
                <div>
                  <p className='text-xs uppercase tracking-[0.18em] text-neutral-500 2xl:text-sm 2xl:tracking-[0.2em]'>
                    GitHub
                  </p>
                  <p className='text-sm text-white group-hover:text-violet-200 2xl:text-base'>
                    github.com/stefanija
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
