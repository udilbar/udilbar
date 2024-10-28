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
      'An online platform for custom, high-quality 3D modeling, offering a range of accurate and affordable models crafted by professional designers.',
    thumbnail: '/images/projects/dizipro/cover.jpg'
  },
  {
    name: 'LexmeAI',
    slug: 'lexme_ai',
    description:
      'An AI-driven chat application designed to provide users with reliable legal insights based on the Laws of the Republic of Uzbekistan and the Uzbek Constitution.',
    thumbnail: '/images/projects/lexme_ai/cover.jpg'
  },
  {
    name: 'Imperium POS Cashier Dashboard',
    slug: 'imperium_pos',
    description:
      'A streamlined app within the Imperium POS system, enabling cashiers to manage inventory, process sales, and generate receipts in real time.',
    thumbnail: '/images/projects/imperium_pos/cover.jpg'
  },
  {
    name: 'Telecomchat',
    slug: 'telecomchat',
    description:
      'A secure, adaptive web app developed to enable private, Telegram-like communication for 17,000+ employees.',
    thumbnail: '/images/projects/telecomchat/cover.jpg'
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
