import { skills } from '../utils';

export default function Skills() {
  return (
    <section className='border-t border-white/10 px-6 py-24'>
      <div className='mx-auto max-w-5xl'>
        <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
          Skills
        </p>

        <h2 className='mb-12 text-3xl font-semibold tracking-tight sm:text-4xl'>
          Tech stack I work with
        </h2>

        <div className='flex flex-wrap gap-4'>
          {skills.map((skill) => (
            <div
              key={skill}
              className='rounded-full border border-white/20 px-5 py-2 text-sm text-neutral-200'
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
