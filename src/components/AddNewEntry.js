import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate } from "react-router-dom";

export default function Createentry() {
  const navigate=useNavigate()
  const [myState, setMyState]=React.useState({
      name: '',
      description: '',
      price: 0,
      date: new Date(),
      clients: []
    }
  )
  
  React.useEffect(function(){
    axios.get('http://localhost:5000/clients/')
      .then(response => {
        if (response.data.length > 0) {
          setMyState(prevState=>({...prevState,
            clients: response.data.map(user => user.name),
            name: response.data[0].name
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      })
  },[])

  function onChangeName(e) {
    setMyState(prevState=>({...prevState,
      name: e.target.value
    }))
  }

  function onChangeDescription(e) {
    setMyState(prevState=>({...prevState,
      description: e.target.value
    }))
  }

  function onChangePrice(e) {
    setMyState(prevState=>({...prevState,
      price: e.target.value
    }))
  }

  function onChangeDate(date) {
    setMyState(prevState=>({...prevState,
      date: date
    }))
  }

  function onSubmit(e) {
    e.preventDefault();

    const entry = {
      name: myState.name,
      description: myState.description,
      price: myState.price,
      date: myState.date
    }

    console.log(entry);

    axios.post('http://localhost:5000/records/add', entry)
      .then(res => console.log(res.data));

      navigate("/");
  }
 
    return (
    <div>
      <h3>Create New Entry</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <select 
              required
              className="form-control"
              value={myState.name}
              onChange={onChangeName}>
              {
                myState.clients.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={myState.description}
              onChange={onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Price($): </label>
          <input 
              type="text" 
              className="form-control"
              value={myState.price}
              onChange={onChangePrice}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={myState.date}
              onChange={onChangeDate}
            />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Add new entry" className="btn btn-primary" />
        </div>
      </form>
    </div>
    ) 
}