import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { withTranslation } from 'react-i18next';

import { Item } from '../Boxes';

class Image extends Component {
  constructor(props) {
    super(props);
    const { t, grid } = props

    const images = grid ? [
      { title: t('practice.images.title1'), src: "/experiments/calendar-app.png"},
      { title: t('practice.images.title2'), src: "/experiments/save-mockup.png"},
      { title: t('practice.images.title3'), src: "/experiments/meditation-app.png" },
      { title: t('practice.images.title4'), src: "/experiments/search-1.gif"},
      { title: t('practice.images.title5'), src: "/experiments/flower-plant-app.png"},
      { title: t('practice.images.title6'), src: "/experiments/insurance-app-web.png"},
      { title: t('practice.images.title7'), src: "/experiments/banking-1.png" },
      { title: t('practice.images.title8'), src: "/experiments/financial-app-1.png"},
      { title: t('practice.images.title9'), src: "/experiments/insurance-credit-app.png"},
      { title: t('practice.images.title10'), src: "/experiments/components-1.png"},
      { title: t('practice.images.title11'), src: "/experiments/chart-1.png"},
      { title: t('practice.images.title12'), src: "/experiments/calendar.png"},
      { title: t('practice.images.title13'), src: "/experiments/bar-1.png"},
      { title: t('practice.images.title14'), src: "/experiments/menu-1.gif"},
      { title: t('practice.images.title15'), src: "/experiments/round-1.png"},
    ] : null;

    this.state = {
      isOpen: false,
      images,
      photoIndex: grid ? images.findIndex((file) => file.src === props.src) : 0,
    };
  }

  render() {
    const { isOpen, images, photoIndex } = this.state
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

export default withTranslation()(Image)
