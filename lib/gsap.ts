'use client';
import { gsap as _gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    _gsap.registerPlugin(ScrollTrigger);
}

// Re-export gsap through an alias so the bundler sees ScrollTrigger
// as a dependency of the gsap export, preventing tree-shaking.
const gsap = _gsap;

export { gsap, ScrollTrigger };
