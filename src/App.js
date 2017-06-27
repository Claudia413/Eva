import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Loading from './components/Loading'
import LoadErrorMessage from './components/LoadErrorMessage'
import muiTheme from './styles/theme'
import Navigation from './components/Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Loading />
          <Navigation />
          { this.props.children }
          <LoadErrorMessage />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
