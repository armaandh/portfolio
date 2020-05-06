import styled from '@emotion/styled';
import { motion } from "framer-motion";

export const Button = styled(motion.a, { excludeProps: ['fullProcess', 'blue'] })`
  max-width: 510px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.blue ? "#0084E8" :  "#6222F5"};
  border-radius: 32px;
  margin: 100px auto 50px auto;
  padding: 38px 40px 36px 40px;
  box-shadow: 0 5px 34px 3px ${props => props.blue ? "hsla(206, 100%, 45%, 0.4)" : "hsla(258, 91%, 55%, 0.4)" };

  .text {
    font-size: 28px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    margin-top: 4px;
    margin-right: 26px;
  }

  .remove {
    display: none;
  }

 @media only screen and (max-width: 1024px) {
    max-width: 300px;
    border-radius: 15px;
    margin: 40px auto 50px auto;
    padding: 21px 20px 17px 20px;

    .text {
      font-size: 15px;
      letter-spacing: 0.28px;
      margin-top: 0px;
    }
  }
`

export const Progress = styled.div`
  width: 250px;
  height: 23px;
  overflow: hidden;
  background: #F4F4F4;
  border-radius: 11px;

  .percent {
    width: ${props => props.percent ? (props.percent/100*250) + "px" : "50px" };
    height: 100%;
    background: #8519FB;
    border-radius: 11px;
  }

  @media only screen and (max-width: 1024px) {
    width: 170px;
    height: 18px;

    .percent {
      width: ${props => props.percent ? (props.percent/100*170) + "px" : "50px" };
    }
  }
`;
