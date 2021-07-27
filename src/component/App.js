/* eslint-disable react/sort-comp */
import './App.css';
import React from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import ButtonShape from './ButtonShape';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  get result() {
    const { next, total, operation } = this.state;

    return `${next || ''}${total || ''}${operation || ''}`;
  }

  handleClick(name) {
    this.setState(state => calculate(state, name));
  }

  render() {
    return (
      <div className="calculator">
        <Display result={this.result} />
        <ButtonShape clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
