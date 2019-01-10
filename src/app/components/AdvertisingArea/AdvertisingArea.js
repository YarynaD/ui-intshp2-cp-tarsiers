import React from 'react';
import axios from 'axios';
import appConfig from '../../../config/appConfig';

export default class PersonList extends React.Component {
  constructor() {
    super();
    this.state = { advertice: [] };
  }

  // createMarkup = () => {
  //     return {__html: '<div class="ext">Hello!</div>'};
  // };

  componentDidMount() {
    // this.serverRequest = axios.get(appConfig.apiResources.promotions).then(res => {
    //   const advertice = res.data;

    //   this.setState({ advertice });
    axios.get(appConfig.apiResources.promotions).then(myJson => {
      this.setState({ promotions: myJson.slides });
    });
  }

  //   HttpService.get(appConfig.apiResources.promotions).then(myJson => {
  //     this.setState({ promotions: myJson.slides });
  //   });
  // };

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }

  render() {
    return (
      <div>
        {this.state.advertice.map(baner => (
          <div>{baner.price}</div>
        ))}
      </div>
    );
  }
}
