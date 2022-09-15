import React, { Component } from 'react'
import NevBar from './components/NevBar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <NevBar/>
        <News pageSize={12}/>
      </div>
    )
  }
}
