import React from 'react';

export enum Section {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SKILLS = 'SKILLS',
  EXPERIENCE = 'EXPERIENCE',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT'
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  type: 'work' | 'education';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}