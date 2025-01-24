import Hero from '@/components/Hero';
import HowWork from '@/components/howWork';
import IndustryExpertise from '@/components/industryExpertise';
import TechnologyUse from '@/components/technologyUse';
import WhyPartner from '@/components/whyPartner';
import React from 'react';

const Page = () => {
    return (
        <div className=''>
            <Hero></Hero>
            <HowWork></HowWork>
            <TechnologyUse></TechnologyUse>
            <IndustryExpertise></IndustryExpertise>
            <WhyPartner></WhyPartner>
        </div>
    );
};

export default Page;