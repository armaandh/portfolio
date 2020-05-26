import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/commons/Layout';
import Link from 'next/link';
import { withSize } from 'react-sizeme'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import ArrowRight from '../public/icons/arrow-right.svg';
import Problems from '../public/icons/problems-blue.svg';
import Goals from '../public/icons/goals-blue.svg';
import UXMetrics from '../public/icons/ux-metrics-blue.svg';
import BigArrowRight from '../public/icons/big-arrow-right.svg';
import Quote from '../public/icons/quote.svg';

import { 
    Box,
    SummaryContainer,
    StudyItemContainer,
    CaseStudiesContainer,
    ProductImageBox,
    Prototype,
    Divider,
} from '../components/Boxes';
import { AnimatedLayout, AnimatedButton } from '../components/commons/Animated';
import { StickyNav } from '../components/commons/StickyNav';
import Image from '../components/commons/Image';
import { 
  Button,
  Progress,
} from '../components/commons/Feedback';

const CaseStudyPersona = ({ size }) => {
  const router = useRouter()
  const { t, i18n } = useTranslation()
  const isResponsive = size.width < 1024
  const isSmallComputer = size.width < 1120
  const fullProcess = router.query?.show

  const showFullProcess = () => {
    router.push({
      pathname: '/case-study-persona',
      query: { show: 'fullprocess' },
    })
  }

  return (
    <Layout title={t('persona.header.meta-title')} caseStudy="persona">
      <AnimatedLayout className="case-study-persona">
        <Box>
          <h2>{t('persona.summary.title')}</h2>
          <SummaryContainer>
            <div className="model">
              <Problems width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">{t('persona.summary.problems.title')}</span>
              <ul>
                  <li>{t('persona.summary.problems.phrase1')}</li>
                  <li>{t('persona.summary.problems.phrase2')}</li>
                  <li>{t('persona.summary.problems.phrase3')}</li>
                  <li>{t('persona.summary.problems.phrase4')}</li>
              </ul>
            </div>
            <div className="model">
              <Goals width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">{t('persona.summary.goals.title')}</span>
              <ul>
                  <li>{t('persona.summary.goals.phrase1')}</li>
                  <li>{t('persona.summary.goals.phrase2')}</li>
                  <li>{t('persona.summary.goals.phrase3')}</li>
                  <li>{t('persona.summary.goals.phrase4')}</li>
              </ul>
            </div>
            <div className="model">
              <UXMetrics width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">{t('persona.summary.metrics.title')}</span>
              <ul>
                  <li dangerouslySetInnerHTML={{ __html:t('persona.summary.metrics.phrase1') }}></li>
                  <li dangerouslySetInnerHTML={{ __html:t('persona.summary.metrics.phrase2') }}></li>
                  <li dangerouslySetInnerHTML={{ __html:t('persona.summary.metrics.phrase3') }}></li>
                  <li dangerouslySetInnerHTML={{ __html:t('persona.summary.metrics.phrase4') }}></li>
              </ul>
            </div>
          </SummaryContainer>
        </Box>
        <Box>
          <h2>{t('persona.uxprocess.title')}</h2>
          <StudyItemContainer>
            <p className="ux-process">{t('persona.uxprocess.description')}</p>
              {!isResponsive && <Image src="../persona/ux-process.png" width="359px"mb="85px" />}
              {isResponsive && <Image src="../persona/ux-process.png" />}
          </StudyItemContainer>
        </Box>
        <ProductImageBox>
          <div className="block">
            <div className="section page-1 persona">
              {!isResponsive && !isSmallComputer && <Image productImage src="../persona/product-image-1.png" width="378px" />}
              {(isResponsive || isSmallComputer)  && <Image productImage src="../persona/product-image-1.png" />}
            </div>
            <div className="section">
              <div className="container page-2 persona">
                {!isResponsive && !isSmallComputer && <Image productImage src="../persona/product-image-2.png" width="616px"/>}
                {(isResponsive || isSmallComputer)  && <Image productImage src="../persona/product-image-2.png" />}
              </div>
              <div className="container page-3 persona">
                {!isResponsive && !isSmallComputer && <Image productImage className="vertical-center" src="../persona/product-image-3.png" width="616px" />}
                {(isResponsive || isSmallComputer)  && <Image productImage className="vertical-center" src="../persona/product-image-3.png" />}
              </div>
            </div>
          </div>
          <div className="block page-4 persona">
            {!isResponsive && !isSmallComputer && <Image productImage src="../persona/product-image-4.png" width="1024px" />}
            {(isResponsive || isSmallComputer)  && <Image productImage src="../persona/product-image-4.png" />}
          </div>
        </ProductImageBox>
        <AnimatedButton blue fullProcess={fullProcess} onClick={showFullProcess} />
        {fullProcess &&
          <>
            <StickyNav blue threshold={3410} responsiveThreshold={5005} mobileThreshold={3417} items={t('persona.navigation')} />
            <Box id="problem" className="element">
              <h2>{t('persona.problem.title')}</h2>
              <StudyItemContainer>
                <p className="text solo">
                  {t('persona.problem.description')}
                </p>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>{t('persona.problem.analysis.tag')}</span></div>
                <p className="text">
                  {t('persona.problem.analysis.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/persona/competitive-analysis.png" />}
                    {isResponsive && <Image src="/persona/competitive-analysis.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>{t('persona.problem.interview.tag')}</span></div>
                <p className="text">
                  {t('persona.problem.interview.description')}
                </p>
                <div className="content quotes">
                  <div className="quotes-container">
                    <div className="quote">
                      {!isResponsive && <Quote className="icon" width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p dangerouslySetInnerHTML={{ __html:t('persona.problem.interview.quote1') }}></p>
                    </div>
                    <div className="quote">
                      {!isResponsive && <Quote width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote width="26" height="22" viewBox="0 0 70 58" />}
                      <p dangerouslySetInnerHTML={{ __html:t('persona.problem.interview.quote2') }}></p>
                    </div>
                  </div>
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/persona/conversational-interview.jpg" />}
                    {isResponsive && <Image src="/persona/conversational-interview.jpg" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag blue"><span>{t('persona.problem.thematic.tag')}</span></div>
                <p className="text">
                  {t('persona.problem.thematic.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="669px" src="/persona/thematic-analysis.png" />}
                    {isResponsive && <Image src="/persona/thematic-analysis.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box noPadTop>
              <h2>{t('persona.lean.title')}</h2>
              <StudyItemContainer last>
                <p className="text solo">
                  {t('persona.lean.description')}
                </p>
              </StudyItemContainer>
            </Box>
            <Box id="think" className="element" noPadTop>
              <h3>{t('persona.think.title')}</h3>
              <StudyItemContainer>
                <p className="text solo">
                  {t('persona.think.description')}
                </p>
              </StudyItemContainer>
              <StudyItemContainer mb="74px">
                <div className="tag blue"><span>{t('persona.think.user.tag')}</span></div>
                <p className="text">
                  {t('persona.think.user.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/persona/user-journey-map.png" />}
                    {isResponsive && <Image src="/persona/user-journey-map.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag blue"><span>{t('persona.think.metrics.tag')}</span></div>
                <p className="text">
                  {t('persona.think.metrics.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/persona/success-signals-metrics.png" />}
                    {isResponsive && <Image src="/persona/success-signals-metrics.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="make" className="element" noPadTop>
              <h3>{t('persona.make.title')}</h3>
              <StudyItemContainer>
                <p className="text solo">
                  {t('persona.make.description')}
                </p>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>{t('persona.make.crazy.tag')}</span></div>
                <p className="text">
                  {t('persona.make.crazy.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="792px" src="/persona/crazy8.png" />}
                    {isResponsive && <Image src="/persona/crazy8.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>{t('persona.make.solution.tag')}</span></div>
                <p className="text">
                  {t('persona.make.solution.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="846px" src="/persona/solution-sketch.png" />}
                    {isResponsive && <Image src="/persona/solution-sketch.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>{t('persona.make.design.tag')}</span></div>
                <p className="text">
                  {t('persona.make.design.description')}
                </p>
              </StudyItemContainer>
              <ProductImageBox fullStudy>
                <div className="block">
                  <div className="section page-1 persona">
                    {!isResponsive && <Image src="../persona/product-image-1.png" width="378px" />}
                    {isResponsive && <Image src="../persona/product-image-1.png" />}
                  </div>
                  <div className="section">
                    <div className="container page-2 persona">
                      {!isResponsive && <Image productImage src="../persona/product-image-2.png" width="616px" />}
                      {isResponsive && <Image productImage src="../persona/product-image-2.png" />}
                    </div>
                    <div className="container page-3 persona">
                      {!isResponsive && <Image productImage className="vertical-center" src="../persona/product-image-3.png" width="616px" />}
                      {isResponsive && <Image productImage className="vertical-center" src="../persona/product-image-3.png" />}
                    </div>
                  </div>
                </div>
                <div className="block page-4 persona">
                  {!isResponsive && <Image productImage src="../persona/product-image-4.png" width="1024px" />}
                  {isResponsive && <Image productImage src="../persona/product-image-4.png" />}
                </div>
              </ProductImageBox>
              <Link href="https://persona.prattdelzenne.com" scroll={false} prefetch={false} passHref>
                <Prototype project="persona" target="_blank">
                  <div className="overlay"></div>
                  <div className="text">
                    <span>{t('persona.make.design.prototype')}</span>
                    <div className="divider"></div>
                  </div>
                </Prototype>
              </Link>
              <StudyItemContainer last>
                <div className="tag blue"><span>{t('persona.make.system.tag')}</span></div>
                <p className="text">
                  {t('persona.make.system.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/persona/design-system.png" />}
                    {isResponsive && <Image src="/persona/design-system.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="check" className="element" noPadTop>
              <h3>{t('persona.check.title')}</h3>
              <StudyItemContainer>
                <p className="text solo">
                {t('persona.check.description')}
                </p>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>{t('persona.check.quali.tag')}</span></div>
                <p className="text">
                  {t('persona.check.quali.description')}
                </p>
                <div className="content quotes">
                  <div className="quotes-container">
                    <div className="quote">
                      {!isResponsive && <Quote className="icon" width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p dangerouslySetInnerHTML={{ __html:t('persona.check.quali.quote1') }}></p>
                    </div>
                    <div className="quote">
                      {!isResponsive && <Quote width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote width="26" height="22" viewBox="0 0 70 58" />}
                      <p dangerouslySetInnerHTML={{ __html:t('persona.check.quali.quote2') }}></p>
                    </div>
                  </div>
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/persona/qualitative-usability-testing.jpg" />}
                    {isResponsive && <Image src="/persona/qualitative-usability-testing.jpg" />}
                  </div>
                  <div className="stats below-stats">
                    <div className="stat">
                      <p className="number">78%</p>
                      <p className="label">{t('persona.check.quali.task')}</p>
                    </div>
                    <div className="stat">
                      <p className="number">89%</p>
                      <p className="label">{t('persona.check.quali.exp')}</p>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag blue"><span>{t('persona.check.quanti.tag')}</span></div>
                <p className="text">
                  {t('persona.check.quanti.description')}
                </p>
                <div className="content quotes">
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/persona/quantitative-usability-testing.png" />}
                    {isResponsive && <Image src="/persona/quantitative-usability-testing.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="implement" className="element" noPadTop>
              <h2>{t('persona.implement.title')}</h2>
              <StudyItemContainer>
                <div className="tag blue"><span>{t('persona.implement.architecture.tag')}</span></div>
                <p className="text">
                  {t('persona.implement.architecture.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/persona/software-architecture.png" />}
                    {isResponsive && <Image src="/persona/software-architecture.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag blue"><span>{t('persona.implement.stack.tag')}</span></div>
                <p className="text">
                  {t('persona.implement.stack.description')}
                </p>
                <div className="content stacks">
                  <div className="stack">
                    <p className="title">Frontend</p>
                    <ul>
                      <li>
                        <img className="logo" src="/persona/react.png" />
                        <p className="label">React</p>
                      </li>
                      <li>
                        <img className="logo" src="/persona/redux.png" />
                        <p className="label">Redux</p>
                      </li>
                      <li>
                        <img className="logo" src="/persona/nextjs.png" />
                        <p className="label">Nextjs</p>
                      </li>
                      <li>
                        <img className="logo" src="/persona/styled-components.png" />
                        {!isResponsive && <p className="label">Styled Components</p>}
                        {isResponsive && <p className="label">Styled</p>}
                      </li>
                    </ul>
                  </div>
                  <div className="stack">
                    <p className="title">Database &amp; Analytics</p>
                    <ul>
                      <li>
                        <img className="logo" src="/persona/mysql.png" />
                        <p className="label">MySQL</p>
                      </li>
                      <li>
                        <img className="logo" src="/persona/google-analytics.png" />
                        {!isResponsive && <p className="label">Google Analytics</p>}
                        {isResponsive && <p className="label">Analytics</p>}
                      </li>
                      <li>
                        <img className="logo" src="/persona/hotjar.png" />
                        <p className="label">Hotjar</p>
                      </li>
                    </ul>
                  </div>
                  <div className="stack">
                    <p className="title">Backend</p>
                    <ul>
                      <li>
                        <img className="logo" src="/persona/nodejs.png" />
                        <p className="label">Nodejs</p>
                      </li>
                      <li>
                        <img className="logo" src="/persona/express.png" />
                        <p className="label">Express</p>
                      </li>
                      <li>
                        <img className="logo" src="/persona/typeorm.png" />
                        <p className="label">TypeORM</p>
                      </li>
                      <li>
                        <img className="logo" src="/persona/dokku.png" />
                        <p className="label">Dokku</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="launch" className="element" noPadTop>
              <h2>{t('persona.launch.title')}</h2>
              <StudyItemContainer last>
                <div className="tag"><span>{t('persona.launch.analytics.tag')}</span></div>
                <p className="text" dangerouslySetInnerHTML={{ __html:t('persona.launch.analytics.description') }}></p>
                <div className="content results">
                  <div className="stats primary">
                    <div className="stat">
                      <p className="number">12 000</p>
                      <p className="label">{t('persona.launch.analytics.user')}</p>
                    </div>
                  </div>
                  <div className="stats medium">
                    <div className="stat">
                      <p className="number">6 000</p>
                      <p className="label">{t('persona.launch.analytics.test')}</p>
                    </div>
                    <div className="stat margin-persona">
                      <p className="number">70%</p>
                      <p className="label">{t('persona.launch.analytics.rate')}</p>
                    </div>
                    <div className="stat">
                      <p className="number">50 000</p>
                      <p className="label">{t('persona.launch.analytics.views')}</p>
                    </div>
                  </div>
                  <div className="lessons">
                    <div className="model">
                      <span className="title">{t('persona.summary.metrics.title')}</span>
                      <ul>
                        <li dangerouslySetInnerHTML={{ __html:t('persona.summary.metrics.phrase1') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('persona.summary.metrics.phrase2') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('persona.summary.metrics.phrase3') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('persona.summary.metrics.phrase4') }}></li>
                      </ul>
                    </div>
                    <div className="model">
                      <span className="title">{t('persona.launch.lessons.title')}</span>
                      <ul>
                          <li>{t('persona.launch.lessons.phrase1')}</li>
                          <li>{t('persona.launch.lessons.phrase2')}</li>
                          <li>{t('persona.launch.lessons.phrase3')}</li>
                          <li>{t('persona.launch.lessons.phrase4')}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="iterate" className="element" noPadTop>
              <h2>{t('persona.updates.title')}</h2>
              <StudyItemContainer noMb>
                <div className="tag blue"><span>{t('persona.updates.iterations.tag')}</span></div>
                <p className="text">
                  {t('persona.updates.iterations.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="600px" src="/persona/iterations.png" />}
                    {isResponsive && <Image src="/persona/iterations.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Divider blue />
            <Box>
              <CaseStudiesContainer>
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
          </>
        }
      </AnimatedLayout>
    </Layout>
  )
}

export default withSize()(CaseStudyPersona)