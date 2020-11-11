import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Benefit } from './Screens/Benefit/Benefit'
import { Features } from './Screens/Features/Features'
import { ForWho } from './Screens/ForWho/ForWho'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/forwho' component={ForWho} />
        <Route path='/features' component={Features} />
        <Route path='/' exact component={Benefit} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App
