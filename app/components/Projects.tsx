import { projects } from '../utils/projects';

export const Projects = () => {
  return (
    <section id='projects' className='border-t border-white/10 px-6 py-24'>
      <div className='mx-auto max-w-5xl'>
        <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
          Projects
        </p>

        <h2 className='mb-12 text-3xl font-semibold tracking-tight sm:text-4xl'>
          Selected work
        </h2>

        <div className='grid gap-6 md:grid-cols-2'>
          {projects.map((project) => (
            <article
              key={project.title}
              className='rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/[0.07]'
            >
              <h3 className='text-xl font-semibold text-white'>
                {project.title}
              </h3>

              <p className='mt-4 text-sm leading-7 text-neutral-300'>
                {project.description}
              </p>

              <p className='mt-3 text-sm leading-7 text-neutral-400'>
                {project.details}
              </p>

              <div className='mt-6 flex flex-wrap gap-2'>
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
