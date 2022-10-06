
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = ()=> {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey = {apiKey} key="general" pageSize={pageSize} category="general" categoryType="General" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey = {apiKey} key="business" pageSize={pageSize} category="business" categoryType="Businesss" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey = {apiKey} key="entertainment" pageSize={pageSize} category="entertainment" categoryType="Entertainment" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey = {apiKey} key="sports" pageSize={pageSize} category="sports" categoryType="Sports" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey = {apiKey} key="health" pageSize={pageSize} category="health" categoryType="Health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey = {apiKey} key="science" pageSize={pageSize} category="science" categoryType="Science" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey = {apiKey} key="technology" pageSize={pageSize} category="technology" categoryType="Technology" />} />
          </Routes>
        </Router>
      </>
    )
  
}

export default App;