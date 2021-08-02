import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import './ButtonPanel.css';

const ButtonShape = ({ clickHandler }) => (
  <div className="button-shape">
    <div>
      <Button color="E0E0E0" name="AC" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="+/-" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="%" clickHandler={clickHandler} />
      <Button name="÷" clickHandler={clickHandler} />
    </div>

    <div>
      <Button color="E0E0E0" name="7" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="8" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="9" clickHandler={clickHandler} />
      <Button name="X" clickHandler={clickHandler} />
    </div>

    <div>
      <Button color="E0E0E0" name="4" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="5" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="6" clickHandler={clickHandler} />
      <Button name="-" clickHandler={clickHandler} />
    </div>

    <div>
      <Button color="E0E0E0" name="1" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="2" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="3" clickHandler={clickHandler} />
      <Button name="+" clickHandler={clickHandler} />
    </div>

    <div>
      <Button color="E0E0E0" name="0" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="." clickHandler={clickHandler} />
      <Button name="=" clickHandler={clickHandler} />
    </div>
  </div>
);
ButtonShape.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonShape;
