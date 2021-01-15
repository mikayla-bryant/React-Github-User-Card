import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/mikayla-bryant').then((res) => {
      console.log(res.data);
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div>
        <Card data={this.state.data} />
      </div>
    );
  }
}

export default CardList;
