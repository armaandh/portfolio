import React, { Component } from 'react'
import { Link, Events, scrollSpy } from 'react-scroll'
import styled from '@emotion/styled';
import { withSize } from 'react-sizeme'

import { cssShadowDefault } from '../../utils/theme';

const StickyContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 95vw;
  left: 0;
  right: 0;
  margin-top: -158px;
  margin-left: auto;
  margin-right: auto;
  background: white;
  padding: 25px 0px 25px 0px;
  border-radius: 20px;
  ${cssShadowDefault}

  .links {
    display: flex;

    a {
      font-size: 18px;
      font-weight: 500;
      color: #66768C;
      text-transform: uppercase;

      &:not(:last-of-type) {
        margin-right: 20px;
      }

      &.active {
        position: relative;
        &:after {
          content: '';
          position: absolute;
          display: block;
          width: 100%;
          height: 5px;
          bottom: -25px;
          border-radius: 15px;
          background: ${props => props.blue ? '#2CBCF0' : '#8519FB' };
        }
      }
    }
  }

  &.sticky {
    position: fixed;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    width: 100vw;
    z-index: 100;
    top: 0;
    margin-top: 0px;
  }

  @media only screen and (max-width: 1024px) {
    width: 100vw;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    border-radius: 0px;
    margin-top: -92px;
    padding: 20px 0px 20px 0px;
    -webkit-box-align: center;
    align-items: center;


    .links {
      display: flex;
      padding: 0px 16px 0px 16px;
      a {
        flex: 0 0 auto;
        font-size: 12px;
        margin-right: auto;

        &:not(:last-of-type) {
          margin-right: 16px;
        }

        &.active {
          &:after {
            height: 2px;
            bottom: -20px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 550px) {
    justify-content: flex-start;
  }
`;

class Sticky extends Component {
  constructor(props) {
    super(props)
    this.stickyRef = React.createRef()
    this.state = {
      sticky: false
    }
  }

  componentDidMount () {
      window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount () {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll (event) {
    const isResponsive = this.props.size.width < 1024
    const isMobile = this.props.size.width < 550
    const stickyScroll = window.scrollY;
    const threshold = isResponsive ? isMobile ? this.props.mobileThreshold : this.props.responsiveThreshold : this.props.threshold;
    console.log(stickyScroll)
    if (stickyScroll < threshold && this.state.sticky === true) {
      this.setState({ sticky: false })
    } else if (stickyScroll > threshold && this.state.sticky === false) {
      this.setState({ sticky: true })
    }
  }
  handleSetActive (to) {
    // console.log(to)
    const link = this.stickyRef.current.querySelector(`.${to}`)
    link.scrollIntoView(false)
  }
  render () {
    const isResponsive = this.props.size.width < 1024
    const normalOffset = isResponsive ? -80 : -120
    const specialOffset = isResponsive ? -320 : -400
  	return (
      <StickyContainer blue={this.props.blue} className={`${this.state.sticky ? 'sticky' : ''}`} ref={this.stickyRef}>
        <div className="links">
          {this.props?.items.map((name, i) => (
            <Link key={`${name}${i}`} activeClass="active" className={name} to={name} spy={true} smooth={true} offset={i === 1 ? specialOffset : normalOffset} duration={500} onSetActive={this.handleSetActive.bind(this)}>
              {name}
            </Link>
          ))}
        </div>
      </StickyContainer>
	  )
  }
}

export const StickyNav = withSize()(Sticky)
