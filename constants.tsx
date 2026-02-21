
import { NewsItem, TeamMember, Partner } from './types.ts';

export const COLORS = {
  primary: '#5a3ea6',
  secondary: '#9bb3da',
  textPrimary: '#6a3fa0',
};

export const NEWS_DATA: NewsItem[] = [
  { date: '23.01.2026', text: 'Our coach, Jofrey Ibrahim, recently completed a two-week football coaching course to earn a CAF Diploma D.' },
  { date: '12.12.2025', text: 'Tanzania Football Federation, TFF conducted a screening clinic for players aged between 11yrs and 16yrs here at Mbozi district.' },
  { date: '15.09.2025', text: 'Our Executive Secretary, Mr. Daddy Kunyanya completed a course in player welfare, contract management, and sports agency led by Dr. Cyprian Muro, strengthening leadership in sports management and athlete development.' },
  { date: '08.08.2025', text: 'A new steel goal has been installed at our field, symbolizing unity, progress, and our commitment to youth development. We urge the community to protect these facilities and report any vandalism.' },
  { date: '08.07.2025', text: 'YFC U11 lifted the trophy after winning the SMAGAYOCO Tournament held at Songwe Sunrise Secondary School, alongside a friendly match against Fire Academy from Ileje.' },
];

export const PARTNERS: Partner[] = [
  { name: 'SPECPLAY', imageUrl: '/site_images/homepage/partners_images/SPECPLAY.jpg' },
  { name: 'SOREFA', imageUrl: '/site_images/homepage/partners_images/SOREFA.jpg' },
  { name: 'NaCoNGO', imageUrl: '/site_images/homepage/partners_images/NaCoNGO.jpg' },
  { name: 'TFF', imageUrl: '/site_images/homepage/partners_images/TFF.jpg' },
  { name: 'SONGWE SUNRISE', imageUrl: '/site_images/homepage/partners_images/SSSS.jpg' },
  { name: 'ADP MBOZI', imageUrl: '/site_images/homepage/partners_images/ADP MBOZI.jpg' },
  { name: 'BRAC', imageUrl: '/site_images/homepage/partners_images/BRAC MAENDELEO.jpg' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Maria Ngairo',
    role: 'Chairperson',
    bio: 'Practicing lawyer with six years of experience. Advocate at the National Prosecutions Office of Tanzania (NPS), with extensive experience handling child abuse and criminal cases in the Songwe Region.',
    imageUrl: '/site_images/about us/management_team/Maria.jpg',
  },
  {
    name: 'Dady Kunyanja',
    role: 'Executive Secretary',
    bio: 'Founder and Executive Secretary of Yosso Sports Foundation. Qualified teacher with over ten years of experience in education and youth development. Trained in multi-sport and football coaching.',
    imageUrl: '/site_images/about us/management_team/Dady.jpg',
  },
  {
    name: 'Joseph Kayombo',
    role: 'Treasurer',
    bio: 'Qualified procurement and supply professional currently working at the GPSA Songwe Regional Office. Brings strong financial oversight and public sector experience.',
    imageUrl: '/site_images/about us/management_team/Joseph.jpg',
  },
  {
    name: 'David Yosso',
    role: 'Founding Sponsor',
    bio: 'Principal Owner of SPEC Play and professional in parks and recreation management. Former college football player and coach in the United States.',
    imageUrl: '/site_images/about us/management_team/David.jpg',
  },
    {
    name: 'Hance Ngailo',
    role: 'Project Manager',
    bio: 'Practicing Civil Engineer with three years of experience and a Bachelor’s degree in Civil Engineering from the University of Dar es Salaam. Experienced in delivering major infrastructure projects in Tanzania, including the Dar es Salaam Bus Rapid Transit Project.',
    imageUrl: '/site_images/about us/management_team/Hance.jpg',
  },
  {
    name: 'Jofrey Ibrahim',
    role: 'Head Coach',
    bio: 'Jofrey Ibrahim is a committed and trained football coach at Yosso Sports Foundation. He mentors young players, focusing on skill development, discipline, and teamwork. His work supports positive youth growth and strengthens community engagement through structured sport.',
    imageUrl: '/site_images/about us/management_team/Jofrey.jpg',
  },
];
