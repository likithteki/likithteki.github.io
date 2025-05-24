import { Hero } from '@/components/home/hero';
import { Achievements } from '@/components/home/achievements';
import { Projects } from '@/components/home/projects';
import { Services } from '@/components/home/services';
import { Articles } from '@/components/home/articles';
import { Contact } from '@/components/home/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <Projects />
      <Services />
      <Articles />
      <Contact />
    </>
  );
}