import React from "react";

class UsersClass extends React.Component {
  state = { users: [], loading: true };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data =>
        this.setState({ users: data, loading: false })
      );
  }

  render() {
    if (this.state.loading) return <p>Loading...</p>;

    return (
      <ul>
        {this.state.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UsersClass;
