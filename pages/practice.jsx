import React from 'react';
import Layout from '../components/commons/Layout';

import SystemThinking from '../public/icons/system-thinking.svg';
import FirstPrinciples from '../public/icons/first-principles.svg';
import DesignThinking from '../public/icons/design-thinking.svg';
import UXdesign from '../public/icons/ux-design.svg';
import UIdesign from '../public/icons/ui-design.svg';
import Psychology from '../public/icons/psychology.svg';
import Marketing from '../public/icons/marketing.svg';
import Engineering from '../public/icons/engineering.svg';
import Entrepreneurship from '../public/icons/entrepreneurship.svg';

import ArrowRight from '../public/icons/arrow-right.svg';

import Link from 'next/link';
import { 
  Box,
  ModelsContainer,
  CaseStudiesContainer,
  SkillsContainer
} from '../components/Boxes';
import Grid from '../components/commons/Grid'

const Practice = () => {
  return (
    <Layout 
      title="Experimentations - JC Pratt-Delzenne"
      h1="Experimentations"
      text="I have a love of learning and growing my skillset and practicing regularly. Here are some of my experiments."
    >
      <div className="experiments">
        <Box>
          <Grid />
        </Box>
      </div>
    </Layout>
  )
}

export default Practice