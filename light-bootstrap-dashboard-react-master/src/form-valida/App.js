import React, { Component } from "react";
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
//import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";


class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form onChange={fields => this.onChange(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
