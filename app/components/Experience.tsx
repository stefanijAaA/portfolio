import { experience } from '../utils/experience';

export const Experience = () => {
  return (
    <section
      id='experience'
      className='scroll-mt-20 border-t border-white/10 py-10 sm:py-18 md:py-20 2xl:scroll-mt-24 2xl:py-24'
    >
      <div className='mx-auto w-full max-w-6xl 2xl:max-w-410 px-5 sm:px-6 md:px-10 2xl:px-16'>
        <div className='mb-8 max-w-3xl sm:mb-9 md:mb-10 2xl:mb-14 2xl:max-w-4xl'>
          <p className='mb-3 text-xs uppercase tracking-[0.28em] text-neutral-400 2xl:mb-4 2xl:text-sm 2xl:tracking-[0.3em]'>
            Experience
          </p>

          <h2 className='text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl 2xl:text-5xl'>
            Work Experience
          </h2>
        </div>

        {experience.map((item) => (
          <div
            key={item.company}
            className='grid grid-cols-[20px_1fr] gap-3 sm:grid-cols-[22px_1fr] sm:gap-5 md:grid-cols-[28px_1fr] md:gap-8 2xl:grid-cols-[32px_1fr] 2xl:gap-10'
          >
            <div className='flex flex-col items-center'>
              <div className='mt-1 h-3 w-3 rounded-full bg-white sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 2xl:mt-2 2xl:h-5 2xl:w-5' />
              <div className='mt-2 h-full w-px bg-white/15' />
            </div>

            <article className='pb-4'>
              <h3 className='text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-3xl 2xl:text-4xl'>
                {item.role}
              </h3>

              <div className='mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-neutral-400 sm:text-base md:mt-2 md:gap-x-3 md:gap-y-1.5 2xl:mt-3 2xl:gap-x-4 2xl:gap-y-2 2xl:text-xl'>
                <span>{item.company}</span>
                <span className='hidden text-neutral-600 sm:inline'>•</span>
                <span>{item.period}</span>
              </div>

              <p className='mt-1.5 text-xs text-neutral-500 sm:text-sm md:mt-2 2xl:mt-3 2xl:text-lg'>
                {item.location}
              </p>

              <ul className='mt-5 space-y-3 text-xs leading-6 text-neutral-300 sm:text-sm md:mt-6 md:space-y-4 2xl:mt-8 2xl:space-y-5 2xl:text-xl 2xl:leading-9'>
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className='flex gap-2.5 sm:gap-3 2xl:gap-4'
                  >
                    <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300 2xl:mt-3 2xl:h-2 2xl:w-2' />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};
