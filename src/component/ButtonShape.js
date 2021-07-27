import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const ButtonShape = ({clickHandler}) => (
  <div className = "button-shape">
    <div>
      <Button color="E0E0E0" name="AC" clickHandler={clickHandler} />
      <Button color="E0E0E0" name="+/-" clickHandler={clickHandler} />
      <Button  color="E0E0E0"name="%" clickHandler={clickHandler}/>
      <Button name="÷" clickHandler={clickHandler}/>
    </div>

    <div>
      <Button color="E0E0E0" name="7"clickHandler={clickHandler} />
      <Button color="E0E0E0" name="8"clickHandler={clickHandler} />
      <Button color="E0E0E0"name="9"clickHandler={clickHandler} />
      <Button name="X" />
    </div>

    <div>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>

    <div>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
    </div>

    <div>
      <Button name="0" />
      <Button name="." />
      <Button name="=" />
    </div>
  </>
);

export default ButtonShape;
