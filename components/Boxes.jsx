import styled from '@emotion/styled';
import { motion } from "framer-motion";
import { cssShadowDefault } from '../utils/theme';

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.noPadTop ? "0" : "90px"};

  h2, h3 {
    font-size: 22px;
    font-weight: 700;
    color: #6E819C;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 35px;
  }

  .grid .grid-item {
    overflow: hidden;
    border-radius: 45px;
  }

  /* RESPONSIVE */
  @media only screen and (max-width: 1024px) {
    margin-top: ${props => props.noPadTop ? "0" : "35px"};
    h2, h3 {
      font-size: 18px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 16px;
    }

    .grid {
      margin-bottom: 80px;
      .grid-item {
        border-radius: 30px;
      }
    }

  }
  @media only screen and (max-width: 550px) {
    h2, h3 {
      font-size: 14px;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 13px;
    }
  }
`;

export const ProductImageBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.fullStudy ? "0px" : "100px"};
    margin-bottom: ${props => props.fullStudy ? "50px" : "0px"};

    .block {
      display: flex;
      justify-content: space-between;

      &:first-of-type {
        margin-bottom: 30px;
      }

      .section {
        div:first-of-type {
          margin-bottom: 30px;
          ${cssShadowDefault};
        }
      }

      .page-1 {
        height: 794px;
        overflow: hidden;
        border-radius: 32px;
        ${cssShadowDefault};

        &.persona {
          height: 782px;
        }
      }

      .page-2 {
        height: 345px;
        overflow: hidden;
        border-radius: 32px;
        ${cssShadowDefault};

        &.persona {
          height: 369px;
        }

      }

      .page-3 {
        height: 419px;
        overflow: hidden;
        border-radius: 32px;
        ${cssShadowDefault};

        &.persona {
          height: 383px;

          .vertical-center {
            margin-top: -35px;
          }
        }
      }

      &.page-4 {
        height: 515px;
        overflow: hidden;
        border-radius: 32px;
        ${cssShadowDefault};

        &.persona {
          height: 600px;
        }
      }
    }

    @media only screen and (max-width: 1120px) {
      margin-top: ${props => props.fullStudy ? "0px" : "35px"};
      margin-bottom: ${props => props.fullStudy ? "20px" : "0px"};

      .block {
        flex-direction: column;

        &:first-of-type {
          margin-bottom: 0px;
        }

        .section {
          div:first-of-type {
            margin-bottom: 20px;
          }
        }

        .page-1, .page-2, .page-3, &.page-4 {
          width: 100%;
          height: 100%;
          margin-bottom: 20px;
          border-radius: 24px;

          &.persona {
            height: auto;
          }
        }

        &.page-4 {
          margin-bottom: 0px;

          &.persona {
            height: auto;
          }
        }
      }
    }
`

export const Prototype = styled.a`
  position: relative;
  height: 515px;
  overflow: hidden;
  border-radius: 32px;
  background: ${props => props.project === "persona" ? "url(/persona/prototype.png)" : "url(/saia/prototype.png)" };
  background-position: center;
  margin-bottom: 50px;
  ${cssShadowDefault};

  .overlay {
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.82);
  }

  .text {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    top: 0; left: 0; bottom: 0; right: 0;

    span {
      font-size: 60px;
      font-weight: 700;
      letter-spacing: 1.28px;
      text-transform: uppercase;
      color: white;
      margin-bottom: 30px;
    }

    .divider {
      width: 335px;
      height: 3px;
      border-radius: 3px;
      background: white;
    }
  }

  @media only screen and (max-width: 1024px) {
    height: 200px;
    border-radius: 24px;
    background-size: cover;
    margin-bottom: 20px;


    .text {
      span {
        font-size: 20px;
        margin-bottom: 10px;
        letter-spacing: 0.43px;

      }

      .divider {
        width: 110px;
        height: 1px;
      }
    }
  }
`;

