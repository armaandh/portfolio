import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/commons/Layout';
import Link from 'next/link';
import { withSize } from 'react-sizeme';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

import ArrowRight from '../public/icons/arrow-right.svg';
import Problems from '../public/icons/problems-purple.svg';
import Goals from '../public/icons/goals-purple.svg';
import UXMetrics from '../public/icons/ux-metrics-purple.svg';
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
import Image from '../components/commons/Image';
import { StickyNav } from '../components/commons/StickyNav';
import { 
  Button,
  Progress,
} from '../components/commons/Feedback';

const CaseStudySaia = ({ size }) => {
  const isResponsive = size.width < 1024
  const { t, i18n } = useTranslation()
  const isSmallComputer = size.width < 1120
  const router = useRouter()
  const fullProcess = router.query?.show

  const showFullProcess = () => {
    router.push({
      pathname: '/case-study-saia',
      query: { show: 'fullprocess' },
    })
  }

  return (
    <Layout title={t('saia.header.meta-title')} caseStudy="saia">
      <AnimatedLayout className="case-study-saia">
        <Box>
          <h2>{t('saia.summary.title')}</h2>
          <SummaryContainer>
            <div className="model">
              <Problems width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">{t('saia.summary.problems.title')}</span>
              <ul>
                  <li>{t('saia.summary.problems.phrase1')}</li>
                  <li>{t('saia.summary.problems.phrase2')}</li>
                  <li>{t('saia.summary.problems.phrase3')}</li>
                  <li>{t('saia.summary.problems.phrase4')}</li>
              </ul>
            </div>
            <div className="model">
              <Goals width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">{t('saia.summary.goals.title')}</span>
              <ul>
                  <li>{t('saia.summary.goals.phrase1')}</li>
                  <li>{t('saia.summary.goals.phrase2')}</li>
                  <li>{t('saia.summary.goals.phrase3')}</li>
                  <li>{t('saia.summary.goals.phrase4')}</li>
              </ul>
            </div>
            <div className="model">
              <UXMetrics width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">{t('saia.summary.metrics.title')}</span>
              <ul>
                  <li dangerouslySetInnerHTML={{ __html:t('saia.summary.metrics.phrase1') }}></li>
                  <li dangerouslySetInnerHTML={{ __html:t('saia.summary.metrics.phrase2') }}></li>
                  <li dangerouslySetInnerHTML={{ __html:t('saia.summary.metrics.phrase3') }}></li>
                  <li dangerouslySetInnerHTML={{ __html:t('saia.summary.metrics.phrase4') }}></li>
              </ul>
            </div>
          </SummaryContainer>
        </Box>
        <Box>
          <h2>{t('saia.uxprocess.title')}</h2>
          <StudyItemContainer>
            <p className="ux-process">{t('saia.uxprocess.description')}</p>
              {!isResponsive && <Image productImage src="../saia/ux-process.png" width="860px" height="283px" mb="85px" />}
              {isResponsive && <Image productImage src="../saia/ux-process.png" />}
          </StudyItemContainer>
        </Box>
        <ProductImageBox>
          <div className="block">
            <div className="section page-1">
               {!isResponsive && !isSmallComputer && <Image productImage src="../saia/product-image-1.png" width="378px" />}
               {(isResponsive || isSmallComputer) && <Image productImage src="../saia/product-image-1.png" />}
            </div>
            <div className="section">
              <div className="container page-2">
                  {!isResponsive && !isSmallComputer && <Image productImage src="../saia/product-image-3.png" width="616px" />}
                  {(isResponsive || isSmallComputer) && <Image productImage src="../saia/product-image-3.png" />}
              </div>
              <div className="container page-3">
                  {!isResponsive && !isSmallComputer && <Image productImage src="../saia/product-image-2.png" width="616px" />}
                  {(isResponsive || isSmallComputer) && <Image productImage src="../saia/product-image-2.png" />}
              </div>
            </div>
          </div>
          <div className="block page-4">
            {!isResponsive && !isSmallComputer && <Image productImage src="../saia/product-image-4.png" width="1024px" />}
            {(isResponsive || isSmallComputer) && <Image productImage src="../saia/product-image-4.png" />}
          </div>
        </ProductImageBox>
        <AnimatedButton fullProcess={fullProcess} onClick={showFullProcess} />
        {fullProcess &&
          <>
            <StickyNav threshold={3354} responsiveThreshold={5000} mobileThreshold={3300} items={t('saia.navigation')} />
            <Box id="problem" className="element">
              <h2>{t('saia.problem.title')}</h2>
              <StudyItemContainer>
                <div className="tag"><span>{t('saia.problem.market.tag')}</span></div>
                <p className="text">
                  {t('saia.problem.market.description')}
                </p>
                <div className="content stats">
                  <div className="stat">
                    <p className="number">90%</p>
                    <p className="label full-width">{t('saia.problem.market.num')}</p>
                  </div>
                  <div className="data">
                    <div className="chart">
                      <p className="label">{t('saia.problem.market.chart.traffic')}</p>
                      <Progress percent={47}><div className="percent"></div></Progress>
                      <p className="result">47%</p>
                    </div>
                    <div className="chart">
                      <p className="label">{t('saia.problem.market.chart.quality')}</p>
                      <Progress percent={52}><div className="percent"></div></Progress>
                      <p className="result">52%</p>
                    </div>
                    <div className="chart">
                      <p className="label">{t('saia.problem.market.chart.quantity')}</p>
                      <Progress percent={35}><div className="percent"></div></Progress>
                      <p className="result">35%</p>
                    </div>
                    <div className="chart">
                      <p className="label">{t('saia.problem.market.chart.time')}</p>
                      <Progress percent={32}><div className="percent"></div></Progress>
                      <p className="result">32%</p>
                    </div>
                    <div className="chart">
                      <p className="label">{t('saia.problem.market.chart.ideas')}</p>
                      <Progress percent={18}><div className="percent"></div></Progress>
                      <p className="result ideas">18%</p>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag"><span>{t('saia.problem.interview.tag')}</span></div>
                <p className="text">
                  {t('saia.problem.interview.description')}
                </p>
                <div className="content quotes">
                  <div className="quotes-container">
                    <div className="quote">
                     {!isResponsive && <Quote className="icon" width="70" height="58" viewBox="0 0 70 58" />}
                     {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p>{t('saia.problem.interview.quote1')}</p>
                    </div>
                    <div className="quote">
                      {!isResponsive && <Quote width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p>{t('saia.problem.interview.quote2')}</p>
                    </div>
                  </div>
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/saia/conversational-interview.jpg" />}
                    {isResponsive && <Image src="/saia/conversational-interview.jpg" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last mb="10px">
                <div className="tag"><span>{t('saia.problem.thematic.tag')}</span></div>
                <p className="text">
                  {t('saia.problem.thematic.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="669px" src="/saia/thematic-analysis.png" />}
                    {isResponsive && <Image src="/saia/thematic-analysis.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box>
              <h2>{t('saia.sprint.title')}</h2>
              <StudyItemContainer last>
                <p className="text solo">
                  {t('saia.sprint.description')}
                </p>
              </StudyItemContainer>
            </Box>
            <Box id="understand" className="element" noPadTop>
              <h3>{t('saia.understand.title')}</h3>
              <StudyItemContainer mb="74px">
                <div className="tag"><span>{t('saia.understand.how.tag')}</span></div>
                <p className="text">
                  {t('saia.understand.how.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="669px" src="/saia/how-might-we.png" />}
                    {isResponsive && <Image src="/saia/how-might-we.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag"><span>{t('saia.understand.feature.tag')}</span></div>
                <p className="text">
                  {t('saia.understand.feature.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/saia/feature-ideas.png" />}
                    {isResponsive && <Image src="/saia/feature-ideas.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="define" className="element" noPadTop>
              <h3>{t('saia.define.title')}</h3>
              <StudyItemContainer last>
                <div className="tag"><span>{t('saia.define.action.tag')}</span></div>
                <p className="text">
                  {t('saia.define.action.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/saia/action-priority-matrix.png" />}
                    {isResponsive && <Image src="/saia/action-priority-matrix.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="sketch" className="element" noPadTop>
              <h3>{t('saia.sketch.title')}</h3>
              <StudyItemContainer>
                <div className="tag"><span>{t('saia.sketch.crazy.tag')}</span></div>
                <p className="text">
                  {t('saia.sketch.crazy.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="792px" src="/saia/crazy8.png" />}
                    {isResponsive && <Image src="/saia/crazy8.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag"><span>{t('saia.sketch.solution.tag')}</span></div>
                <p className="text">
                  {t('saia.sketch.solution.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="846px" src="/saia/solution-sketch.png" />}
                    {isResponsive && <Image src="/saia/solution-sketch.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="decide" className="element" noPadTop>
              <h3>{t('saia.decide.title')}</h3>
              <StudyItemContainer last>
                <div className="tag"><span>{t('saia.decide.lean.tag')}</span></div>
                <p className="text">
                  {t('saia.decide.lean.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/saia/lean-canvas.png" />}
                    {isResponsive && <Image src="/saia/lean-canvas.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="prototype" className="element" noPadTop>
              <h3>{t('saia.design.title')}</h3>
              <StudyItemContainer>
                <p className="text solo">
                  {t('saia.design.description')}
                </p>
              </StudyItemContainer>
               <ProductImageBox fullStudy>
                <div className="block">
                  <div className="section page-1">
                    {!isResponsive && !isSmallComputer && <Image productImage src="../saia/product-image-1.png" width="378px" />}
                    {(isResponsive || isSmallComputer) && <Image productImage src="../saia/product-image-1.png" />}
                  </div>
                  <div className="section">
                    <div className="container page-2">
                        {!isResponsive && !isSmallComputer && <Image productImage src="../saia/product-image-3.png" width="616px" />}
                        {(isResponsive || isSmallComputer) && <Image productImage src="../saia/product-image-3.png" />}
                    </div>
                    <div className="container page-3">
                        {!isResponsive && !isSmallComputer && <Image productImage src="../saia/product-image-2.png" width="616px" />}
                        {(isResponsive || isSmallComputer) && <Image productImage src="../saia/product-image-2.png" />}
                    </div>
                  </div>
                </div>
                <div className="block page-4">
                  {!isResponsive && !isSmallComputer && <Image productImage src="../saia/product-image-4.png" width="1024px" />}
                  {(isResponsive || isSmallComputer) && <Image productImage src="../saia/product-image-4.png" />}
                </div>
              </ProductImageBox>
              <Link href="https://saia.prattdelzenne.com" scroll={false} prefetch={false} passHref>
                <Prototype target="_blank">
                  <div className="overlay"></div>
                  <div className="text">
                    <span>{t('saia.design.prototype')}</span>
                    <div className="divider"></div>
                  </div>
                </Prototype>
              </Link>
              <StudyItemContainer last>
                <div className="tag"><span>{t('saia.design.system.tag')}</span></div>
                <p className="text">
                  {t('saia.design.system.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/saia/design-system.png" />}
                    {isResponsive && <Image src="/saia/design-system.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="validate" className="element" noPadTop>
              <h3>{t('saia.validate.title')}</h3>
              <StudyItemContainer last>
                <div className="tag"><span>{t('saia.validate.test.tag')}</span></div>
                <p className="text">
                  {t('saia.validate.test.description')}
                </p>
                <div className="content quotes">
                  <div className="quotes-container">
                    <div className="quote">
                      {!isResponsive && <Quote className="icon" width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p dangerouslySetInnerHTML={{ __html:t('saia.validate.test.quote1') }}></p>
                    </div>
                    <div className="quote">
                      {!isResponsive && <Quote width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote width="26" height="22" viewBox="0 0 70 58" />}
                      <p dangerouslySetInnerHTML={{ __html:t('saia.validate.test.quote2') }}></p>
                    </div>
                  </div>
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/saia/usability-testing.jpg" />}
                    {isResponsive && <Image src="/saia/usability-testing.jpg" />}
                  </div>
                  <div className="stats below-stats">
                    <div className="stat">
                      <p className="number">75%</p>
                      <p className="label">{t('saia.validate.test.task')}</p>
                    </div>
                    <div className="stat">
                      <p className="number">87%</p>
                      <p className="label">{t('saia.validate.test.exp')}</p>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="implement" className="element" noPadTop>
              <h2>{t('saia.implement.title')}</h2>
              <StudyItemContainer>
                <div className="tag"><span>{t('saia.implement.architecture.tag')}</span></div>
                <p className="text">
                  {t('saia.implement.architecture.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/saia/software-architecture.png" />}
                    {isResponsive && <Image src="/saia/software-architecture.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag"><span>{t('saia.implement.stack.tag')}</span></div>
                <p className="text">
                  {t('saia.implement.stack.description')}
                </p>
                <div className="content stacks">
                  <div className="stack">
                    <p className="title">Frontend</p>
                    <ul>
                      <li>
                        <img className="logo" src="/saia/vuejs.png" />
                        <p className="label">Vuejs</p>
                      </li>
                      <li>
                        <img className="logo" src="/saia/vuex.png" />
                        <p className="label">VueX</p>
                      </li>
                      <li>
                        <img className="logo" src="/saia/quasar.png" />
                        <p className="label">Quasar</p>
                      </li>
                      <li>
                        <img className="logo" src="/saia/chrome-extension.png" />
                        {!isResponsive && <p className="label">Chrome Extension</p>}
                        {isResponsive && <p className="label">Extension</p>}
                      </li>
                    </ul>
                  </div>
                  <div className="stack">
                    <p className="title">Database &amp; Analytics</p>
                    <ul>
                      <li>
                        <img className="logo" src="/saia/postgresql.png" />
                        <p className="label">PostgreSQL</p>
                      </li>
                      <li>
                        <img className="logo" src="/saia/prisma.png" />
                        <p className="label">Prisma</p>
                      </li>
                      <li>
                        <img className="logo" src="/saia/google-analytics.png" />
                        {!isResponsive && <p className="label">Google Analytics</p>}
                        {isResponsive && <p className="label">Analytics</p>}
                      </li>
                      <li>
                        <img className="logo" src="/saia/fullstory.png" />
                        <p className="label">FullStory</p>
                      </li>
                    </ul>
                  </div>
                  <div className="stack">
                    <p className="title">Backend</p>
                    <ul>
                      <li>
                        <img className="logo" src="/saia/nodejs.png" />
                        <p className="label">Nodejs</p>
                      </li>
                      <li>
                        <img className="logo" src="/saia/apollo.png" />
                        <p className="label">Apollo</p>
                      </li>
                      <li>
                        <img className="logo" src="/saia/graphql.png" />
                        <p className="label">GraphQL</p>
                      </li>
                      <li>
                        <img className="logo" src="/saia/caddy.png" />
                        <p className="label">Caddy</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="launch" className="element" noPadTop>
              <h2>{t('saia.launch.title')}</h2>
              <StudyItemContainer last>
                <div className="tag"><span>{t('saia.launch.analytics.tag')}</span></div>
                <p className="text">
                  {t('saia.launch.analytics.description')}
                </p>
                <div className="content results">
                  <div className="stats primary">
                    <div className="stat">
                      <p className="number">1 000</p>
                      <p className="label">{t('saia.launch.analytics.user')}</p>
                    </div>
                  </div>
                  <div className="stats medium">
                    <div className="stat">
                      <p className="number">15%</p>
                      <p className="label">{t('saia.launch.analytics.register')}</p>
                    </div>
                    <div className="stat">
                      <p className="number">200</p>
                      <p className="label">{t('saia.launch.analytics.traffic')}</p>
                    </div>
                    <div className="stat">
                      <p className="number">2%</p>
                      <p className="label">{t('saia.launch.analytics.convert')}</p>
                    </div>
                  </div>
                  <div className="lessons">
                    <div className="model">
                      <span className="title">{t('saia.summary.metrics.title')}</span>
                      <ul>
                        <li dangerouslySetInnerHTML={{ __html:t('saia.summary.metrics.phrase1') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('saia.summary.metrics.phrase2') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('saia.summary.metrics.phrase3') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('saia.summary.metrics.phrase4') }}></li>
                      </ul>
                    </div>
                    <div className="model">
                      <span className="title">{t('saia.launch.analytics.lesson.title')}</span>
                      <ul>
                        <li dangerouslySetInnerHTML={{ __html:t('saia.launch.analytics.lesson.phrase1') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('saia.launch.analytics.lesson.phrase2') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('saia.launch.analytics.lesson.phrase3') }}></li>
                        <li dangerouslySetInnerHTML={{ __html:t('saia.launch.analytics.lesson.phrase4') }}></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="iterate" className="element" noPadTop>
              <h2>{t('saia.updates.title')}</h2>
              <StudyItemContainer noMb>
                <div className="tag"><span>{t('saia.updates.iterations.tag')}</span></div>
                <p className="text">
                  {t('saia.updates.iterations.description')}
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="600px" src="/saia/iterations.png" />}
                    {isResponsive && <Image src="/saia/iterations.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Divider />
            <Box>
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
                      <p>Experiments</p>
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

export default withSize()(CaseStudySaia)