import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.users
            .map(user =>
              <li key={user.id}>{user.name}</li>
            )
        }
      </ul>
    )
  }
}