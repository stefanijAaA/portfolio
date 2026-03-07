export const Contact = () => {
  return (
    <section id='contact' className='border-t border-white/10 px-6 py-24'>
      <div className='mx-auto max-w-5xl'>
        <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
          Contact
        </p>

        <div className='grid gap-10 md:grid-cols-2'>
          <div>
            <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
              Let&apos;s get in touch
            </h2>

            <p className='mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg'>
              Whether it&apos;s a job opportunity, a collaboration, or just a
              conversation about tech, feel free to reach out.
            </p>
          </div>

          <div className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <div className='space-y-6'>
              <div>
                <p className='text-sm uppercase tracking-[0.2em] text-neutral-500'>
                  Email
                </p>
                <a
                  href='mailto:sduracoska@gmail.com'
                  className='mt-2 block text-lg text-white transition hover:text-neutral-300'
                >
                  sduracoska@gmail.com
                </a>
              </div>

              <div>
                <p className='text-sm uppercase tracking-[0.2em] text-neutral-500'>
                  LinkedIn
                </p>
                <a
                  href='https://www.linkedin.com/in/stefanija-duracoska'
                  target='_blank'
                  rel='noreferrer'
                  className='mt-2 block text-lg text-white transition hover:text-neutral-300'
                >
                  linkedin.com/in/stefanija-duracoska
                </a>
              </div>

              <div>
                <p className='text-sm uppercase tracking-[0.2em] text-neutral-500'>
                  Phone
                </p>
                <a
                  href='tel:+38978810920'
                  className='mt-2 block text-lg text-white transition hover:text-neutral-300'
                >
                  +389 78 810 920
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
