
import './App.css';

import { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// for loading bar 
import React from 'react'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  constructor(){
    super()
    this.state = {
      progress: 0
    }
    
  }
  apikey = process.env.REACT_APP_API_KEY
  

  setProgress = (progress)=>{
    this.setState({
      progress: progress
    })
    console.log('under the setProgress function')
  }
  c = 'vipul don';
  render() {
    return (
      <>
        {/* // <div>this is my class project-2 {this.c}</div> */}
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            // height = {3}
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/'
              element={<NewsComponent apikey={this.apikey} setProgress={this.setProgress}  key={'general'} pageSize={8} country={'in'} category={'general'} />}
            />
            <Route exact path='/business'
              element={<NewsComponent apikey={this.apikey} setProgress={this.setProgress}  key={'business'} pageSize={8} country={'in'} category={'business'} />}
            />
            <Route exact path='/entertainment'
              element={<NewsComponent apikey={this.apikey} setProgress={this.setProgress}  key={'entertainment'} pageSize={8} country={'in'} category={'entertainment'} />}
            />
            <Route exact path='/health'
              element={<NewsComponent apikey={this.apikey} setProgress={this.setProgress}  key={'health'} pageSize={8} country={'in'} category={'health'} />}
            />
            <Route exact path='/science'
              element={<NewsComponent apikey={this.apikey} setProgress={this.setProgress}  key={'science'} pageSize={8} country={'in'} category={'science'} />}
            />
            <Route exact path='/sport'
              element={<NewsComponent apikey={this.apikey} setProgress={this.setProgress}  key={'sport'} pageSize={8} country={'in'} category={'sport'} />}
            />
            <Route exact path='/technology'
              element={<NewsComponent apikey={this.apikey} setProgress={this.setProgress}  key={'technology'} pageSize={8} country={'in'} category={'technology'} />}
            />
            <Route exact path='/About'
              element={<About key={'about'} />}
            />
          </Routes>
        </Router>
      </>
    )
  }
}

