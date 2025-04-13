import React from 'react';
import Hero from './hero';
import Testimonials from './testimonials';
import PricingPlans from './pricing';
import { Theme2Layout } from './theme2-layout';

export const Theme2 = () => {
  return (
    <Theme2Layout>
      <Hero />
      <PricingPlans />
      <Testimonials />
      
    </Theme2Layout>
  );
};