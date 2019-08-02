import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Nav'
import getRouter from '../router'
import Sider from '@/Menu/index.js'

const App = () => (
  // <div>
  //   <AddTodo />
  //   <VisibleTodoList />
  //   <Footer />
  // </div>
  <Router>
    <Sider />
    {getRouter()}
  </Router>
)

export default App
