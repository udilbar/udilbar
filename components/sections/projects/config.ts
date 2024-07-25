import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Personal Portfolio Website',
    slug: 'portfolio',
    description:
      'A personal portfolio to showcase coding projects, resume, and skills in a beautifully designed format.',
    thumbnail: '/images/projects/portfolio/cover.jpg'
  },
  {
    name: 'Dizipro',
    slug: 'dizipro',
    description:
      'A social app for food lovers where users can post, share, and discover recipes from around the world.',
    thumbnail: '/images/projects/dizipro/cover.jpg'
  },
  {
    name: 'LexmeAI',
    slug: 'lexmeai',
    description:
      'A platform where students can form virtual study groups, schedule sessions, and share resources in real-time.',
    thumbnail: '/images/projects/study_group/cover.jpg'
  },
  {
    name: 'Imperium POS',
    slug: 'imperium_pos',
    description:
      'A mobile app that helps users track their fitness activities, set goals, and monitor progress with motivational tools.',
    thumbnail: '/images/projects/fitness_tracker/cover.jpg'
  },
  {
    name: 'Telecom Chat',
    slug: 'telecom_chat',
    description:
      'An e-commerce platform dedicated to eco-friendly products where users can buy, sell, and learn about sustainable living.',
    thumbnail: '/images/projects/eco_marketplace/cover.jpg'
  },
  {
    name: 'Job Posting Platform',
    slug: 'job_postings',
    description:
      'A website offering interactive coding tutorials and challenges to help users learn programming languages through practice.',
    thumbnail: '/images/projects/coding_tutorials/cover.jpg'
  }
];

export { projects };
