import { experience } from '../utils';

export const Experience = () => {
  return (
    <section className='border-t border-white/10 px-6 py-24'>
      <div className='mx-auto max-w-5xl'>
        <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
          Experience
        </p>

        <h2 className='mb-12 text-3xl font-semibold tracking-tight sm:text-4xl'>
          Where I’ve worked
        </h2>

        <div className='space-y-8'>
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className='rounded-3xl border border-white/10 bg-white/5 p-6'
            >
              <div className='flex flex-col gap-3 md:flex-row md:items-start md:justify-between'>
                <div>
                  <h3 className='text-xl font-semibold text-white'>
                    {item.role} — {item.company}
                  </h3>
                  <p className='mt-2 text-sm text-neutral-400'>
                    {item.location}
                  </p>
                </div>

                <p className='text-sm text-neutral-400'>{item.period}</p>
              </div>

              <ul className='mt-6 space-y-3 text-sm leading-7 text-neutral-300 sm:text-base'>
                {item.points.map((point) => (
                  <li key={point} className='flex gap-3'>
                    <span className='mt-2 h-1.5 w-1.5 rounded-full bg-neutral-400' />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
