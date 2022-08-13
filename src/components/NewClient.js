import React from 'react';
import axios from 'axios';

export default function NewClient() {
 
  const [myState, setMyState]=React.useState(
    {
      name: ''
    }
  )

  function onChangename(e) {
    setMyState({
      name: e.target.value
    })
  }

  function onSubmit(e) {
    e.preventDefault();

    const user = {
      name: myState.name
    }

    console.log(user);

    axios.post('http://localhost:5000/clients/add', user)
      .then(res => console.log(res.data));

      setMyState({
      name: ''
    })
  }

    return (
      <div>
        <h3>Create New Client</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={myState.name}
                onChange={onChangename}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Add Client" className="btn btn-primary" />
          </div>
        </form>
      </div>
    ) 
}