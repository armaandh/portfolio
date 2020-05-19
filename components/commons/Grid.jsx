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
            title="Calendar software"
            src="/experiments/calendar-app.png"
          />
        </div>
        <div className="grid-item" key="key2">
          <Image
            grid
            title="Blood donation app"
            src="/experiments/save-mockup.png"
          />
        </div>
        <div className="grid-item" key="key9">
          <Image
            grid
            title="Meditation app"
            src="/experiments/meditation-app.png"
          />
        </div>
        <div className="grid-item" key="key8">
          <Image
            grid
            title="Search micro-interaction"
            src="/experiments/search-1.gif"
          />
        </div>
        <div className="grid-item" key="key7">
          <Image
            grid
            title="Flower pots e-commerce app"
            src="/experiments/flower-plant-app.png"
          />
        </div>
        <div className="grid-item" key="key10">
          <Image 
            grid
            title="Insurance management software"
            src="/experiments/insurance-app-web.png"
          />
        </div>
        <div className="grid-item" key="key6">
          <Image 
            grid
            title="Finance management software"
            src="/experiments/banking-1.png"
          />
        </div>
        <div className="grid-item" key="key5">
          <Image
            grid
            title="Finance management app"
            src="/experiments/financial-app-1.png"
          />
        </div>
        <div className="grid-item" key="key3">
          <Image
            grid
            title="Finance management app"
            src="/experiments/insurance-credit-app.png"
          />
        </div>
        <div className="grid-item" key="key4">
          <Image
            grid
            title="Project management software components"
            src="/experiments/components-1.png"
          />
        </div>
        <div className="grid-item" key="key14">
          <Image
            grid
            title="Chart component"
            src="/experiments/chart-1.png"
          />
        </div>
        <div className="grid-item" key="key13">
          <Image
            grid
            title="Calendar component"
            src="/experiments/calendar.png"
          />
        </div>
        <div className="grid-item" key="key15">
          <Image
            grid
            title="Bar chart component"
            src="/experiments/bar-1.png"
          />
        </div>
        <div className="grid-item" key="key12">
          <Image
            grid
            title="Menu micro-interaction"
            src="/experiments/menu-1.gif"
          />
        </div>
        <div className="grid-item" key="key16">
          <Image
            grid
            title="Round chart component"
            src="/experiments/round-1.png"
          />
        </div>
      </StackGrid>
    );
  }
}

export default sizeMe()(Grid)