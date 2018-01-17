import React, { Component } from 'react';
import List from './list';
import store from '../reducers/store';
import { setFilter } from '../actions/index';

class FilterList extends Component {
  constructor() {
    super();

    this.state = store.getState();

    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  updateFilter(event) {
    store.dispatch(setFilter(event.target.value));
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
