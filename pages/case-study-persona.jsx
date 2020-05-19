import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/commons/Layout';
import Link from 'next/link';
import { withSize } from 'react-sizeme'
import { useRouter } from 'next/router'

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
    <Layout title="Persona's case study - JC Pratt-Delzenne" caseStudy="persona">
      <AnimatedLayout className="case-study-persona">
        <Box>
          <h2>Summary</h2>
          <SummaryContainer>
            <div className="model">
              <Problems width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">Problems</span>
              <ul>
                  <li>Craving to understand ourselves and others</li>
                  <li>Most scientific online tests look unprofessional or scammy</li>
                  <li>Know the difference between us and society</li>
                  <li>Be understood by my family and friends</li>
              </ul>
            </div>
            <div className="model">
              <Goals width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">Goals</span>
              <ul>
                  <li>Scientifically researched and validated model</li>
                  <li>Attractive UI &amp; game-like interactions</li>
                  <li>Compare user results to more than a million data points</li>
                  <li>Ability to share to all major platforms</li>
              </ul>
            </div>
            <div className="model">
              <UXMetrics width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">UX Metrics</span>
              <ul>
                  <li><span>70%</span> of users who start, complete the test</li>
                  <li><span>89%</span> of users find the test engaging and beautiful</li>
                  <li><span>82%</span> of users find results very insightful</li>
                  <li><span>39%</span> of users share their results with 3+ friends</li>
              </ul>
            </div>
          </SummaryContainer>
        </Box>
        <Box>
          <h2>UX process</h2>
          <StudyItemContainer>
            <p className="ux-process">The user experience process I used was the LEAN UX framework.</p>
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
            <StickyNav blue threshold={3410} responsiveThreshold={5005} mobileThreshold={3417} items={['problem', 'think', 'make', 'check', 'implement', 'launch', 'iterate']} />
            <Box id="problem" className="element">
              <h2>Validating the problem</h2>
              <StudyItemContainer>
                <p className="text solo">
                  I'm passionate about Personality Science for years now. 
                  I’ve learned a lot reading books by Personality Psychology Harvard professor Brian R. Little, Colin DeYoung, Jordan B. Peterson. 
                  I saw a big discrepancy between science knowledge and test websites.
                </p>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>Competitive Analysis</span></div>
                <p className="text">
                  I made a competitive analysis to better understand the competitive landscape. 
                  Most personality test websites use inaccurate and pseudoscientific models or look very unprofessional and scammy.
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/persona/competitive-analysis.png" />}
                    {isResponsive && <Image src="/persona/competitive-analysis.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>Conversational Interview</span></div>
                <p className="text">
                  I needed to gather data about how people see personality websites tests, why they would take one, which criteria would make them decide on a test website instead of another. 
                  Conversational interviews are great to collect rich stories and perspectives about individual decisions.
                </p>
                <div className="content quotes">
                  <div className="quotes-container">
                    <div className="quote">
                      {!isResponsive && <Quote className="icon" width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p>I think if I know myself, I<br /> would feel better</p>
                    </div>
                    <div className="quote">
                      {!isResponsive && <Quote width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote width="26" height="22" viewBox="0 0 70 58" />}
                      <p>Many personality tests<br /> feel like astrology</p>
                    </div>
                  </div>
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/persona/conversational-interview.jpg" />}
                    {isResponsive && <Image src="/persona/conversational-interview.jpg" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag blue"><span>Thematic Analysis</span></div>
                <p className="text">
                  I decided to analyze the conversations and categorizing them into themes. 
                  It was very useful to refer back to the thematic items and themes during the design process.
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
              <h2>UX Process : Lean UX</h2>
              <StudyItemContainer last>
                <p className="text solo">
                  I used the Lean UX process to build the product.
                  It’s great to state my assumptions then test them with users in a fast iterative cycle.
                </p>
              </StudyItemContainer>
            </Box>
            <Box id="think" className="element" noPadTop>
              <h3>THINK</h3>
              <StudyItemContainer>
                <p className="text solo">
                  To map my assumptions I used multiple UX exercises. 
                  Questions I needed was like: Why users would come? What are they looking for? What are their expectations? 
                  How can I measure the success of the whole experience?
                </p>
              </StudyItemContainer>
              <StudyItemContainer mb="74px">
                <div className="tag blue"><span>User journey map</span></div>
                <p className="text">
                  I used the User Journey Mapping exercise to identify the motivations, thoughts, 
                  and the path a user will follow when they would want to take a personality test.
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/persona/user-journey-map.png" />}
                    {isResponsive && <Image src="/persona/user-journey-map.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag blue"><span>Success &amp; signal metrics</span></div>
                <p className="text">
                  I wanted to gather data from the whole user experience. 
                  Making decisions based on data increases the likelihood of product success. 
                  Google HEART Model was a perfect match for exactly what I wanted to do.
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
              <h3>Make</h3>
              <StudyItemContainer>
                <p className="text solo">
                  Based on what I created before, I explored user interface ideas to solve the problem. 
                  I went step by step: sketching by hand, wireframe, high fidelity mockup, and finally a prototype. 
                </p>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>Crazy 8's</span></div>
                <p className="text">
                  I used the Crazy 8 exercise from the Design Sprint framework to generate ideas. 
                  It’s a great exercise for the exploration phase.
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="792px" src="/persona/crazy8.png" />}
                    {isResponsive && <Image src="/persona/crazy8.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>Solution Sketch</span></div>
                <p className="text">
                  I decided on a promising solution that could solve the problem. I made some wireframes of the solution. 
                  I kept in mind that the goal was to create a valuable and high-quality MVP(Minimum Viable Product).
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="846px" src="/persona/solution-sketch.png" />}
                    {isResponsive && <Image src="/persona/solution-sketch.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>Design &amp; Prototype</span></div>
                <p className="text solo">
                  After presenting the solution to potential users, I created the high-fidelity mockup.
                  I wanted to make the design to create an enthusiastic and fun feeling to increase engagement and trust.
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
                    <span>See Prototype</span>
                    <div className="divider"></div>
                  </div>
                </Prototype>
              </Link>
              <StudyItemContainer last>
                <div className="tag blue"><span>Design System</span></div>
                <p className="text">
                  I applied vivid colors and round shapes to create a feeling of play and game-like interactions to create a sense of familiarity and fun. 
                  The design decisions were crafted to increase the completion rate of the test and the chance of users sharing results with friends.
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
              <h3>Check</h3>
              <StudyItemContainer>
                <p className="text solo">
                  My goal in this phase was to get feedback from potential users to uncover issues. 
                  I used in-person qualitative usability tests, quantitative usability testing to gather feedback.
                </p>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag blue"><span>Qualitative usability testing</span></div>
                <p className="text">
                  I’ve done conversational Interviews to gather story-rich data about interpretations of how they perceive the design. 
                  I also performed usability tests to know if the solution could be understood by different types of users.
                </p>
                <div className="content quotes">
                  <div className="quotes-container">
                    <div className="quote">
                      {!isResponsive && <Quote className="icon" width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p>It’s really beautiful and<br /> very easy to use</p>
                    </div>
                    <div className="quote">
                      {!isResponsive && <Quote width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote width="26" height="22" viewBox="0 0 70 58" />}
                      <p>Wow! I would share<br /> it with my colleagues</p>
                    </div>
                  </div>
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/persona/qualitative-usability-testing.jpg" />}
                    {isResponsive && <Image src="/persona/qualitative-usability-testing.jpg" />}
                  </div>
                  <div className="stats below-stats">
                    <div className="stat">
                      <p className="number">78%</p>
                      <p className="label">Tasks completion rate</p>
                    </div>
                    <div className="stat">
                      <p className="number">89%</p>
                      <p className="label">Positive experience rate</p>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag blue"><span>Quantitative usability testing</span></div>
                <p className="text">
                  Used a tool to bring 150 people to use the prototype and gather data about usability metrics.
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
              <h2>IMPLEMENTING THE SOLUTION</h2>
              <StudyItemContainer>
                <div className="tag blue"><span>Software Architecture</span></div>
                <p className="text">
                  After design iterations, with usability tests and user feedback, I started to implement the solution. 
                  I used a simple architecture but with simple maintenance and scale in mind. I also wanted the least cost possible.
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/persona/software-architecture.png" />}
                    {isResponsive && <Image src="/persona/software-architecture.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag blue"><span>Tech Stack</span></div>
                <p className="text">
                  I wanted to make stack simple yet scalable. Maintainability is also an issue I wanted to tackle upfront. It's a standard stack today.
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
              <h2>LAUNCH &amp; RESULTS</h2>
              <StudyItemContainer last>
                <div className="tag"><span>Analytics</span></div>
                <p className="text">
                  Persona launched on Product Hunt and ended <span className="bold">#4 Product of the Day</span>. 
                  During the launch day, it was #1 for more than 13 hours. The product got a lot of traffic, usage, and feedback.
                </p>
                <div className="content results">
                  <div className="stats primary">
                    <div className="stat">
                      <p className="number">12 000</p>
                      <p className="label">Users</p>
                    </div>
                  </div>
                  <div className="stats medium">
                    <div className="stat">
                      <p className="number">6 000</p>
                      <p className="label">Test completed</p>
                    </div>
                    <div className="stat margin-persona">
                      <p className="number">70%</p>
                      <p className="label">Completion rate</p>
                    </div>
                    <div className="stat">
                      <p className="number">50 000</p>
                      <p className="label">Page views</p>
                    </div>
                  </div>
                  <div className="lessons">
                    <div className="model">
                      <span className="title">UX Metrics</span>
                      <ul>
                        <li><span>70%</span> of users who start completes the test</li>
                        <li><span>89%</span> of users find the test engaging and beautiful</li>
                        <li><span>82%</span> of users find results very insightful</li>
                        <li><span>39%</span> of users share their results to 3+ friends</li>
                      </ul>
                    </div>
                    <div className="model">
                      <span className="title">Lessons</span>
                      <ul>
                          <li>Some people care a lot about how their data will be used, but most don't</li>
                          <li>Don't use free databases for production use, it always bites back</li>
                          <li>When peope like and share, they can start a massive network effect</li>
                          <li>Good design increases trust by a huge margin</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="iterate" className="element" noPadTop>
              <h2>Product Updates</h2>
              <StudyItemContainer noMb>
                <div className="tag blue"><span>Iterations</span></div>
                <p className="text">
                  After the launch, I received requests and observed a lot of user behavior using analytics tools.
                  I prioritized and solved them using models from Lean UX or Design Sprint and other useful frameworks.
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
                <Link href="/practice" scroll={false}>
                  <a className="case">
                    <div className="img practice"></div>
                    <div className="info">
                      <p>Experiments</p>
                      <div className="see-more blue">
                        {!isResponsive && <ArrowRight width="11" height="19" viewBox="0 0 11 19" />}
                        {isResponsive && <ArrowRight width="7" height="12" viewBox="0 0 11 19" />}
                      </div>
                    </div>
                  </a>
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