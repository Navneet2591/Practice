import React from "react"

import "./App.css"

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "./redux/Counter/counter.actions"
import { BrowserRouter } from "react-router-dom"
import Routers from "./routes"
 

function App(props) {
  return (
     <BrowserRouter>
         <Routers />
      </BrowserRouter>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()), 
    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)