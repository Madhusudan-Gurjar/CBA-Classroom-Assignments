import UserProfile from "./components/UserProfile";
import CartFunction from "./components/CartFunction";
import CartClass from "./components/CartClass";
import UsersFunction from "./components/UserFunction";
import UsersClass from "./components/UserClass";


function App() {
  return (
    <div>
      <h3>Exercise 1</h3>
      <UserProfile
        name="Madhu"
        email="madhu@gmail.com"
        role="User"
      /> <hr /><hr />
      <h3>Exercise 2</h3>

      <CartFunction /><hr />
      <CartClass />
      <hr /><hr />
            <h3>Exercise 3</h3>

      <UsersFunction /><hr />
      <UsersClass />      <hr /><hr />

    </div>
  );
}

export default App;