import { Skill } from '@/types/skill';
import { CodeIcon, DatabaseIcon, AwardIcon, LanguagesIcon } from 'lucide-react';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Languages & Frameworks',
    Icon: CodeIcon,
    description: `JavaScript, TypeScript, HTML, SCSS, React.js, Next.js, NodeJS, Electron.js`
  },
  {
    name: 'Tools & Technologies',
    Icon: DatabaseIcon,
    description: `PostgreSQL, Hasura GraphQL, Shadcn components, BEM methodology`
  },
  {
    name: 'Certifications',
    Icon: AwardIcon,
    description: `Google Technical Support Fundamentals (2023)`
  },
  {
    name: 'Languages',
    Icon: LanguagesIcon,
    description: `English, Uzbek (Native)`
  }
];

export { trimLen, skills };
