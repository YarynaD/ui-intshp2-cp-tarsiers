import React, { Component } from 'react';
import Slider from '../Slideshow/sliderComponents/Slider';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';

export default class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = { slides: [] };
  }

  componentDidMount = () => {
    HttpService.get(appConfig.apiResources.promotions).then(myJson => {
      this.setState({ slides: myJson.slides });
    });
  };

  render() {
    const { slides } = this.state;

    return <Slider slides={slides} />;
  }
}