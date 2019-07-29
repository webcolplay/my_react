import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Nav'
import getRouter from '../router'

const App = () => (
  // <div>
  //   <AddTodo />
  //   <VisibleTodoList />
  //   <Footer />
  // </div>
  <Router>
    <Nav />
    {getRouter()}
  </Router>
)

export default App
