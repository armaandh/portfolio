import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Item } from '../Boxes';

const images = [
  { title: "Calendar software", src: "/experiments/calendar-app.png"},
  { title: "Blood donation app", src: "/experiments/save-mockup.png"},
  { title: "Meditation app", src: "/experiments/meditation-app.png" },
  { title: "Search micro-interaction", src: "/experiments/search-1.gif"},
  { title: "Flower pots e-commerce app", src: "/experiments/flower-plant-app.png"},
  { title: "Insurance management software", src: "/experiments/insurance-app-web.png"},
  { title: "Finance management software", src: "/experiments/banking-1.png" },
  { title: "Finance management app", src: "/experiments/financial-app-1.png"},
  { title: "Insurance & Credit management app", src: "/experiments/insurance-credit-app.png"},
  { title: "Project management software components", src: "/experiments/components-1.png"},
  { title: "Chart component", src: "/experiments/chart-1.png"},
  { title: "Calendar component", src: "/experiments/calendar.png"},
  { title: "Bar chart component", src: "/experiments/bar-1.png"},
  { title: "Menu micro-interaction", src: "/experiments/menu-1.gif"},
  { title: "Round chart component", src: "/experiments/round-1.png"},
];

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      photoIndex: props.grid ? images.findIndex((file) => file.src === props.src) : 0,
    };
  }

  render() {
    const { isOpen, photoIndex } = this.state
    const { grid, src, title, width, height, productImage, className , mb } = this.props
    const imageTitle = grid ? images[photoIndex].title : title
    const mainSrc = grid ? images[photoIndex].src : src
    const nextSrc = grid ? images[(photoIndex + 1) % images.length].src : undefined
    const prevSrc = grid ? images[(photoIndex + images.length - 1) % images.length].src : undefined
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
            imageTitle={imageTitle}
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