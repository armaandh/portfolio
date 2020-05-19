import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Item } from '../Boxes';

const images = [
  "/experiments/calendar-app.png",
  "/experiments/save-mockup.png",
  "/experiments/meditation-app.png",
  "/experiments/search-1.gif",
  "/experiments/flower-plant-app.png",
  "/experiments/insurance-app-web.png",
  "/experiments/banking-1.png",
  "/experiments/financial-app-1.png",
  "/experiments/insurance-credit-app.png",
  "/experiments/components-1.png",
  "/experiments/chart-1.png",
  "/experiments/calendar.png",
  "/experiments/bar-1.png",
  "/experiments/menu-1.gif",
  "/experiments/round-1.png",
];

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      photoIndex: props.grid ? images.indexOf(props.src) : 0,
    };
  }

  render() {
    const { isOpen, photoIndex } = this.state
    const { grid, src, title, width, height, productImage, className , mb } = this.props
    const mainSrc = grid ? images[photoIndex] : src
    const nextSrc = grid ? images[(photoIndex + 1) % images.length] : undefined
    const prevSrc = grid ? images[(photoIndex + images.length - 1) % images.length] : undefined
    const onMovePrevRequest = grid ? () => this.setState({ photoIndex: (photoIndex + images.length - 1) % images.length, }) : undefined
    const onMoveNextRequest = grid ?  () => this.setState({ photoIndex: (photoIndex + 1) % images.length, }) : undefined
    return (
      <>
        <Item
          src={src}
          onClick={() => this.setState({ isOpen: true })}
          width={width}
          height={height}
          mb={mb}
          productImage={productImage}
          className={className}
        />
        {isOpen && (
          <Lightbox
            imageTitle={title}
            reactModalProps={{
              bodyOpenClassName: "overflow"
            }}
            onCloseRequest={() => this.setState({ isOpen: false })}
            mainSrc={mainSrc}
            nextSrc={nextSrc}
            prevSrc={prevSrc}
            onMovePrevRequest={onMovePrevRequest}
            onMoveNextRequest={onMoveNextRequest}
          />
        )}
      </>
    );
  }
}