import { experience } from '../utils/experience';

export const Experience = () => {
  return (
    <section
      id='experience'
      className='border-t border-white/10 py-20 2xl:py-24'
    >
      <div className='mx-auto w-full max-w-6xl 2xl:max-w-410 px-7 md:px-10 2xl:px-16'>
        <div className='mb-10 max-w-3xl 2xl:mb-14 2xl:max-w-4xl'>
          <p className='mb-3 text-xs uppercase tracking-[0.28em] text-neutral-400 2xl:mb-4 2xl:text-sm 2xl:tracking-[0.3em]'>
            Experience
          </p>

          <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl 2xl:text-5xl'>
            Work Experience
          </h2>
        </div>

        <div className='grid grid-cols-[24px_1fr] gap-4 md:grid-cols-[28px_1fr] md:gap-8 2xl:grid-cols-[32px_1fr] 2xl:gap-10'>
          <div className='flex flex-col items-center'>
            <div className='mt-1.5 h-3.5 w-3.5 rounded-full bg-white md:h-4 md:w-4 2xl:mt-2 2xl:h-5 2xl:w-5' />
            <div className='mt-2 h-full w-px bg-white/15' />
          </div>

          <article className='pb-2'>
            <h3 className='text-2xl font-semibold tracking-tight text-white sm:text-3xl 2xl:text-4xl'>
              {experience.role}
            </h3>

            <div className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-base text-neutral-400 2xl:mt-3 2xl:gap-x-4 2xl:gap-y-2 2xl:text-xl'>
              <span>{experience.company}</span>
              <span className='hidden text-neutral-600 sm:inline'>•</span>
              <span>{experience.period}</span>
            </div>

            <p className='mt-2 text-sm text-neutral-500 2xl:mt-3 2xl:text-lg'>
              {experience.location}
            </p>

            <ul className='mt-6 space-y-4 text-sm leading-6 text-neutral-300 2xl:mt-8 2xl:space-y-5 2xl:text-xl 2xl:leading-9'>
              {experience.highlights.map((item) => (
                <li key={item} className='flex gap-3 2xl:gap-4'>
                  <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300 2xl:mt-3 2xl:h-2 2xl:w-2' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
