import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from './components';

export default function Home() {
  return (
    <main className='min-h-screen bg-neutral-950 text-white'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
