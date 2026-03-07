import { Hero, About, Skills, Projects } from './components';
import { Experience } from './components/Experience';

export default function Home() {
  return (
    <main className='min-h-screen bg-neutral-950 text-white'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}
