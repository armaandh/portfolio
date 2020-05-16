import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Item } from '../Boxes';

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
];

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
        <Item
          src={this.props.src}
          onClick={() => this.setState({ isOpen: true })}
          width={this.props.width}
          height={this.props.height}
          mb={this.props.mb}
          productImage={this.props.productImage}
          className={this.props.className}
        />
        {isOpen && (
          <Lightbox
            imageTitle={this.props.title}
            reactModalProps={{
              bodyOpenClassName: "overflow"
            }}
            mainSrc={this.props.src}
            onCloseRequest={() => this.setState({ isOpen: false })}
          />
        )}
      </>
    );
  }
}