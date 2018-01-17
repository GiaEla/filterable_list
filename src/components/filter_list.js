import React, { Component } from 'react';
import List from './list';

class FilterList extends Component {
  constructor() {
    super();

    this.state = {
      filterBy: ''
    };
  }

  updateFilter(event) {
    this.setState({filterBy: event.target.value});
  }

  render() {
    const { filterBy } = this.state;
    const frameworks = ['React', 'Angular', 'Vue', 'Ember'];

    return (
      <div>
        <input type="text" onChange={event => this.updateFilter(event)} />
        <List items={frameworks} filterBy={filterBy} />
      </div>
    );
  }
}

export default FilterList;
