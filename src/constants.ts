/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, TeamMember, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'immigration',
    title: 'Immigration Law',
    description: 'Strategic guidance for corporate transfers, high-skilled visas, and complex citizenship matters.',
    icon: 'Globe',
  },
  {
    id: 'civil',
    title: 'Civil Litigation',
    description: 'Aggressive and precise representation in high-stakes commercial disputes and private civil actions.',
    icon: 'Gavel',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop',
    large: true,
  },
  {
    id: 'corporate',
    title: 'Corporate Law',
    description: 'Comprehensive support for business formations, mergers, acquisitions, and compliance.',
    icon: 'Briefcase',
  },
  {
    id: 'personal',
    title: 'Personal Legal Counsel',
    description: 'Tailored advisory for estate planning and private family matters, ensuring your legacy is protected.',
    icon: 'Shield',
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Advocate Rajan Jain',
    role: 'Founding Partner & Senior Counsel',
    quote: '"True legal service is not just about victory, but about the preservation of integrity through the storm."',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop',
  },
  {
    name: 'Elena Sterling, Esq.',
    role: 'Partner, Corporate Strategy',
    quote: '"Precision in structure creates the freedom for growth. We build the frameworks of your success."',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Marcus Sterling',
    title: 'CEO, Sterling Ventures Ltd.',
    content: 'The level of precision and strategic depth Jain Law Corporation brought to our corporate acquisition was unparalleled. They didn\'t just handle the legalities; they protected our long-term interests.',
    rating: 5,
  },
  {
    name: 'Dr. Robert Chen',
    title: 'Private Client',
    content: 'Precision and authority. Jain Law handled our estate planning with a level of detail that gave us complete peace of mind.',
    rating: 5,
  },
  {
    name: 'Eleanor Vance',
    title: 'Founder, TechVision',
    content: 'The strategic approach they took for our intellectual property protection was nothing short of brilliant.',
    rating: 5,
  }
];
