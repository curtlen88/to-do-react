import './App.css';
import React, { Component } from 'react'
import ListItem from './ListItems';

class MyList extends Component {
  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
    this.setState({
      taskArray: []
    })
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) =>{
    e.preventDefault()
    this.setState(prevState => {
    return {
        // this is your push method (cant use push do to state being imutable)
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }

  render(){
    const todoItems =  this.state.taskArray.map((item,idx)=>{
      return <ListItem 
          task = {item} 
          key = {idx}
        />
    })
    return(
      <>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <input type="text" value={this.state.newItem} onChange={this.handleChange}/>
          <button type="submit">Add To List</button>
        </form>
        <ul>
          {todoItems}
        </ul>
        <button onClick={this.clearList}>Clear List</button>
      </>  
    )
  }
}

export default MyList;