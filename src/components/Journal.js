import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Entryitem(props){
  const newDate=new Date(props.entry.date)
  return(
  <tr>
    <td>{props.entry.name}</td>
    <td>{props.entry.description}</td>
    <td>{props.entry.price}</td>
    <td>{newDate.toString().substring(4,15)}</td>  
    <td>
      <Link to={"/edit/"+props.entry._id}>edit</Link> | <a href="/" onClick={() => { props.deleteEntry(props.entry._id) }}>delete</a>
    </td>
  </tr>)
}

export default function Journal() {
  const [myState, setMyState]=React.useState({records: []});
  
  React.useEffect(function(){
    
    axios.get('http://localhost:5000/records/')
      .then(response => {
        setMyState({ records: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  },[myState])
  
  function deleteEntry(id) {
    axios.delete('http://localhost:5000/records/'+id)
      .then(response => { console.log(response.data)});

      setMyState({
      records: myState.records.filter(el => el._id !== id)
    })
  }

  function entryList() {
    
    return myState.records.map(currentEntry => {
      return <Entryitem entry={currentEntry} deleteEntry={deleteEntry} key={currentEntry._id}/>;
    })
  }
  
  return (
      <div>
        <h3>Logged records</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entryList()}
          </tbody>
        </table>
      </div>
    )  
}