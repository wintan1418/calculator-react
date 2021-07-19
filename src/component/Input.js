import './Input.css';

const Input = ({ text, result }) => (
  <div className="input-wrapper">
    <div className="result">
      <h1>
        {result}
        WINTAN
      </h1>
    </div>

    <div className="text">
      <h3>
        {text}
        result
      </h3>
    </div>
  </div>

);

export default Input;
