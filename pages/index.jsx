import React from 'react';
import { withSize } from 'react-sizeme'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import Layout from '../components/commons/Layout';
import { AnimatedLayout } from '../components/commons/Animated';

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

const Index = ({ size }) => {
  const isResponsive = size.width < 769
  const { t, i18n } = useTranslation()
  return (
    <Layout home title={t('home.header.meta-title')}>
      <AnimatedLayout className="home">
        <Box>
          <h2>{t('home.casestudy.title')}</h2>
          <CaseStudiesContainer>
            <Link href="/case-study-persona" scroll={false}>
              <motion.a
                className="case"
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                }}
              >
                <div className="img persona"></div>
                <div className="info">
                  <p>Persona</p>
                  <div className="see-more">
                    {!isResponsive && <ArrowRight width="11" height="19" viewBox="0 0 11 19" />}
                    {isResponsive && <ArrowRight width="7" height="12" viewBox="0 0 11 19" />}
                  </div>
                </div>
              </motion.a>
            </Link>
            <Link href="/case-study-saia" scroll={false}>
              <motion.a
                className="case"
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                }}
              >
                <div className="img saia"></div>
                <div className="info">
                  <p>Saia</p>
                  <div className="see-more purple">
                    {!isResponsive && <ArrowRight width="11" height="19" viewBox="0 0 11 19" />}
                    {isResponsive && <ArrowRight width="7" height="12" viewBox="0 0 11 19" />}
                  </div>
                </div>
              </motion.a>
            </Link>
          </CaseStudiesContainer>
        </Box>
        <Box>
          <h2>{t('home.skills.title')}</h2>
          <SkillsContainer>
            <div className="skill ux">
              <div className="icon">
                {!isResponsive && <UXdesign width="60" height="60" viewBox="0 0 60 60" />}
                {isResponsive && <UXdesign width="33" height="33" viewBox="0 0 60 60" />}
              </div>
              <p>{t('home.skills.ux')}</p>
            </div>
            <div className="skill psy">
              <div className="icon">
                {!isResponsive && <Psychology width="60" height="57" viewBox="0 0 60 57" />}
                {isResponsive && <Psychology width="32" height="31" viewBox="0 0 60 57" />}
              </div>
              <p>{t('home.skills.psy')}</p>
            </div>
            <div className="skill eng">
              <div className="icon">
                {!isResponsive && <Engineering width="60" height="60" viewBox="0 0 60 60" />}
                {isResponsive && <Engineering width="33" height="33" viewBox="0 0 60 60" />}
              </div>
              <p>{t('home.skills.eng')}</p>
            </div>
            <div className="skill ui">
              <div className="icon">
                {!isResponsive && <UIdesign width="60" height="60" viewBox="0 0 60 60" />}
                {isResponsive && <UIdesign width="33" height="33" viewBox="0 0 60 60" />}
              </div>
              <p>{t('home.skills.ui')}</p>
            </div>
            <div className="skill market">
              <div className="icon">
                {!isResponsive && <Marketing width="60" height="60" viewBox="0 0 60 60" />}
                {isResponsive && <Marketing width="33" height="33" viewBox="0 0 60 60" />}
              </div>
              <p>{t('home.skills.market')}</p>
            </div>
            <div className="skill entre">
              <div className="icon">
                {!isResponsive && <Entrepreneurship width="39" height="60" viewBox="0 0 39 60" />}
                {isResponsive && <Entrepreneurship width="21" height="33" viewBox="0 0 39 60" />}
              </div>
              <p>{t('home.skills.entre')}</p>
            </div>
          </SkillsContainer>
        </Box>
        <Box>
          <h2>{t('home.favoritemodels.title')}</h2>
          <ModelsContainer>
            <div className="model">
              {!isResponsive && <DesignThinking  width="85" height="85" viewBox="0 0 104 104" />}
              {isResponsive && <DesignThinking  width="38" height="39" viewBox="0 0 104 104" />}
              <p>{t('home.favoritemodels.lean')}</p>
            </div>
            <div className="model">
              {!isResponsive && <SystemThinking  width="85" height="85" viewBox="0 0 103 102" />}
              {isResponsive && <SystemThinking  width="38" height="39" viewBox="0 0 103 102" />}
              <p>{t('home.favoritemodels.design')}</p>
            </div>
            <div className="model">
              {!isResponsive && <FirstPrinciples  width="85" height="85" viewBox="0 0 104 104" />}
              {isResponsive && <FirstPrinciples  width="38" height="39" viewBox="0 0 104 104" />}
              <p>{t('home.favoritemodels.bayes')}</p>
            </div>
          </ModelsContainer>
        </Box>
        <Box>
          <h2>{t('home.practice.title')}</h2>
          <CaseStudiesContainer full>
            <Link href="/practice" scroll={false}>
              <motion.a
                className="case"
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                }}
              >
                <div className="img practice"></div>
                <div className="info">
                  <p>{t('home.practice.exp')}</p>
                  <div className="see-more blue">
                    {!isResponsive && <ArrowRight width="11" height="19" viewBox="0 0 11 19" />}
                    {isResponsive && <ArrowRight width="7" height="12" viewBox="0 0 11 19" />}
                  </div>
                </div>
              </motion.a>
            </Link>
          </CaseStudiesContainer>
        </Box>
      </AnimatedLayout>
    </Layout>
  )
}

export default withSize()(Index)