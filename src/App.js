import React, { Component } from 'react'
import NevBar from './components/NevBar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

export default class App extends Component {


  state = {
    progress:0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <BrowserRouter>
        {/* <TopLoadingBar/> */}
        <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        </div>
        <NevBar />
        <Routes>
          <Route path="/" element={<News pageSize={12} country="in" category="general" setProgress={this.setProgress} />} />
          <Route path="business/*" element={<News pageSize={12} country="in" category="business" setProgress={this.setProgress} />} />
          <Route path="entertainment/*" element={<News pageSize={12} country="in" category="entertainment" setProgress={this.setProgress} />} />
          <Route path="general/*" element={<News pageSize={12} country="in" category="general" setProgress={this.setProgress} />} />
          <Route path="health/*" element={<News pageSize={12} country="in" category="health" setProgress={this.setProgress} />} />
          <Route path="science/*" element={<News pageSize={12} country="in" category="science" setProgress={this.setProgress} />} />
          <Route path="sports/*" element={<News pageSize={12} country="in" category="sports" setProgress={this.setProgress} />} />
          <Route path="technology/*" element={<News pageSize={12} country="in" category="technology" setProgress={this.setProgress} />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