export const ModelsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .model {
    width: 260px;
    height: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 32px;
    ${cssShadowDefault};

    p {
      margin-top: 18px;
      font-weight: 700;
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .model:not(:last-of-type){
      margin-right: 20px;
    }
  }


  @media only screen and (max-width: 550px) {
    .model {
      width: 100px;
      height: 110px;
      border-radius: 12px;
      padding: 12px;
      margin-right: 0px;

      p {
        margin-top: 8px;
        font-size: 13px;
        text-align: center;
        line-height: initial;
      }
    }
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .model {
    width: 330px;
    height: 422px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 32px;
    padding: 30px 38px 0px 38px;
    ${cssShadowDefault};

    .title {
      font-weight: 700;
      font-size: 16px;
      color: #000000;
      text-transform: uppercase;
      margin-top: 20px;
      margin-bottom: 30px;
    }

    ul {
      list-style: initial;
      color: #62748E;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      padding-left: 16px;

      span {
          font-weight: 700;
      }

      li {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 1240px) {
    .model {
      padding: 30px 40px 0px 40px;
      &:not(:last-of-type) {
        margin-right: 20px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;

    .model {
      width: 100%;
      height: 100%;
      padding: 30px 25px 45px 25px;
      margin-bottom: 20px;

      &:nth-of-type(3) {
        margin-bottom: 0px;
      }

      .title {
        font-size: 20px;
        margin-top: 15px;
        margin-bottom: 20px;
      }

      ul {

        li {
          margin-bottom: 15px;
          font-size: 18px;

          &:last-child {
              margin-bottom: 0;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 550px) {
    .model {
      .title {
        font-size: 15px;
      }

      ul {
        li {
          font-size: 15px;
        }
      }
    }
  }
`;

export const CaseStudiesContainer = styled.div`
  display: flex;
  justify-content: ${props => props.full ? 'center' : 'space-between'};
  margin-bottom: ${props => props.full ? '160px' : 'auto'};

  .case {
    width: ${props => props.full ? '100%' : '490px'};
    height: ${props => props.full ? '490px' : '369px'};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 45px;
    ${cssShadowDefault};

    .img {
      width: 100%;
      flex: 1;
      background-size: cover;

      &.saia {
        background-image: url("saia-preview.png");
      }
      &.persona {
        background-image: url("persona-preview.png");
      }
      &.practice {
        background-image: url("practice-preview.png");
      }
    }
    
    .info {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      padding: 25px 60px 25px 60px;

      p {
        font-size: 28px;
        font-weight: 700;
        color: #62748E;
      }

      .see-more {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0184E8;
        border-radius: 14px;

        &.purple {
          background: #6420F5;
        }

        &.blue {
          background: #566eff;
        }
      }
    }
  }




  /* RESPONSIVE */
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${props => props.full ? '80px' : 'auto'};

    .case {
      width: 100%;
      height: 380px;
      border-radius: 30px;
      &:nth-of-type(2) {
        margin-top: 20px;
      }

      .info {
        padding: 17px 40px 17px 40px;

        p {
          font-size: 22px;
        }

        .see-more {
          width: 35px;
          height: 35px;
          border-radius: 10px;
        }
      }
    }
  }  

  @media only screen and (max-width: 550px) {
    .case {
      height: 252px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const StudyItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 32px;
    padding: 30px 40px 0px 40px;
    margin-bottom: ${props => props.last ? "70px" : "50px"};
    ${cssShadowDefault};

    > .ux-process {
      margin-top: 38px;
      margin-bottom: 60px;
    }

    .tag {
      align-self: flex-start;
      border-radius: 15px;
      padding: 11px 18px 7px 18px;
      background: #E7DDFD;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      color: #5A03B9;
      margin-bottom: 30px;
      
      &.blue {
        background: #DBF0FF;
        color: #0084E8;
      }
    }

    .text {
      width: 830px;
      font-size: 18px;
      letter-spacing: 0.38px;
      line-height: 22px;
      text-align: center;
      margin-bottom: 60px;
      
      &.solo {
        margin-top: 20px;
        margin-bottom: 50px;
      }

      .bold {
        font-weight: 700;
      }
    }

    .stats {
      display: flex;
      justify-content: space-between;

      &.below-stats {
        width: 715px;
        margin-top: 60px;
      }

      .stat {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        .number {
          font-size: 60px;
          font-weight: 700;
          color: #62748E;
          letter-spacing: 1.28px;
          margin-bottom: 4px;
        }

        .label {
          font-size: 18px;
          font-weight: 500;
          color: #6E819C;
          letter-spacing: 0.38;
        }
      }
    }

    .content {
      width: 850px;
      margin-bottom: ${props => props.mb ? props.mb : "80px"};

      & > .mask {
        display: flex;
        justify-content: center;
      }

      /* MARKET RESEARCH */
      &.stats {

        .data {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;

          .chart {
            display: flex;
            align-items: center;
            margin-bottom: 12px;

            .label {
              font-size: 12px;
              font-weight: 700;
              color: #62748E;
              letter-spacing: 0.26px;
              margin-right: 15px;
            }

            .result {
              font-size: 12px;
              font-weight: 700;
              color: #62748E;
              letter-spacing: 0.26px;
              margin-left: 10px;

              &.ideas {
                margin-left: 12px;
              }
            }
          }
        }
      }

      /* RESULTS */
      &.results {
        .stats {
          &.primary {
            justify-content: center;
            margin-bottom: 83px;
          }

          &.medium {
            margin-bottom: 100px;
            
            .number {
              font-size: 50px;
            }
          }
        }

        .lessons {
          display: flex;
          justify-content: space-around;

          .model {
            width: 330px;
            display: flex;
            flex-direction: column;
            padding: 0px 5px 0px 38px;

            .title {
                font-weight: 700;
                font-size: 16px;
                color: #62748E;
                text-transform: uppercase;
                margin-top: 20px;
                margin-bottom: 30px;
            }

            ul {
                list-style: initial;
                color: #62748E;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
                padding-left: 16px;

                span {
                    font-weight: 700;
                }

                li {
                    margin-bottom: 20px;

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }
          }
        }
      }

      /* STACK */
      &.stacks {
        display: flex;
        justify-content: space-between;

        .stack {
          display: flex;
          flex-direction: column;
          align-items: center;

          .title {
            font-size: 16px;
            font-weight: 700;
            color: #62748E;
            text-transform: uppercase;
            margin-bottom: 30px;
          }

          ul {
            li {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 25px;

              &:last-of-type {
                margin-bottom: 0;
              }

              .logo {
                max-width: 50px;
                margin-bottom: 10px;
              }

              .label {
                max-width: 120px;
                font-size: 16px;
                font-weight: 500;
                color: #62748E;
                text-align: center;
              }
            }
          }
        }

      }

      /* QUOTES */

      &.quotes {
        display: flex;
        flex-direction: column;
        align-items: center;

        .quotes-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 35px;

          .quote {
            width: 366px;
            display: flex;
            align-items: flex-start;

            .icon {
              margin-right: auto;
            }

            p {
              width: 354px;
              font-size: 20px;
              letter-spacing: 0.43px;
              text-align: center;
              margin-left: -34px;
              margin-top: 10px;
            }
          }
        }

        .mask {
          overflow: hidden;
          border-radius: 10px;
        }
      }
    }

    @media only screen and (max-width: 1024px) {
      padding: 15px 25px 45px 25px;
      margin-bottom: ${props => props.last ? "35px" : "20px"};

      & > .ux-process {
        margin-top: 15px;
        margin-bottom: 20px;

        & + img {
          max-width: 490px;
        }
      }

      .text {
        width: 100%;
        font-size: 18px;
        margin-bottom: 30px;
        text-align: left;

        &.solo {
          margin-top: 15px;
          margin-bottom: -15px;
        }
      }

      .tag {
        align-self: flex-start;
        padding: 8px 13px 5px 13px;
        font-size: 15px;
        margin-bottom: 15px;

        & + .solo {
          margin-top: 0px;
        }
      }

      .stats {
        justify-content: center;

        &.below-stats {
          width: 100%;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 40px;

          .stat {
            margin-bottom: 0;
          }
        }

        &.content {
          width: 100%;
          margin-bottom: 0px;

          &.chart {
            .label {
              width: 58px;
            }
          }
        }

        .stat {
          margin-bottom: 20px;
          .number {
            font-size: 40px;
            letter-spacing: 0.40px;
            margin-bottom: 12px;
          }

          .label {
            font-size: 18px;
            letter-spacing: 0.46px;

            &.full-width {
              max-width: 80%;
              line-height: 25px;
            }
          }
        }
      }

      .content {
        width: 100%;
        margin-bottom: 0px;

        &.stats {
          .data {
            align-items: center;
            .chart {
              margin-bottom: 5px;
              .label {
                width: 90px;
                font-size: 17px;
                line-height: 20px;
                text-align: right;
              }

              .result {
                font-size: 17px;
              }
            }
          }
        }

        &.stacks {
          flex-direction: column;

          .stack {
            margin-bottom: 70px;

            &:last-of-type {
              margin-bottom: 0;
            }

            .title {
              align-self: flex-start;
              font-size: 18px;
              margin-bottom: 15px;
            }

            ul {
              width: 100%;
              display: flex;
              align-items: flex-end;
              li {
                margin-bottom: 0;
                margin-right: 50px;

                &:last-of-type {
                  margin-right: 0;
                }

                .logo {
                  max-height: 50px;
                  margin-bottom: 10px;
                }

                .label {
                  font-size: 20px;
                }
              }
            }
          }
        }

        &.quotes {
          width: 100%;

          .quotes-container {
            width: 100%;
            display: flex;
            margin-bottom: 20px;

            .quote {
              justify-content: center;
              .icon {
                margin-right: 0;
              }

              p {
                width: 250px;
                font-size: 18px;
                margin-top: 2px;
                margin-left: 0px;
                br {
                  display: none;
                }
              }
            }
          }
        }

        &.results {
        .stats {
          &.primary {
            margin-bottom: 30px;

            .stat {
              margin-bottom: 0px;
              p {
                line-height: initial;
              }
            }
          }

          &.medium {
            display: flex;
            justify-content: center;
            flex-direction: row;
            flex-wrap: wrap;
            margin-bottom: 45px;

            .stat {
              width: 50%;
              margin-bottom: 0px;
              justify-content: flex-start;

              &:last-of-type {
                margin-top: 30px;
              }
            }
            
            .number {
              margin-bottom: 5px;
              font-size: 28px;
              line-height: initial;
            }
          }
        }

        .lessons {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          .model {
            width: 100%;
            height: 100%;
            padding: 30px 25px 0px 25px;
            margin-bottom: 0px;

            &:nth-of-type(3) {
              margin-bottom: 0px;
            }

            .title {
              font-size: 18px;
              margin-top: 0px;
              margin-bottom: 20px;
            }

            ul {

              li {
                margin-bottom: 15px;
                font-size: 18px;

                &:last-child {
                    margin-bottom: 0;
                }
              }
            }
          }

      }

      }
    }

    @media only screen and (max-width: 550px) {

      .text {
        font-size: 15px;
      }

      .tag {
        font-size: 10px;
      }

      .stats {
        flex-direction: column;
        .stat {
          .number {
            font-size: 40px;
            letter-spacing: 0.26px;
          }

          .label {
            font-size: 12px;
            letter-spacing: 0.26px;
            max-width: 143px;

            &.full-width {
              max-width: 100%;
              line-height: 15px;
            }
          }
        }
      }

      .content {

        &.stats {
          .data {
            .chart {
              .label {
                width: 58px;
                font-size: 12px;
                text-align: right;
                line-height: 15px;
              }

              .result {
                font-size: 12px;
              }
            }
          }
        }

        &.stacks {
          .stack {
            margin-bottom: 33px;
            .title {
              font-size: 12px;
            }

            ul {
              li {
                margin-right: 16px;
                .logo {
                  max-height: 30px;
                  margin-bottom: 5px;
                }
                .label {
                  font-size: 12px;
                }
              }
            }
          }
        }

        &.quotes {
          .quotes-container {
            .quote {
              p {
                width: 108px;
                font-size: 12px;
              }
            }
          }
        }

        &.results {
        .stats {
          &.primary {
            .stat {
              p {
                line-height: initial;
              }
            }
          }

          &.medium {
            .number {
              margin-bottom: 5px;
              font-size: 24px;
            }
          }
        }

        .lessons {
          .model {
            .title {
              font-size: 15px;
            }

            ul {
              li {
                font-size: 15px;
              }
            }
          }

      }
    }
`

export const Item = styled.img`
    width: ${props => props.width || "100%"};
    height: ${props => props.height ? props.height : props.productImage ? "auto" : "100%"};
    margin-bottom: ${props => props.mb || "auto"};
`

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: white;
  border-radius: 45px;
  padding: 100px 0px 100px 0px;
  ${cssShadowDefault};

  .skill {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 33%;
    height: 170px;

    &:nth-child(-n+3) {
      margin-bottom: 60px;
    }

    &.ux .icon {
      background: #FFD9C7;
    }

    &.psy .icon {
      background: #FFEFB3;
    }

    &.ui .icon {
      background: #CCD5FF;
    }

    &.market .icon {
      background: #B6EDDE;
    }

    &.eng .icon {
      background: #E1C8EF;
    }

    &.entre .icon {
      background: #B8E8FA;
    }

    .icon {
      width: 121px;
      height: 121px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 23px;
    }

    p {
      font-weight: 700;
      color: #62748E;
    }
  }

  /* RESPONSIVE */
  @media only screen and (max-width: 1024px) {
    justify-content: space-around;
    border-radius: 30px;
    padding: 30px;

    &:nth-child(-n+3) {
      margin-bottom: 0px;
    }


    .skill {
      width: 50%;
      height: 91px;

      .icon {
        width: 64px;
        height: 64px;
        border-radius: 12px;
      }

       p {
         font-size: 13px;
       }
    }
  }
`;

export const Divider = styled(motion.div, { excludeProps: ['blue'] })`
  width: 300px;
  height: 4px;
  border-radius: 5px;
  background: ${props => props.blue ? '#D1E6FF' : '#E7DDFD' };
  margin: 90px auto 90px auto;

  @media only screen and (max-width: 1024px) {
    margin: 40px auto 40px auto;
  }
`;

