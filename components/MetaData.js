import React, {Component} from 'react';
import Moment from 'react-moment';
import {Config} from '../config.js';
import {Tag} from '../utilities';

class MetaData extends Component {
  state = {
    metaData: [],
  };

  async componentDidMount() {
    const metaRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/tags?post=${this.props.id}`
    );
    const metaData = await metaRes.json();

    this.setState({
      metaData,
    });
  }

  render() {
    const {metaData} = this.state;
    return (
      <div className="meta_tags">
        <div className="date">
          <Moment format="MMMM DD YYYY">{this.props.date}</Moment>
        </div>
        <div className="tag_name">
          <Tag />
          {metaData.map((meta, index) => (
            <span className="skill meta_tag" key={index}>
              {meta.name}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default MetaData;
