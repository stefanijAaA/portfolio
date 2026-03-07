export default function About() {
  return (
    <section className='border-t border-white/10 px-6 py-24'>
      <div className='mx-auto grid max-w-5xl gap-10 md:grid-cols-2'>
        <div>
          <p className='mb-4 text-sm uppercase tracking-[0.3em] text-neutral-400'>
            About
          </p>
          <h2 className='text-3xl font-semibold tracking-tight sm:text-4xl'>
            A little bit about me
          </h2>
        </div>

        <div className='space-y-6 text-base leading-8 text-neutral-300 sm:text-lg'>
          <p>
            I&apos;m a Full-Stack Software Engineer currently working at Banzae
            in Skopje, where I build modern web applications using TypeScript,
            React, Next.js and Node.js.
          </p>

          <p>
            My work includes developing scalable backend APIs with NestJS and
            LoopBack, designing responsive user interfaces with Tailwind and
            Material UI, and integrating frontend applications with production
            backend systems.
          </p>

          <p>
            I enjoy building reliable, maintainable systems and contributing to
            products that solve real business problems while delivering great
            user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
