import React, { Component } from "react"
import sizeMe from 'react-sizeme';
import StackGrid, { transitions } from "react-stack-grid";

import Image from './Image';

const { scaleDown } = transitions;

class Grid extends Component {
  render() {
    const { 
      size: { 
        width
      } 
    } = this.props;
    return (
      <StackGrid
        className="grid"
        columnWidth={width <= 768 ? '100%' : 300}
        enableSSR={true}
        gutterWidth={39}
        gutterHeight={39}
        appearDelay={100}
        monitorImagesLoaded={true}
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
      >
        <div className="grid-item" key="key1">
          <Image
            grid
            src="/experiments/calendar-app.png"
          />
        </div>
        <div className="grid-item" key="key2">
          <Image
            grid
            src="/experiments/save-mockup.png"
          />
        </div>
        <div className="grid-item" key="key9">
          <Image
            grid
            src="/experiments/meditation-app.png"
          />
        </div>
        <div className="grid-item" key="key8">
          <Image
            grid
            src="/experiments/search-1.gif"
          />
        </div>
        <div className="grid-item" key="key7">
          <Image
            grid
            src="/experiments/flower-plant-app.png"
          />
        </div>
        <div className="grid-item" key="key10">
          <Image 
            grid
            src="/experiments/insurance-app-web.png"
          />
        </div>
        <div className="grid-item" key="key6">
          <Image 
            grid
            src="/experiments/banking-1.png"
          />
        </div>
        <div className="grid-item" key="key5">
          <Image
            grid
            src="/experiments/financial-app-1.png"
          />
        </div>
        <div className="grid-item" key="key3">
          <Image
            grid
            src="/experiments/insurance-credit-app.png"
          />
        </div>
        <div className="grid-item" key="key4">
          <Image
            grid
            src="/experiments/components-1.png"
          />
        </div>
        <div className="grid-item" key="key14">
          <Image
            grid
            src="/experiments/chart-1.png"
          />
        </div>
        <div className="grid-item" key="key13">
          <Image
            grid
            src="/experiments/calendar.png"
          />
        </div>
        <div className="grid-item" key="key15">
          <Image
            grid
            src="/experiments/bar-1.png"
          />
        </div>
        <div className="grid-item" key="key12">
          <Image
            grid
            src="/experiments/menu-1.gif"
          />
        </div>
        <div className="grid-item" key="key16">
          <Image
            grid
            src="/experiments/round-1.png"
          />
        </div>
      </StackGrid>
    );
  }
}

export default sizeMe()(Grid)