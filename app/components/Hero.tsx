export default function Hero() {
  return (
    <section className='mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20'>
      <div className='max-w-3xl'>
        <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
          Portfolio
        </p>

        <h1 className='text-5xl font-bold tracking-tight sm:text-6xl'>
          Hi, I&apos;m Stefanija Duracoska
        </h1>

        <p className='mt-6 text-lg leading-8 text-neutral-300 sm:text-xl'>
          Full-Stack Software Engineer with 2+ years of experience building
          modern web applications using TypeScript, React and Node.js.
        </p>

        <p className='mt-4 text-lg leading-8 text-neutral-400'>
          I focus on creating scalable backend services, clean frontend
          interfaces and maintainable code while collaborating in agile
          development teams.
        </p>

        <div className='mt-10 flex flex-wrap gap-4'>
          <a
            href='#projects'
            className='rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90'
          >
            View Projects
          </a>

          <a
            href='#contact'
            className='rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10'
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
