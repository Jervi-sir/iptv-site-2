'use client';

import React from 'react';
import Hero from './hero';
import Testimonials from './testimonials';
import PricingPlans from './pricing';
import { Theme2Layout } from './theme2-layout';
import { FreeTrialSection } from './free-trial';
import { WhyChooseUsSection } from './why-choose-us';
import { AnimatedSection } from './animated-section';

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
        <PricingPlans doRedirect={true} />
      </AnimatedSection>
      {/* Testimonials (3s animation) */}
      <AnimatedSection preset="blur-slide" duration={3}>
        <Testimonials />
      </AnimatedSection>
    </Theme2Layout>
  );
};

