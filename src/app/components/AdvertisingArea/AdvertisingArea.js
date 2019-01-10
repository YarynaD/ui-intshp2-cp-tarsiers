import React from 'react';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';

export default class AdvertisingArea extends React.Component {
  constructor() {
    super();
    this.state = { htmlSnipet: '' };
  }

  componentDidMount() {
    HttpService.get(appConfig.apiResources.baner).then(response => {
      this.setState({ htmlSnipet: response.htmlSnipet });
    });
  }

  createMarkup = () => {
    const { htmlSnipet } = this.state;

    return { __html: `<p>${htmlSnipet}</p>` };
  };

  render() {
    const { htmlSnipet } = this.state;

    return htmlSnipet ? <div>{htmlSnipet}</div> : null;
  }
}
