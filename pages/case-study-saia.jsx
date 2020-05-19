import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/commons/Layout';
import Link from 'next/link';
import { withSize } from 'react-sizeme'
import { useRouter } from 'next/router'

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
    <Layout title="Saia's case study - JC Pratt-Delzenne" caseStudy="saia">
      <AnimatedLayout className="case-study-saia">
        <Box>
          <h2>Summary</h2>
          <SummaryContainer>
            <div className="model">
              <Problems width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">Problems</span>
              <ul>
                  <li>90% of content gets no traffic from Google</li>
                  <li>Most blog writers don't have Marketing or SEO skills</li>
                  <li>It takes a lot of time to write articles</li>
                  <li>Knowledge generated during research for a past article is lost</li>
              </ul>
            </div>
            <div className="model">
              <Goals width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">Goals</span>
              <ul>
                  <li>Help the content writer on SEO</li>
                  <li>Easy process to follow</li>
                  <li>Simplify the research and information gathering</li>
                  <li>Keep all knowledge generated through the process</li>
              </ul>
            </div>
            <div className="model">
              <UXMetrics width="40" height="40" viewBox="0 0 40 40" />
              <span className="title">UX Metrics</span>
              <ul>
                  <li><span>62%</span> of users see an increase in article traffic</li>
                  <li><span>71%</span> of users think the process is clear</li>
                  <li><span>67%</span> of users take less time to write articles</li>
                  <li><span>43%</span> of users use previous research in new articles</li>
              </ul>
            </div>
          </SummaryContainer>
        </Box>
        <Box>
          <h2>UX process</h2>
          <StudyItemContainer>
            <p className="ux-process">The user experience process I used was the Design Sprint framework.</p>
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
            <StickyNav threshold={3354} responsiveThreshold={5274} mobileThreshold={3510} items={['problem', 'understand', 'define', 'sketch', 'decide', 'design', 'validate', 'implement', 'launch', 'iterate']} />
            <Box id="problem" className="element">
              <h2>Validating the problem</h2>
              <StudyItemContainer>
                <div className="tag"><span>Market research</span></div>
                <p className="text">
                  To acquire a deep understanding of the problem, I’ve done a market research and uncovered lots of issues from bloggers 
                  and freelancers with their blogs. I had access to a lot of research that has been done online.
                </p>
                <div className="content stats">
                  <div className="stat">
                    <p className="number">90%</p>
                    <p className="label full-width">Sites receive 0 monthly traffic</p>
                  </div>
                  <div className="data">
                    <div className="chart">
                      <p className="label">Getting traffic</p>
                      <Progress percent={47}><div className="percent"></div></Progress>
                      <p className="result">47%</p>
                    </div>
                    <div className="chart">
                      <p className="label">Content quality</p>
                      <Progress percent={52}><div className="percent"></div></Progress>
                      <p className="result">52%</p>
                    </div>
                    <div className="chart">
                      <p className="label">Content quantity</p>
                      <Progress percent={35}><div className="percent"></div></Progress>
                      <p className="result">35%</p>
                    </div>
                    <div className="chart">
                      <p className="label">Finding time</p>
                      <Progress percent={32}><div className="percent"></div></Progress>
                      <p className="result">32%</p>
                    </div>
                    <div className="chart">
                      <p className="label">Finding ideas</p>
                      <Progress percent={18}><div className="percent"></div></Progress>
                      <p className="result ideas">18%</p>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer>
                <div className="tag"><span>Conversational Interview</span></div>
                <p className="text">
                  Conducting Conversational Interviews was the best way to collect rich stories and their interpretations 
                  of the problem. What I wanted to uncover from people was their experiences of 
                  writing blog posts and the end results they wanted the blog post to deliver.
                </p>
                <div className="content quotes">
                  <div className="quotes-container">
                    <div className="quote">
                     {!isResponsive && <Quote className="icon" width="70" height="58" viewBox="0 0 70 58" />}
                     {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p>I’m always lost! There’s too much to know</p>
                    </div>
                    <div className="quote">
                      {!isResponsive && <Quote width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p>I feel that I get poor results compared to my efforts</p>
                    </div>
                  </div>
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/saia/conversational-interview.jpg" />}
                    {isResponsive && <Image src="/saia/conversational-interview.jpg" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last mb="10px">
                <div className="tag"><span>Thematic Analysis</span></div>
                <p className="text">
                  I decided to analyze the conversations and categorizing them into themes. 
                  It will be very useful to refer back to the thematic items and themes during the design process.
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
              <h2>UX Process : Design Sprint</h2>
              <StudyItemContainer last>
                <p className="text solo">
                  I used Design Sprint exercises because I think they can help create a product that is focused on solving the user’s problems. 
                  I removed some limits from the framework, like the 5 days sprint, and wasn’t always with multiple people.
                </p>
              </StudyItemContainer>
            </Box>
            <Box id="understand" className="element" noPadTop>
              <h3>UNDERSTANDING THE USER’S PROBLEM</h3>
              <StudyItemContainer mb="74px">
                <div className="tag"><span>How Might We</span></div>
                <p className="text">
                  I used the How Might We exercise to generate ideas from the research insights, 
                  the idea was to explore ways to address the user’s pain points.
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="669px" src="/saia/how-might-we.png" />}
                    {isResponsive && <Image src="/saia/how-might-we.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag"><span>Feature ideas</span></div>
                <p className="text">
                  I conducted a brainstorming session to generate a lot of ideas of features 
                  that could solve questions from the How Might We session.
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
              <h3>DEFINING WHAT TO FOCUS ON</h3>
              <StudyItemContainer last>
                <div className="tag"><span>Action Priority Matrix</span></div>
                <p className="text">
                  Prioritization was very important because it's a solo business and I had to take into account my resources. Decision matrices are great to evaluate and prioritize ideas. 
                  The most important factors to work with were User value and Technical Difficulty. 
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
              <h3>SKETCHING SOLUTIONS</h3>
              <StudyItemContainer>
                <div className="tag"><span>Crazy 8's</span></div>
                <p className="text">
                  I explored multiple solutions using crazy 8’s exercise. 
                  Sketching by hand helped me move fast from an idea to another.
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="792px" src="/saia/crazy8.png" />}
                    {isResponsive && <Image src="/saia/crazy8.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag"><span>Solution Sketch</span></div>
                <p className="text">
                  I wireframed a promising solution to the problem. I used the action priority matrix result to focus on 
                  features that can give significant value to the user and is not too difficult technically to code.
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
              <h3>DECIDING ON THE APPROPRIATE SOLUTION</h3>
              <StudyItemContainer last>
                <div className="tag"><span>Lean Canvas</span></div>
                <p className="text">
                  After the exploration, I needed to have a view of the whole system. To do that, I used the Lean Canvas. 
                  The canvas helps to break down how will work each part of the business in a fast and clear process.
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/saia/lean-canvas.png" />}
                    {isResponsive && <Image src="/saia/lean-canvas.png" />}
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="design" className="element" noPadTop>
              <h3>DESIGN &amp; PROTOTYPE</h3>
              <StudyItemContainer>
                <p className="text solo">
                  In this phase, my goal was to create a solution users could find clear and elegant. 
                  I focused on designing the solution with Sketch and InVision to produce a clickable Prototype.
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
                    <span>See Prototype</span>
                    <div className="divider"></div>
                  </div>
                </Prototype>
              </Link>
              <StudyItemContainer last>
                <div className="tag"><span>Design System</span></div>
                <p className="text">
                  I used some principles from Google’s material design system. 
                  I chose purple as the main color because, in color theory, it represents 
                  imagination and creativity and content writers identify these values.
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
              <h3>Validating the solution</h3>
              <StudyItemContainer last>
                <div className="tag"><span>Usability testing</span></div>
                <p className="text">
                  I’ve done usability tests to validate if the solution could solve the user's problem. 
                  I asked them to do some tasks through the user interface and to think out loud while performing the tasks.
                </p>
                <div className="content quotes">
                  <div className="quotes-container">
                    <div className="quote">
                      {!isResponsive && <Quote className="icon" width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote className="icon" width="26" height="22" viewBox="0 0 70 58" />}
                      <p>I look great! It feels very effortless</p>
                    </div>
                    <div className="quote">
                      {!isResponsive && <Quote width="70" height="58" viewBox="0 0 70 58" />}
                      {isResponsive && <Quote width="26" height="22" viewBox="0 0 70 58" />}
                      <p>This could help me create <br />better blog posts.</p>
                    </div>
                  </div>
                  <div className="mask">
                    {!isResponsive && <Image width="715px" src="/saia/usability-testing.jpg" />}
                    {isResponsive && <Image src="/saia/usability-testing.jpg" />}
                  </div>
                  <div className="stats below-stats">
                    <div className="stat">
                      <p className="number">75%</p>
                      <p className="label">Tasks completion rate</p>
                    </div>
                    <div className="stat">
                      <p className="number">87%</p>
                      <p className="label">Positive experience rate</p>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="implement" className="element" noPadTop>
              <h2>IMPLEMENTING THE SOLUTION</h2>
              <StudyItemContainer>
                <div className="tag"><span>Software Architecture</span></div>
                <p className="text">
                  After I’ve iterated on the design with testers' feedback, I started to draft a software architecture. 
                  The idea was to have a simple stack with an easy and cheap deployment strategy.
                </p>
                <div className="content">
                  <div className="mask">
                    {!isResponsive && <Image width="850px" src="/saia/software-architecture.png" />}
                    {isResponsive && <Image src="/saia/software-architecture.png" />}
                  </div>
                </div>
              </StudyItemContainer>
              <StudyItemContainer last>
                <div className="tag"><span>Tech Stack</span></div>
                <p className="text">
                    I used a modern yet simple stack that could help me implement the solution easily. 
                    I also wanted the stack to be maintainable.
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
              <h2>LAUNCH &amp; RESULTS</h2>
              <StudyItemContainer last>
                <div className="tag"><span>Analytics</span></div>
                <p className="text">
                  Wrote articles on Saia’s blog and on Medium. I also sent emails to a hundred who were on the waiting list. 
                  Today all traffic is organic, mostly sent by Google.
                </p>
                <div className="content results">
                  <div className="stats primary">
                    <div className="stat">
                      <p className="number">1 000</p>
                      <p className="label">Users at launch</p>
                    </div>
                  </div>
                  <div className="stats medium">
                    <div className="stat">
                      <p className="number">15%</p>
                      <p className="label">Registration rate</p>
                    </div>
                    <div className="stat">
                      <p className="number">200</p>
                      <p className="label">Monthly Organic Traffic</p>
                    </div>
                    <div className="stat">
                      <p className="number">2%</p>
                      <p className="label">Conversion rate</p>
                    </div>
                  </div>
                  <div className="lessons">
                    <div className="model">
                      <span className="title">UX Metrics</span>
                      <ul>
                        <li><span>62%</span> of users see an increase in article traffic</li>
                        <li><span>71%</span> of users think the process is clear</li>
                        <li><span>67%</span> of users take less time to write articles</li>
                        <li><span>43%</span> of users use previous research in new articles</li>
                      </ul>
                    </div>
                    <div className="model">
                      <span className="title">Lessons</span>
                      <ul>
                        <li>Most users won’t tell you what's wrong, they will just leave</li>
                        <li>Focus on those that can see the value of your product</li>
                        <li>Optimize for conversions not for traffic</li>
                        <li>Online communities can give you great feedback</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </StudyItemContainer>
            </Box>
            <Box id="iterate" className="element" noPadTop>
              <h2>Product Updates</h2>
              <StudyItemContainer noMb>
                <div className="tag"><span>Iterations</span></div>
                <p className="text">
                  I used the customer requests and data from analytics tools to prioritize what to create next. 
                  The UX process I use depends on the kind of user or business problem I had to solve.
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

export default withSize()(CaseStudySaia)