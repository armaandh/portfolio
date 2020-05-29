import React from 'react';
import { withSize } from 'react-sizeme'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { CheckCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

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
  UXdesignDrop,
  UIdesignDrop,
  PsychologyDrop,
  EngineeringDrop,
  MarketingDrop,
  EntrepreneurshipDrop,
  LeanStartupDrop,
  DesignThinkingDrop,
  BigFiveTraitsDrop,
} from '../components/commons/Skills';
import { 
  Box,
  ModelsContainer,
  CaseStudiesContainer,
  SkillsContainer,
  SeeMoreContainer,
  SkillsDropdown,
} from '../components/Boxes';

const Index = ({ size }) => {
  const isResponsive = size.width < 769
  const { t, i18n } = useTranslation()
  const UXdesignOver = () => <UXdesignDrop text={t("home.dropdown.ux.text")} list={t("home.dropdown.ux.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />
  const UIdesignOver = () => <UIdesignDrop text={t("home.dropdown.ui.text")} list={t("home.dropdown.ui.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />
  const PsychologyOver = () => <PsychologyDrop text={t("home.dropdown.psy.text")} list={t("home.dropdown.psy.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />
  const EngineeringOver = () => <EngineeringDrop text={t("home.dropdown.eng.text")} list={t("home.dropdown.eng.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />
  const MarketingOver = () => <MarketingDrop text={t("home.dropdown.market.text")} list={t("home.dropdown.market.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />
  const EntrepreneurshipOver = () => <EntrepreneurshipDrop text={t("home.dropdown.entre.text")} list={t("home.dropdown.entre.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />
  const LeanStartupOver = () => <LeanStartupDrop text={t("home.dropdown.lean.text")} list={t("home.dropdown.lean.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />
  const DesignThinkingOver= () => <DesignThinkingDrop text={t("home.dropdown.design.text")} list={t("home.dropdown.design.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />
  const BigFiveTraitsOver = () => <BigFiveTraitsDrop text={t("home.dropdown.big.text")} list={t("home.dropdown.big.list")} description={t("home.dropdown.description")} methods={t("home.dropdown.methods")} />

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
            <SkillsDropdown placement="bottom" content={UXdesignOver} trigger={'click'}>
              <div className="skill ux">
                <motion.div
                  className="icon"
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                  }}
                >
                  {!isResponsive && <UXdesign width="60" height="60" viewBox="0 0 60 60" />}
                  {isResponsive && <UXdesign width="33" height="33" viewBox="0 0 60 60" />}
                </motion.div>
                <p>{t('home.skills.ux')}</p>
              </div>
            </SkillsDropdown>
            <SkillsDropdown placement="bottom" content={PsychologyOver} trigger={'click'}>
              <div className="skill psy">
                <motion.div
                  className="icon"
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                  }}
                >
                  {!isResponsive && <Psychology width="60" height="57" viewBox="0 0 60 57" />}
                  {isResponsive && <Psychology width="32" height="31" viewBox="0 0 60 57" />}
                </motion.div>
                <p>{t('home.skills.psy')}</p>
              </div>
            </SkillsDropdown>
            <SkillsDropdown placement="bottom" content={EngineeringOver} trigger={'click'}>
              <div className="skill eng">
                <motion.div
                  className="icon"
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                  }}
                >
                  {!isResponsive && <Engineering width="60" height="60" viewBox="0 0 60 60" />}
                  {isResponsive && <Engineering width="33" height="33" viewBox="0 0 60 60" />}
                </motion.div>
                <p>{t('home.skills.eng')}</p>
              </div>
            </SkillsDropdown>
            <SkillsDropdown placement="bottom" content={UIdesignOver} trigger={'click'}>
              <div className="skill ui">
                <motion.div
                  className="icon"
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                  }}
                >
                  {!isResponsive && <UIdesign width="60" height="60" viewBox="0 0 60 60" />}
                  {isResponsive && <UIdesign width="33" height="33" viewBox="0 0 60 60" />}
                </motion.div>
                <p>{t('home.skills.ui')}</p>
              </div>
            </SkillsDropdown>
            <SkillsDropdown placement="bottom" content={MarketingOver} trigger={'click'}>
              <div className="skill market">
                <motion.div
                  className="icon"
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                  }}
                >
                  {!isResponsive && <Marketing width="60" height="60" viewBox="0 0 60 60" />}
                  {isResponsive && <Marketing width="33" height="33" viewBox="0 0 60 60" />}
                </motion.div>
                <p>{t('home.skills.market')}</p>
              </div>
            </SkillsDropdown>
            <SkillsDropdown placement="bottom" content={EntrepreneurshipOver} trigger={'click'}>
              <div className="skill entre">
                <motion.div
                  className="icon"
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                  }}
                >
                  {!isResponsive && <Entrepreneurship width="39" height="60" viewBox="0 0 39 60" />}
                  {isResponsive && <Entrepreneurship width="21" height="33" viewBox="0 0 39 60" />}
                </motion.div>
                <p>{t('home.skills.entre')}</p>
              </div>
            </SkillsDropdown>
          </SkillsContainer>
        </Box>
        <Box>
          <h2>{t('home.favoritemodels.title')}</h2>
          <ModelsContainer>
            <SkillsDropdown placement="bottom" content={LeanStartupOver} trigger={'click'}>
              <motion.div
                className="model"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                }}
              >
                {!isResponsive && <DesignThinking  width="85" height="85" viewBox="0 0 104 104" />}
                {isResponsive && <DesignThinking  width="38" height="39" viewBox="0 0 104 104" />}
                <p>{t('home.favoritemodels.lean')}</p>
              </motion.div>
            </SkillsDropdown>
            <SkillsDropdown placement="bottom" content={DesignThinkingOver} trigger={'click'}>
              <motion.div 
                className="model"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                }}
              >
                {!isResponsive && <SystemThinking  width="85" height="85" viewBox="0 0 103 102" />}
                {isResponsive && <SystemThinking  width="38" height="39" viewBox="0 0 103 102" />}
                <p>{t('home.favoritemodels.design')}</p>
              </motion.div>
            </SkillsDropdown>
            <SkillsDropdown placement="bottom" content={BigFiveTraitsOver} trigger={'click'}>
              <motion.div 
                className="model"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 1, type: "spring", stiffness: 400, damping: 20, },
                }}
              >
                {!isResponsive && <FirstPrinciples  width="85" height="85" viewBox="0 0 104 104" />}
                {isResponsive && <FirstPrinciples  width="38" height="39" viewBox="0 0 104 104" />}
                <p>{t('home.favoritemodels.bayes')}</p>
              </motion.div>

            </SkillsDropdown>
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