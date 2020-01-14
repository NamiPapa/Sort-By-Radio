import React from 'react';
import Radio from './checkedRadio';

import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [ 
        {name: "Zlex", birthday: "02/09/1981"},
        {name: "Cecllia", birthday: "09/16/1993"},
        {name: "Deta", birthday: "10/31/1999"},
        {name: "John", birthday: "12/01/1982"},
        {name: "Lina", birthday:"01/16/2011"},
        {name: "Wallen", birthday:"11/30/1986"}],
      sort: null
    }
  }
  // compare = (a, b) => {
  //   let start = 0;
  //   while(start < a.length && b.length){
  //     if(a[start].toLowerCase() < b[start].toLowerCase()){
  //       return -1
  //     }else if(a[start].toLowerCase() > b[start].toLowerCase()){
  //       return 1
  //     }
  //     else{
  //       start +=1
  //     }
  //   }
  //   return -1;
  // }
  compare = (a, b) => {
    if (a < b){
      return -1
    } else {
      return 1
    }
  }
  handleSort = e => {
    let type = e.target.value;
    var data = this.state.data;
    switch(type){
      case "name":
        data = data.sort((a, b) => this.compare(a.name.toLowerCase(), b.name.toLowerCase()));
        this.setState({...this.state, data: data, sort: type});
        break;
      case "age":
        data = data.sort((a, b) => this.compare(Date.parse(a.birthday), Date.parse(b.birthday)));
        this.setState({...this.state, data: data, sort: type});
        break;
      default:
        this.setstate({...this.state, data: data, sort: type});
    }

  }
  render(){
    const sort=this.state.sort;
  return (
    <div>
      <div className="APP">
        <div className="Title">
          <h2>Birthday Records</h2>
        </div>
        <div className="Title">
          <label>
            <input
              type="radio"
              value="name"
              checked={sort==="name"}
              onChange={this.handleSort}
            />
            name
          </label>
          <label>
            <input 
              type="radio"
              value="age"
              checked={sort==="age"}
              onChange={this.handleSort}
            />
            age
          </label>
        </div>
        <div className="Title">
          <table>
            <thead>
              <tr>
                <th>
                  Person Name
                </th>
                <th>
                  Date of Birth
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((item, index) => {
                  return(
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.birthday}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}}

export default App;
