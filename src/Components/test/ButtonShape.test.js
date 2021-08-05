import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '../Button';
import ButtonShape from '../ButtonShape';

Enzyme.configure({ adapter: new Adapter() });

describe('ButtonShape Component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonShape clickHandler={() => null} />, div);
  });

  it('renders correctly', () => {
    const tree = create(<ButtonShape clickHandler={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Passes the clickHandler correctly to all rendered buttons', () => {
    const clickHandler = () => null;

    const panel = Enzyme.shallow(<ButtonShape clickHandler={clickHandler} />);

    panel.find(Button).forEach((button) => {
      expect(button.get(0).props.clickHandler).toEqual(clickHandler);
    });
  });
});
