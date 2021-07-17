import React,{createContext,useReducer} from 'react'
import {Switch,Route} from 'react-router-dom';
import './App.css';
import {Navbar} from './Components/Navbar'
import {Home} from './Components/Home'
import {Contact} from './Components/Contact'
import {Signup} from './Components/Signup'
import {Login} from './Components/Login'
import {About} from './Components/About'
import {Logout} from './Components/Logout'
import { ErrorPage } from './Components/ErrorPage';
import {initialState,reducer} from '../src/Reducer/UseReducer'

export const userContext =  createContext()

const Routing = ()=>{
  return(
    <Switch>
    <Route exact path="/" component={Home} />

    <Route path="/contact" component={Contact}/>

    <Route path="/login" component={Login} />

    <Route path="/signup" component={Signup} />

    <Route path="/about" component={About} />

    <Route path="/logout" component={Logout} />

    <Route component={ErrorPage} />
    </Switch>
  )
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <userContext.Provider value={{state, dispatch}}>
    <Navbar />
    <Routing />
    </userContext.Provider>
    </>
  )
}

export default App;

