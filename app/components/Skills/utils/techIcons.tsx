import { JSX } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiTrpc,
  SiNodedotjs,
  SiNestjs,
  SiLoopback,
  SiPostgresql,
  SiTypeorm,
  SiGit,
  SiGitlab,
  SiNpm,
  SiStorybook,
  SiZod,
} from 'react-icons/si';

import { BsLightningCharge } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb';

export const techIcons: Record<string, JSX.Element> = {
  React: <SiReact />,
  'Next.js': <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  'Tailwind CSS': <SiTailwindcss />,
  'Material UI': <SiMui />,
  'TanStack Query': <BsLightningCharge />,
  'tRPC Client': <SiTrpc />,
  'Node.js': <SiNodedotjs />,
  NestJS: <SiNestjs />,
  'LoopBack 4': <SiLoopback />,
  'REST APIs': <TbApi />,
  Zod: <SiZod />,
  PostgreSQL: <SiPostgresql />,
  TypeORM: <SiTypeorm />,
  Git: <SiGit />,
  GitLab: <SiGitlab />,
  NPM: <SiNpm />,
  Storybook: <SiStorybook />,
};
