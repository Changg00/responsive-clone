import React, {Component} from 'react'
import NavBar from './Components/NavBar'
import Body1 from './Components/Body1'
import Body2 from './Components/Body2'
import './App.css'

class App extends Component{


  render(){

  return (
    <div className="App">
      <NavBar />
      <Body1 />
      <Body2 />
    </div>
  )
}
}

export default App;