import React from 'react';
import { withSize } from 'react-sizeme'
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
  SkillsContainer,
  Divider,
} from '../components/Boxes';
import { AnimatedLayout } from '../components/commons/Animated';
import Grid from '../components/commons/Grid'

const Practice = ({ size }) => {
  const isResponsive = size.width < 1024
  return (
    <Layout 
      title="Experiments - JC Pratt-Delzenne"
      h1="Experiments"
      text="I have a love of learning, growing my skillset and practicing regularly. Here are some of my experiments."
    >
      <AnimatedLayout className="experiments">
        <Box>
          <Grid />
        </Box>
        <Divider blue />
        <Box>
          <CaseStudiesContainer>
            <Link href="/case-study-saia" scroll={false}>
              <a className="case">
                <div className="img saia"></div>
                <div className="info">
                  <p>Saia</p>
                  <div className="see-more purple">
                    {!isResponsive && <ArrowRight width="11" height="19" viewBox="0 0 11 19" />}
                    {isResponsive && <ArrowRight width="7" height="12" viewBox="0 0 11 19" />}
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/case-study-persona" scroll={false}>
              <a className="case">
                <div className="img persona"></div>
                <div className="info">
                  <p>Persona</p>
                  <div className="see-more">
                    {!isResponsive && <ArrowRight width="11" height="19" viewBox="0 0 11 19" />}
                    {isResponsive && <ArrowRight width="7" height="12" viewBox="0 0 11 19" />}
                  </div>
                </div>
              </a>
            </Link>
          </CaseStudiesContainer>
        </Box>
      </AnimatedLayout>
    </Layout>
  )
}

export default withSize()(Practice)