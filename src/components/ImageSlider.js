// Bomb Component Code Goes Here
import React from 'react';
export default class ImageSlider extends React.Component {
  constructor(){
    super();
    this.state = {
      currentSlideIndex: 0
    }
  }

}
export default ImageSlider;
render(){
  return (
    <h1> I am on slide {this.sate.currentSlideIndex}</h1>
  )
}
}
