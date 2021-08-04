import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Display from './Display';

Enzyme.configure({ adapter: new Adapter() });

describe('Display Component', () => {
  it('Pushes without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Display />, div);
  });
  test('Pushes the value to the  `result` prop', () => {
    const container = Enzyme.shallow(<Display result="blah blah" />);

    expect(container.text()).toEqual('blah blah');
  });
});
