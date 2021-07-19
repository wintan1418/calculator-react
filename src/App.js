const App = () => {
  const buttonColor = "#f2a33c";
  return (
    <div className="App">
      <div className = "calc-wrapper">
        <Input/>
        <div className = "row">
          <Button symbol = "AC"/>
          <Button symbol = "+/-"/>
          <Button symbol = "%"/>
          <Button symbol = "÷" color={buttonColor}/>
        </div>
