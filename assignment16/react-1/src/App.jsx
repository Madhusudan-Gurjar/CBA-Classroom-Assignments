import AgeStatus from "./Components/AgeStatus";
import FruitList from "./Components/FruitList";
import Message from "./Components/Message";
import Title from "./Components/Title";
import Description from "./Components/Description";
import LoginStatus from "./Components/LoginStatus";
function App() {
  const name = "Madhusudan";
  const age = 22;

  return (
    <div>
      <h2>Hello, {name}</h2>
      <p>You are {age} years old</p>
      <hr />
      <div> 
        <AgeStatus />
      </div>
      <hr />
      <div>
        <FruitList />
      </div>
      <hr />
      <div><h4>4th exercise display message </h4>
        <Message />
      </div><hr />
      <div>
        <Title title="React Basic-Props" />
        <Description description="Props help pass data between components."/>
      </div><hr />
      <div>
        <h1>Authentication Check</h1>
        <LoginStatus isLoggedIn={true} />
      </div>
    </div>
    
  );
  
 
  
}

export default App;
