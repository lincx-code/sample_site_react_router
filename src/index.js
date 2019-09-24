import React from 'react' 
import {render} from 'react-dom' 

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'

import {
    Home,
    Sony,
    AudioTechnica,
    Sennheiser,
    Akg,
    Notfound404
} from './pages'

window.React = React

render(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sony" component={Sony} />
        <Route path="/audio-technica" component={AudioTechnica} />
        <Route path="/sennheiser" component={Sennheiser} />
        <Route path="/akg" component={Akg} />
        <Route component={Notfound404} />
      </Switch>
    </HashRouter>,
    document.getElementById('react-container')
  )

