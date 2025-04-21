'use client';

import React from 'react';
import { Theme2Layout } from './theme2-layout';
import { FreeTrialSection } from './free-trial';
import { WhyChooseUsSection } from './why-choose-us';
import { AnimatedSection } from './animated-section';
import { Hero } from './hero';
import { PricingPlans } from './pricing';
import { Testimonials } from './testimonials';

export const Theme2 = () => {
  return (
    <Theme2Layout>
      {/* Hero (1.5s animation) */}
      <AnimatedSection preset="blur-slide" duration={1}>
        <Hero />
      </AnimatedSection>
      {/* Why Us (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <WhyChooseUsSection />
      </AnimatedSection>
      {/* Free Trial (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <FreeTrialSection />
      </AnimatedSection>
      {/* Pricing (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <PricingPlans />
      </AnimatedSection>
      {/* Testimonials (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <Testimonials />
      </AnimatedSection>
    </Theme2Layout>
  );
};

