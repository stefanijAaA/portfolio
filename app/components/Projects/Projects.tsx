import { projects } from '../../utils/projects';
import { ProjectCard } from './components';

export const Projects = () => {
  return (
    <section id='projects' className='border-t border-white/10 py-20 2xl:py-24'>
      <div className='mx-auto w-full max-w-6xl 2xl:max-w-410 px-7 md:px-10 2xl:px-16'>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between 2xl:mb-12 2xl:gap-6'>
          <div className='max-w-xl 2xl:max-w-2xl'>
            <p className='mb-3 text-xs uppercase tracking-[0.28em] text-neutral-400 2xl:mb-4 2xl:text-sm 2xl:tracking-[0.3em]'>
              Projects
            </p>

            <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-4xl 2xl:text-5xl'>
              Things I&apos;ve worked on
            </h2>

            <p className='mt-4 text-sm leading-6 text-neutral-400 2xl:text-lg 2xl:leading-8'>
              A curated selection of products and systems I&apos;ve contributed
              to across frontend, full-stack and platform-focused work.
            </p>
          </div>

          <p className='text-sm text-neutral-500 md:pb-1 2xl:pb-2 2xl:text-base'>
            Scroll to explore
          </p>
        </div>

        <div className='overflow-x-auto overflow-y-visible py-3 2xl:py-4 [scrollbar-width:none]'>
          <div className='flex w-max snap-x snap-mandatory gap-4 2xl:gap-6'>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
