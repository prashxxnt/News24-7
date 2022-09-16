import React, { Component } from 'react'
import NevBar from './components/NevBar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NevBar/>
        <Routes>
          <Route path="/" element={<News pageSize={12} country="in" category="general"/>} />
          <Route path="business/*" element={<News pageSize={12} country="in" category="business"/>} />
          <Route path="entertainment/*" element={<News pageSize={12} country="in" category="entertainment"/>} />
          <Route path="general/*" element={<News pageSize={12} country="in" category="general"/>} />
          <Route path="health/*" element={<News pageSize={12} country="in" category="health"/>} />
          <Route path="science/*" element={<News pageSize={12} country="in" category="science"/>} />
          <Route path="sports/*" element={<News pageSize={12} country="in" category="sports"/>} />
          <Route path="technology/*" element={<News pageSize={12} country="in" category="technology"/>} />
        </Routes>
      </BrowserRouter>
    );
    // return (
    //   <div>
    //     <NevBar/>
    //     <News pageSize={12} country="in" category="sports"/>
    //   </div>
    // )
  }
}
