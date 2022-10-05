
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/"element={<News key= "general" pageSize={this.pageSize} category="general" categoryType="General" />} />
            <Route exact path="/business"element={<News key= "business" pageSize={this.pageSize} category="business" categoryType="Businesss" />} />
            <Route exact path="/entertainment"element={<News key= "entertainment" pageSize={this.pageSize} category="entertainment" categoryType="Entertainment" />} />
            <Route exact path="/sports"element={<News key= "sports" pageSize={this.pageSize} category="sports" categoryType="Sports" />} />
            <Route exact path="/health"element={<News key= "health" pageSize={this.pageSize} category="health" categoryType="Health" />} />
            <Route exact path="/science"element={<News key= "science" pageSize={this.pageSize} category="science" categoryType="Science" />} />
            <Route exact path="/technology"element={<News key= "technology" pageSize={this.pageSize} category="technology" categoryType="Technology" />} />
          </Routes>
        </Router>
      </>
    )
  }
}


