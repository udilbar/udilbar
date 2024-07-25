import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    '3+ years of experience in JavaScript, React.js, and Next.js. Passionate about coding, sharing knowledge, and building impactful projects..'
};

export { hero };
