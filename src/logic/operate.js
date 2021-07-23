import Big from 'big.js';

const operate = (num1, num2, op) => {
  const big1 = Big(num1);
  const big2 = Big(num2);
  let result;
  switch (op) {
    case '+':
      result = big1.plus(big2);
      break;