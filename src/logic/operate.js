import Big from 'big.js';

const operate = (num1, num2, op) => {
  const big1 = Big(num1);
  const big2 = Big(num2);