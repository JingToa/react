require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let imgsData = require('../data/imgData.json');

imgsData = (function genImageURL(imageDatasArry) {
  for(let i = 0; i< imageDatasArry.length; i++) {
    let singleImageData = imageDatasArry[i];
    singleImageData.imgURL = require(`../images/${singleImageData.filename}`);
    imageDatasArry[i] = singleImageData;
  }
  return imageDatasArry;
})(imgsData);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
