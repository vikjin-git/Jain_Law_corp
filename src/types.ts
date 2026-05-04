/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  large?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Testimonial {
  name: string;
  title: string;
  content: string;
  rating: number;
}
