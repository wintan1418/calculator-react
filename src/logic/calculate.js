const calculate = ({total = null,next = null,operation = null}, button) => {
  if (button === 'AC') {
    return {total:null,next:null, operation:null};
  } if (button === '=') {
  } if (next && operation && total) {
     return {total: operate(next,operation,total), operation:null,next:null};

  }
} else if (isOperation (button)) {
  if (button === '+/-') {
    if (total) {
      return { operation, next, total: operate(total, '-1', 'X') };
    } if (next) {
      return { next: operate(next, '-1', 'X'), total: null, operation: null };
    }
  } else if (button === '%') {
    if (total) {
      return { next, operation, total: operate(next, operate(total, '100', '÷'), 'X') };
    }
  } else if (total && operation && next) {
    return {
      next: operate(next, operation, total),
      operation: button,
      total: null,
    };

  }
}