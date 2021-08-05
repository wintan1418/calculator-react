import React from 'react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import App from '../App';
import ButtonShape from '../ButtonShape';

Enzyme.configure({ adapter: new Adapter() });

describe('ButtonShape Component', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders correctly', () => {
    const app = create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });

  it('Passes the clickHandler correctly to ButtonShape', () => {
    const app = Enzyme.shallow(<App />);
    const instance = app.instance();

    expect(app.find(ButtonShape).get(0).props.clickHandler).toEqual(instance.handleClick);
  });

  it('Updates the correctly when clickHandler is invoked', () => {
    const app = Enzyme.shallow(<App />);
    const instance = app.instance();

    instance.handleClick('1');

    expect(app.state()).toEqual({ next: '1', operation: null, total: null });
  });

  it('Returns the correct value when using the `result` attribute getter', () => {
    const app = Enzyme.shallow(<App />);
    const instance = app.instance();

    instance.setState({ next: '2', operation: '+', total: '9' });
    expect(instance.result).toEqual('2+9');

    instance.setState({ next: null, operation: null, total: null });
    expect(instance.result).toEqual('');
  });
});
